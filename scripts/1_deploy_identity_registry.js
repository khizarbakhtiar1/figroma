// scripts/1_deploy_identity_registry.js
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const IdentityRegistry = await ethers.getContractFactory("IdentityRegistry");
  const identityRegistry = await IdentityRegistry.deploy();

  await identityRegistry.deployed();

  console.log("IdentityRegistry deployed to:", identityRegistry.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
