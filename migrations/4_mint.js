const WeatherFeed = artifacts.require('WeatherFeed')
const TmosNFT = artifacts.require('TmosNFT')
const { networkConfig } = require('../scripts/helper-scripts.js')

module.exports = async (deployer, network, [defaultAccount]) => {
    // Local (development) networks need their own deployment of the LINK
    // token and the Oracle contract
    if (!network.startsWith('rinkeby')) {
        console.log("We can deploy stuff... but that's it!")
    }
    weatherNFT = await TmosNFT.deployed()
    await weatherNFT.mintWeatherNFT({ from: defaultAccount })
    await weatherNFT.mintWeatherNFT({ from: defaultAccount })
    await weatherNFT.mintWeatherNFT({ from: defaultAccount })
    await weatherNFT.mintWeatherNFT({ from: defaultAccount })
    await weatherNFT.approve(networkConfig[deployer.network_id]["oracle"], 0, { from: defaultAccount })
    await weatherNFT.approve(networkConfig[deployer.network_id]["oracle"], 1, { from: defaultAccount })
    await weatherNFT.approve(networkConfig[deployer.network_id]["oracle"], 2, { from: defaultAccount })
    await weatherNFT.approve(networkConfig[deployer.network_id]["oracle"], 3, { from: defaultAccount })
    console.log("在Opensea交易所上可以看到你鑄造的NFT啦!")
    console.log("https://testnets.opensea.io/assets/" + weatherNFT.address + "/0")
}
