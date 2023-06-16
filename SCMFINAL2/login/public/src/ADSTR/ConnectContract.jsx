import Web3 from "web3";
import { ABI1 } from "../ABI/ABI1";
import { Address1 } from "../Address/Address1";
export default async function  ConnectContract(){
    const ABI =ABI1;
    const Address=Address1;     
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, Address);
}
