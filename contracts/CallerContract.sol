// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;
import "hardhat/console.sol";
import {Root} from "./RootContract.sol";

contract Caller{

Root rt = new Root();

function callroot() public  returns (uint) {
    
    //console.log("Test");
    return rt.retpdata();
}

}

