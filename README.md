# ERC20 Token Viewer

**token-viewer** is a simple tool for retrieving ERC-20 token name, symbol, decimals, balance, and allowance for multiple tokens and ETH with a single rpc call.

## Features

- Fetch name, symbol, decimals, user balance, spender allowance for multiple ERC-20 token and ETH with one RPC call.
- Supports custom RPC URL.

## Support Chains

We plan to support more chains.

|                 | Contract Address |
|-----------------|------------------|
| Ethereum        | `0x9C11068da5E8956D14ca6f4a8c9E2b782B99fdfB`            |
| Polygon         | `0x9C11068da5E8956D14ca6f4a8c9E2b782B99fdfB`            |
| Arbitrum        | `0x9C11068da5E8956D14ca6f4a8c9E2b782B99fdfB`            |
| Goerli          | `0x9C11068da5E8956D14ca6f4a8c9E2b782B99fdfB`            |
| Arbitrum Goerli | `0x9C11068da5E8956D14ca6f4a8c9E2b782B99fdfB`            |

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

[
  [
    '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    'USD Coin',
    'USDC',
    BigNumber { _hex: '0x06', _isBigNumber: true },
    BigNumber { _hex: '0x04e0a5aa', _isBigNumber: true },
    BigNumber { _hex: '0x00', _isBigNumber: true },
    addr: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: BigNumber { _hex: '0x06', _isBigNumber: true },
    balance: BigNumber { _hex: '0x04e0a5aa', _isBigNumber: true },
    allowance: BigNumber { _hex: '0x00', _isBigNumber: true }
  ],
  [
    '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    'Dai Stablecoin',
    'DAI',
    BigNumber { _hex: '0x12', _isBigNumber: true },
    BigNumber { _hex: '0x1d500005c4010400', _isBigNumber: true },
    BigNumber { _hex: '0x00', _isBigNumber: true },
    addr: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    name: 'Dai Stablecoin',
    symbol: 'DAI',
    decimals: BigNumber { _hex: '0x12', _isBigNumber: true },
    balance: BigNumber { _hex: '0x1d500005c4010400', _isBigNumber: true },
    allowance: BigNumber { _hex: '0x00', _isBigNumber: true }
  ],
  [
    '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    'Wrapped BTC',
    'WBTC',
    BigNumber { _hex: '0x08', _isBigNumber: true },
    BigNumber { _hex: '0x00', _isBigNumber: true },
    BigNumber { _hex: '0x00', _isBigNumber: true },
    addr: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    name: 'Wrapped BTC',
    symbol: 'WBTC',
    decimals: BigNumber { _hex: '0x08', _isBigNumber: true },
    balance: BigNumber { _hex: '0x00', _isBigNumber: true },
    allowance: BigNumber { _hex: '0x00', _isBigNumber: true }
  ],
  [
    '0x0000000000000000000000000000000000000000',
    'Ethereum',
    'ETH',
    BigNumber { _hex: '0x12', _isBigNumber: true },
    BigNumber { _hex: '0x0f9d5f9b8fe563f6', _isBigNumber: true },
    BigNumber { _hex: '0x00', _isBigNumber: true },
    addr: '0x0000000000000000000000000000000000000000',
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: BigNumber { _hex: '0x12', _isBigNumber: true },
    balance: BigNumber { _hex: '0x0f9d5f9b8fe563f6', _isBigNumber: true },
    allowance: BigNumber { _hex: '0x00', _isBigNumber: true }
  ]
]
```

## Author

- [Clober](https://clober.io)
