//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
contract C{
    uint public data=12;
    uint internal iData=13;
    function get() public  returns (uint){
        data=13; //Internal access
        return data;
    }
}
contract Caller1 {
    C c =new C();
    function get1() public view returns (uint){
        return c.data();
    }
}
contract D is C{
    function get2() public returns(uint){
        iData=3;
        return iData;
    }
    function getResult() public returns(uint){
        return data;
    }
}
