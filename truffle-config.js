const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(process.env.MNEMONIC, `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`),
      network_id: 4,
      gas: 5500000,
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",
    },
  },
};