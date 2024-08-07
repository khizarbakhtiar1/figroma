const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const IdentityRegistry = await hre.ethers.getContractFactory(
    "IdentityRegistry"
  );
  const identityRegistryAddress = "ADDRESS_FROM_STEP_1"; // Replace with actual address

  const Factory = await hre.ethers.getContractFactory("Factory");
  const factory = await Factory.deploy(
    identityRegistryAddress,
    deployer.address
  );

  await factory.deployed();

  console.log("Factory deployed to:", factory.address);

  // Set factory address in IdentityRegistry
  const identityRegistry = IdentityRegistry.attach(identityRegistryAddress);
  await identityRegistry.setFactory(factory.address);
  console.log("Factory address set in IdentityRegistry");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
