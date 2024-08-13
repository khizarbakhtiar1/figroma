import { ethers } from "ethers";
import IdentityRegistryArtifact from "../../../frontend/artifacts/contracts/IdentityRegistry.sol/IdentityRegistry.json";
import FactoryArtifact from "../../../frontend/artifacts/contracts/Factory.sol/Factory.json";
const RPC_URL = "https://rpc-vanguard.vanarchain.com";

export const provider = new ethers.JsonRpcProvider(RPC_URL);

export const identityRegistryContract = new ethers.Contract(
  "0x2A02EA91c93974D46533Abf1746061FA8c99352E", // IdentityRegistry contract address
  IdentityRegistryArtifact.abi,
  provider
);

export const factoryContract = new ethers.Contract(
  "0x3CBC12B08fa3f3E78AF683Eef8Bfe6978664e9c1", // Factory contract address
  FactoryArtifact.abi,
  provider
);

export const getEthereumContract = async (contractName) => {
  let artifact;
  if (contractName === "IdentityRegistry") {
    artifact = await import(
      "../../../frontend/artifacts/contracts/IdentityRegistry.sol/IdentityRegistry.json"
    );
  } else if (contractName === "Factory") {
    artifact = await import(
      "../../../frontend/artifacts/contracts/Factory.sol/Factory.json"
    );
  } else {
    throw new Error(`Unknown contract name: ${contractName}`);
  }

  // const signer = await provider.getSigner();
  return new ethers.Contract(artifact.address, artifact.abi, signer);
};
