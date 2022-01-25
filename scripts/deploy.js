//const hre = require("hardhat");
//import Web3 from 'web3';

//const KEPT_BALANCE = Web3.toWei(100, "ether")

const main = async () => {

    const dappTokenFactory = await hre.ethers.getContractFactory("DAppToken");
    const dappTokenContract = await dappTokenFactory.deploy();
    await dappTokenContract.deployed();

    const tokenYieldFarmContractFactory = await hre.ethers.getContractFactory("TokenYieldFarm");
    const tokenContract = await tokenYieldFarmContractFactory.deploy(dappTokenContract.address);
    await tokenContract.deployed();

    // let tx = dappTokenContract.transfer(tokenContract.address, dappTokenContract.totalSupply() -  KEPT_BALANCE, {"from": account});
    // await tx.wait(1);

    // dapp_token, weth_token, fau_token or dai
   // add_allowed_tokens();

    console.log("Token Yield Farm Contract deployed to:", tokenContract.address);
    console.log("DApp Token Contract deployed to:", dappTokenContract.address);


};


const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();