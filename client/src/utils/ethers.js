import { ethers } from "ethers";
import IdentityRegistryArtifact from "../artifacts/contracts/IdentityRegistry.sol/IdentityRegistry.json";
import FactoryArtifact from "../artifacts/contracts/Factory.sol/Factory.json";

const RPC_URL = "https://rpc-vanguard.vanarchain.com";

export const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

export const identityRegistryContract = new ethers.Contract(
  "0x371E23E2E16FcD36887d0DFC9D93f7fCdBfcc86D", // IdentityRegistry contract address
  IdentityRegistryArtifact.abi,
  provider
);

export const factoryContract = new ethers.Contract(
  "0x106567D6345786a36E1DeAB6b464e1a914bE1c4d", // Factory Contract Address
  FactoryArtifact.abi,
  provider
);
