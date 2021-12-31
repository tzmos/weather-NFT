const HDWalletProvider = require('@truffle/hdwallet-provider')
require('dotenv').config()

const mnemonic = process.env.MNEMONIC
const rinkeby_url = process.env.RINKEBY_RPC_URL


module.exports = {
  networks: {
    binance_testnet: {
      provider: () => new HDWalletProvider(mnemonic, 'https://data-seed-prebsc-1-s1.binance.org:8545'),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    kovan: {
      provider: () => {
        return new HDWalletProvider(mnemonic, kovan_url)
      },
      network_id: '42',
      skipDryRun: true
    },
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(mnemonic, rinkeby_url)
      },
      networkCheckTimeout: 20000,
      network_id: '4',
      skipDryRun: true
    },
    matic: {
      provider: () => {
        return new HDWalletProvider(mnemonic, matic_url)
      },
      network_id: '137',
      skipDryRun: true
    },
    mumbai: {
      provider: () => {
        return new HDWalletProvider(mnemonic, 'https://matic-mumbai.chainstacklabs.com')
      },
      network_id: '80001',
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: '0.6.6',
    },
  },
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  },
  plugins: [
    'truffle-plugin-verify'
  ]
}
