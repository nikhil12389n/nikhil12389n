//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
contract HelloWorld
{
    string input="hi";
    uint public a;
    uint public  b;
    uint  public c;
    function hello() public pure returns(string memory){
        return "Hello contract";
    }
    function set(string memory finalvalue,uint a1,uint b1) public{
        input=finalvalue;
        a=a1;
        b=b1;
        c=a+b;
    }
    function get() public view returns(uint){
        return c;
    }
}