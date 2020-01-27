const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "c6a480df17fc474da0d0e782520b038d";

const fs = require('fs');
const mnemonic = "emotion member desert above uncover miracle happy bring seek cake elevator high";

module.exports = {
  contracts_build_directory: "./client/src/contracts",
  networks: {
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,       // Rinkeby's id
      gas: 5500000,        // Rinkeby has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },
};