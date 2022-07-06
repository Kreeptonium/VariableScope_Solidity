// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract Root{

    uint public pData=50;
    uint internal iData=30;

function retpdata() public  returns (uint){

    pData = pData*10;
    return pData;

}

}


