const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    await deployer.getAddress()
  );

  const IdentityRegistry = await hre.ethers.getContractFactory(
    "IdentityRegistry"
  );
  const identityRegistryAddress = "0x371E23E2E16FcD36887d0DFC9D93f7fCdBfcc86D"; // Replace with actual address

  const Factory = await hre.ethers.getContractFactory("Factory");
  const factory = await Factory.deploy(
    identityRegistryAddress,
    await deployer.getAddress()
  );

  // Wait for the transaction to be mined
  await factory.waitForDeployment();

  console.log("Factory deployed to:", await factory.getAddress());

  // Set factory address in IdentityRegistry
  const identityRegistry = IdentityRegistry.attach(identityRegistryAddress);
  await identityRegistry.setFactory(await factory.getAddress());
  console.log("Factory address set in IdentityRegistry");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
