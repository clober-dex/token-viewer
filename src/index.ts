import { ethers } from 'ethers'

import { ITokenViewer, TokenViewer__factory } from '../typechain'

import { NETWORK_RPC_URLS } from './constants'
import { ADDRESSES } from './addresses'

/**
 * Gets token balances and allowances of a user for a list of contracts.
 *
 * @param chainId - The chain id of the network the tokens are deployed on.
 * @param tokens - The array of token addresses to query.
 * @param [user=0x0000000000000000000000000000000000000000] The address of the user to retrieve the token balances from.
 * @param [spender=0x0000000000000000000000000000000000000000] The address of the spender to retrieve the allowances from.
 * @param rpcUrl - Optional parameter to provide a custom RPC URL.
 *
 * @param contractAddr
 * @returns An array of token symbols, decimals, balances and allowances.
 * The last element has the symbol, decimal, and balance of the native asset (ETH).
 * Empty array for unsupported chains.
 */
export const getTokens = async (
  chainId: number,
  tokens: string[],
  user: string = ethers.constants.AddressZero,
  spender: string = ethers.constants.AddressZero,
  rpcUrl?: string,
  contractAddr?: string,
): Promise<ITokenViewer.TokenDtoStructOutput[]> => {
  const provider = new ethers.providers.JsonRpcProvider(
    rpcUrl || NETWORK_RPC_URLS[chainId],
  )
  try {
    const tokenViewer = await TokenViewer__factory.connect(
      contractAddr || ADDRESSES[chainId],
      provider,
    )
    return await tokenViewer.getTokens(tokens, user, spender)
  } catch (e) {
    return []
  }
}
