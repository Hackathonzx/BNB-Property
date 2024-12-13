require("@nomicfoundation/hardhat-ethers");
require('@nomicfoundation/hardhat-toolbox');
require("dotenv").config();

const { RPC_URL, PRIVATE_KEY } = process.env

module.exports = {
  solidity: "0.8.19",
  networks: {
    MantleSepoliaTestnet: {
      url: process.env.RPC_URL,
      chainId: 5003,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
} 