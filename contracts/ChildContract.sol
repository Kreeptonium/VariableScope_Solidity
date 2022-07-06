// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import {Root} from "./RootContract.sol";

contract Child is Root{

function getinternal() public returns(uint)
{
iData = 800;
return iData;
}

function getpublicdata() public view returns(uint)
{
   return pData;
}
}
