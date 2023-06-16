//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
contract SolidityTest
{
    uint public peopleCount=0;
    mapping(uint=>Person) public people;
    address owner;
    modifier OnlyOwner(){
        require(msg.sender==owner);
        _;
    }
    struct Person{
        uint _id;
        string first_name;
        string last_name;
    }

    constructor () public{
        owner=0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    }
    function addperson(string memory a,string memory b) public OnlyOwner
    {
        increment();
        people[peopleCount]=Person(peopleCount,a,b);
    }
    function increment() internal{
        peopleCount+=1;
    }
}