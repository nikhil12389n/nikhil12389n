//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
contract SolidityTest
{
    Person[] public people;
    uint public count;
    struct Person
    {
        string first_name;
        string last_name;
    }
    function addperson(string memory a,string memory b) public{
        people.push(Person(a,b));
        count++;
    } 
}