const WeatherFeed = artifacts.require('WeatherFeed')
const TmosNFT = artifacts.require('TmosNFT')
const LinkTokenInterface = artifacts.require('LinkTokenInterface')
const { networkConfig } = require('../scripts/helper-scripts.js')

module.exports = async (deployer, network, [defaultAccount]) => {
    let amount = networkConfig[deployer.network_id]["fundAmount"]
    const weatherFeed = await WeatherFeed.deployed()
    const weatherNFT = await TmosNFT.deployed()
    if (deployer.network_id != 4447) {
        const tokenAddress = networkConfig[deployer.network_id]["linkToken"]
        const token = await LinkTokenInterface.at(tokenAddress)
        console.log('部署天氣種子合約資金地址:', weatherFeed.address)
        let tx = await token.transfer(weatherFeed.address, amount, { from: defaultAccount })
        console.log(tx.tx)
        console.log('部署TmosNFT合約資金地址:', weatherNFT.address)
        let tx2 = await token.transfer(weatherNFT.address, amount, { from: defaultAccount })
        console.log(tx2.tx)
    }

}
