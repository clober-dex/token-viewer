import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const deployFunction: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment,
) {
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()
  await deploy('TokenViewer', {
    from: deployer,
    args: [],
    log: true,
  })
}

deployFunction.tags = ['TokenViewer']
deployFunction.dependencies = []
export default deployFunction
