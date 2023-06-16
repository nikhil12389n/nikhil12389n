import React from 'react'
import { ABI1 } from '../ABI/ABI1';
import {  ABI2 } from '../ABI/ABI2';
import Web3 from 'web3';
import { Address1 } from '../Address/Address1.jsx';
import {  Address2 } from '../Address/Address2.jsx';
import {Address3} from "../Address/Address3.jsx"


export default async function ConnectContractSR() {
    const ABI =ABI1;
    const Addressa=Address1;
    
            const ABI22=ABI2;
    const Addressb=Address2;
            window.web3 = await new Web3(window.ethereum);
            window.contract = await new window.web3.eth.Contract(ABI, Addressa);
            window.contract1 = await new window.web3.eth.Contract(ABI22, Addressb);
}
