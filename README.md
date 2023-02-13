# ERC20 Token Viewer

**token-viewer** is a simple tool for retrieving ERC-20 token name, symbol, decimals, balance, and allowance for multiple tokens and ETH with a single rpc call.

## Features

- Fetch name, symbol, decimals, user balance, spender allowance for multiple ERC-20 token and ETH with one RPC call.
- Supports custom RPC URL.

## Support Chains

We plan to support more chains.

|                 | Contract Address |
|-----------------|------------------|
| Ethereum        | `TBD`            |
| Goeril          | `TBD`            |
| Polygon         | `TBD`            |
| Arbitrum        | `TBD`            |
| Arbitrum Goeril | `TBD`            |

## Installation

To install **token-viewer**, run the following command in your project's root directory:

```shell
npm install --save token-viewer
```

## Usage

See [the auto-generated](./docs/modules.md) docs for more info on methods and parameters.

### Fetch Tokens

```typescript
import { getTokens } from 'token-viewer'

console.log(
  await getTokens(
    1, // Ethereum chain id
    [
      '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      '0x6b175474e89094c44da98b954eedeac495271d0f',
      '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    ],
    '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B', // user
    '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // spender
  ),
)
```

output:

```
TBD
```

## Author

- [Clober](https://clober.io)
