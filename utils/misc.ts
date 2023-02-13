import { Contract } from 'ethers'
import { HardhatRuntimeEnvironment } from 'hardhat/types'

let HRE: HardhatRuntimeEnvironment | undefined
export const getHRE = (): HardhatRuntimeEnvironment => {
  if (!HRE) {
    HRE = require('hardhat')
  }
  return HRE as HardhatRuntimeEnvironment
}

export const getDeployedContract = async <T extends Contract>(
  contractName: string,
): Promise<T> => {
  const hre = getHRE()
  const deployments = await hre.deployments.get(contractName)
  const contract = await hre.ethers.getContractAt(
    deployments.abi,
    deployments.address,
  )
  return contract as T
}
