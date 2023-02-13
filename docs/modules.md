[token-viewer](README.md) / Exports

# token-viewer

## Table of contents

### Functions

- [getTokens](modules.md#gettokens)

## Functions

### getTokens

▸ **getTokens**(`chainId`, `tokens`, `user?`, `spender?`, `rpcUrl?`): `Promise`<`TokenDtoStructOutput`[]\>

Gets token balances and allowances of a user for a list of contracts.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `chainId` | `number` | `undefined` | The chain id of the network the tokens are deployed on. |
| `tokens` | `string`[] | `undefined` | The array of token addresses to query. |
| `user?` | `string` | `ethers.constants.AddressZero` | The address of the user to retrieve the token balances from. |
| `spender?` | `string` | `ethers.constants.AddressZero` | The address of the spender to retrieve the allowances from. |
| `rpcUrl?` | `string` | `undefined` | Optional parameter to provide a custom RPC URL. |

#### Returns

`Promise`<`TokenDtoStructOutput`[]\>

An array of token symbols, decimals, balances and allowances.
The last element has the symbol, decimal, and balance of the native asset (ETH).
Empty array for unsupported chains.

#### Defined in

[index.ts:20](https://github.com/clober-dex/token-viewer/blob/d618c50/src/index.ts#L20)
