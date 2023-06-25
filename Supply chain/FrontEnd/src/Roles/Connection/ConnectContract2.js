import React from 'react'


import Web3 from 'web3';
import {ABI2} from "./ABI2.js";
import { Address2 } from './Address2';


export default async function ConnectContractSR() {
    const ABI1 =ABI2;
    const Address1=Address2;  
    window.web3 = await new Web3(window.ethereum);
    window.contract1 = await new window.web3.eth.Contract(ABI1, Address1);
}
