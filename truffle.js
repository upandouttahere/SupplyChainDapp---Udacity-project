const HDWalletProvider = require('truffle-hdwallet-provider');
// const HDWalletProvider = require('@truffle/hdwallet-provider'); --leads to error message
const infuraKey = "6a480df17fc474da0d0e782520b038d";

// const fs = require('fs');
const mnemonic = "emotion member desert above uncover miracle happy bring seek cake elevator high";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545, // or 8545?
      network_id: "*"
    },
    
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `http://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,
      gas: 5000000,
      gasPrice: 10000000000,
      skipDryRun: true,
    },
  }
};