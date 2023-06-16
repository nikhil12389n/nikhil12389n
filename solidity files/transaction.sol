//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
contract SolidityTest
{
    mapping(address=>uint8) public balances;
    address payable wallet;
    constructor(address payable _wallet) public {
        wallet=_wallet;
    }
    function buytoken() public payable
    {
        //buy a token.....!
        balances[msg.sender]+=1;
        //transfer eher to wallet...!
        wallet.transfer(msg.value);
    }
}