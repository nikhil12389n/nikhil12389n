//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
contract Loginvendor
{
    
    mapping (string=>mapping(string=>string)) public vendors;
  
    function login(string memory a,string memory b)  public view returns(string memory){
        if(keccak256(bytes(vendors[a][b])) != keccak256(bytes(""))){
            return vendors[a][b];
        }
        else{
            return "entered wrong details";
        }
    }


    // function put() public{
    //     vendors["vendor1@123"]["password1"]="vendor1";
    //     vendors["vendor2@123"]["password2"]="vendor2";
    // }
}