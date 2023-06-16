import React from 'react'

import {  ABI2 } from '../ABI/ABI2';
import Web3 from 'web3';

import {  Address2 } from '../Address/Address2.jsx';
import {Address3} from "../Address/Address3.jsx"
import { ABI3 } from '../ABI/ABI3';


export default async function ConnectContractSR() {
    const ABIa =ABI2;
    const Addressa=Address2;
    
            const ABIb=ABI3;
    const Addressb=Address3;
            window.web3 = await new Web3(window.ethereum);
            window.contract = await new window.web3.eth.Contract(ABIa, Addressa);
            window.contract1 = await new window.web3.eth.Contract(ABIb, Addressb);
}
