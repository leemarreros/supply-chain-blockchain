require("dotenv").config();
var fs = require("fs");
const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    rinkeby: {
      provider: new HDWalletProvider(
        process.env.MNEMONIC,
        `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
      ),
      network_id: 4, // Rinkeby's id
      gas: 4500000, // Rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000,
      // confirmations: 2,    // # of confs to wait between deployments. (defau>
      // timeoutBlocks: 200,  // # of blocks before a deployment times out  (mi>
      // skipDryRun: true     // Skip dry run before migrations? (default: fals>
    },
  },
};
