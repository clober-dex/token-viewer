import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const deployFunction: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment,
) {
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()
  if (hre.network.name === 'hardhat') {
    await deploy('Token6', {
      from: deployer,
      args: [],
      log: true,
    })

    await deploy('Token8', {
      from: deployer,
      args: [],
      log: true,
    })

    await deploy('Token18', {
      from: deployer,
      args: [],
      log: true,
    })
  }
}

deployFunction.tags = ['MockTest']
deployFunction.dependencies = ['TokenViewer']
export default deployFunction
