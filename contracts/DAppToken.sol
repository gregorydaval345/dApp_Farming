// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DAppToken is ERC20 {
     constructor() public ERC20("Dapp Token", "DAPP"){
        _mint(msg.sender, 1000000000000000000);
    }
}

