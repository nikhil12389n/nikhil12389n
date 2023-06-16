import React from 'react'
import Web3 from 'web3';
import {Address3} from "../Address/Address3.jsx"
import { ABI3 } from '../ABI/ABI3';
export default async function ConnectContractSR() {
    const ABIb=ABI3;
    const Addressb=Address3;
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABIb, Addressb);
}
