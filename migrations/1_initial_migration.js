const Migrations = artifacts.require('Migrations')
const { LinkToken } = require('@chainlink/contracts/truffle/v0.4/LinkToken')
const { Oracle } = require('@chainlink/contracts/truffle/v0.6/Oracle')


module.exports = async (deployer, network, [defaultAccount]) => {
  deployer.deploy(Migrations, { from: defaultAccount })
  if (!network.startsWith('rinkeby')) {
    LinkToken.setProvider(deployer.provider)
    Oracle.setProvider(deployer.provider)
  }
}
