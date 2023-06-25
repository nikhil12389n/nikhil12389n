import React from 'react'


import Web3 from 'web3';
import {ABI} from "./ABI.js";
import { Address } from './Address';


export default async function ConnectContractSR() {
    const ABI1 =ABI;
    const Address1=Address;  
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI1, Address1);
}
