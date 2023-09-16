import { ethers } from "hardhat"

async function main() {
  const transactions = await ethers.deployContract("Transactions")

  await transactions.waitForDeployment()

  console.log(
    `Deployed Transactions to: ${transactions.target}`
  )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
