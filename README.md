# Tmos-Weather-NFTs
<br/>
<p align="center">
<a href="https://testnets.opensea.io/assets/0x1666913CEf681283AE115104930b9D4ff68676Be/0" target="_blank">
<img src="https://ipfs.io/ipfs/QmdN4iTJibznDwBgNbB3CxE1hGZYWLCDYfDAW3tkPwxhrx" width="225" alt="wang li an">
</a>
</p>
<br/>
[Weather Condition Codes](https://openweathermap.org/weather-conditions)

## 操作步骤

- NPM INSTALL OR YARN INSTALL

## Installation

1. Install truffle(搭建开发环境truffle)

```bash
yarn global add truffle
```

2. Setup (从github克隆源码到自己的开发环境)

```bash
git clone https://github.com/tzmos/weather-NFT.git
cd weather-nft 
yarn
truffle migrate --network  rinkeby
```

3. Deploy(部署到rinkeby测试网中)

```
truffle migrate --network rinkeby
```

4. Verify(发布到etherscan.io网站进行合约验证)

```
yarn add truffle-plugin-verify
truffle run verify TmosNFT --network rinkeby --license MIT
truffle run verify WeatherFeed --network rinkeby --license MIT
```