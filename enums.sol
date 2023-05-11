//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
contract SolidityTest
{
    enum State {Waiting,Ready,Active}
    State public state;
    constructor () public
    {
        state=State.Waiting;
    }
    function active() public{
        state=State.Active;
    }
    function isActive() public view returns(bool){
        return state==State.Active;
    }
}