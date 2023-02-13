import { expect } from 'chai'
import hre from 'hardhat'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import BigNumber from 'bignumber.js'

import { ITokenViewer, Token6, Token8, Token18 } from '../typechain'
import { getDeployedContract } from '../utils/misc'

const { ethers, deployments, network } = hre
const TEN = new BigNumber(10)

describe('TokenViewer', () => {
  let Token6: Token6
  let Token8: Token8
  let Token18: Token18
  let TokenViewer: ITokenViewer
  let admin: SignerWithAddress
  let contract: SignerWithAddress
  beforeEach(async () => {
    network.provider.emit('hardhatNetworkReset')
    await deployments.fixture(['MockTest'])
    ;[admin, contract] = await ethers.getSigners()

    Token6 = await getDeployedContract<Token6>('Token6')
    Token8 = await getDeployedContract<Token8>('Token8')
    Token18 = await getDeployedContract<Token18>('Token18')
    TokenViewer = await getDeployedContract<ITokenViewer>('TokenViewer')

    await Token6.mint(admin.address, TEN.pow(6).multipliedBy(10).toString())
    await Token8.mint(admin.address, TEN.pow(8).multipliedBy(10).toString())
    await Token18.mint(admin.address, TEN.pow(18).multipliedBy(10).toString())

    await Token6.increaseAllowance(
      contract.address,
      TEN.pow(6).multipliedBy(10).toString(),
    )
    await Token8.increaseAllowance(
      contract.address,
      TEN.pow(8).multipliedBy(10).toString(),
    )
    await Token18.increaseAllowance(
      contract.address,
      TEN.pow(18).multipliedBy(10).toString(),
    )
  })

  it('get tokens', async () => {
    const result = await TokenViewer.getTokens(
      [Token6.address, Token8.address, Token18.address],
      admin.address,
      contract.address,
    )

    expect(result.length).to.be.eq(4)

    expect(result[0].addr).to.be.eq(Token6.address)
    expect(result[0].name).to.be.eq(await Token6.name())
    expect(result[0].symbol).to.be.eq(await Token6.symbol())
    expect(result[0].decimals).to.be.eq(await Token6.decimals())
    expect(result[0].balance).to.be.eq(TEN.pow(6).multipliedBy(10).toString())
    expect(result[0].allowance).to.be.eq(TEN.pow(6).multipliedBy(10).toString())

    expect(result[1].addr).to.be.eq(Token8.address)
    expect(result[1].name).to.be.eq(await Token8.name())
    expect(result[1].symbol).to.be.eq(await Token8.symbol())
    expect(result[1].decimals).to.be.eq(await Token8.decimals())
    expect(result[1].balance).to.be.eq(TEN.pow(8).multipliedBy(10).toString())
    expect(result[1].allowance).to.be.eq(TEN.pow(8).multipliedBy(10).toString())

    expect(result[2].addr).to.be.eq(Token18.address)
    expect(result[2].name).to.be.eq(await Token18.name())
    expect(result[2].symbol).to.be.eq(await Token18.symbol())
    expect(result[2].decimals).to.be.eq(await Token18.decimals())
    expect(result[2].balance).to.be.eq(TEN.pow(18).multipliedBy(10).toString())
    expect(result[2].allowance).to.be.eq(
      TEN.pow(18).multipliedBy(10).toString(),
    )

    expect(result[3].addr).to.be.eq(ethers.constants.AddressZero)
    expect(result[3].name).to.be.eq('Ethereum')
    expect(result[3].symbol).to.be.eq('ETH')
    expect(result[3].decimals).to.be.eq(18)
    expect(result[3].balance).to.be.eq(
      await ethers.provider.getBalance(admin.address),
    )
    expect(result[3].allowance).to.be.eq(0)
  })
})
