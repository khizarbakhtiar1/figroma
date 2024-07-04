import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-chai-matchers";

const config: HardhatUserConfig = {
  solidity: "0.8.25",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    sepolia: {
      url: process.env.ALCHEMY_SEPOLIA_URL || "",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
    // ... other networks (optional)
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY, // Optional, for Etherscan verification
  },
  paths: {
    artifacts: "./frontend/artifacts", // Optional, adjust path if needed
  },
};

export default config;
