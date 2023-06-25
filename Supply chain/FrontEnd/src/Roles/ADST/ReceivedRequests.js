import React, { useState } from 'react'
import { useEffect } from 'react'
import ConnectMetamask from '../Connection/ConnectMetaMask';
import ConnectContract from '../Connection/ConnectSmartContract';
let account="0x85e19d642d24fe428Eb9205F077a856CA8bC95B0";
export default function ReceivedRequests() {
    const [res,setRes]=useState([]);
    
    ConnectMetamask();
    ConnectContract();
    useEffect(()=>{
        const fetchdata=async()=>{
            const res=await window.contract.methods.getAllreceivedDDST(localStorage.getItem("ROLENAME")).call();
            setRes(res);
            console.log(res);
        }
        fetchdata();
    },[]);
    const accept=async(row)=>{
      await window.contract.methods.adstsacceptfromdivision(parseInt(row.reqno),localStorage.getItem("ROLENAME"),row.from).send({from:account});
    }
    const decline=async(row)=>{
      await window.contract.methods.adstreject(parseInt(row.reqno),localStorage.getItem("ROLENAME"),row.reqfrom).send({from:account});
    }
  return (
    <>
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">RequestNo</th>
      <th scope="col">Reqorigin</th>
      <th scope="col">Reqfrom</th>
      <th scope="col">Products</th>
      <th scope="col">Quantities</th>
      <th scope="col">Date</th>
      <th scope="col">Accept</th>
      <th scope="col">Decline</th>
    </tr>
  </thead>
  <tbody>
        {
           res.map((row,i)=>{
            return (
                row.status==="pending" && 
                <tr>
                    <td>{parseInt(row.reqno)}</td>
                    <td>{row.from}</td>
                    <td>{row.reqfrom}</td>
                    <td>{row.products.join(",")}</td>
                    <td>{row.quantities.join(",")}</td>
                    <td>{row.date}</td>
                    <td>
                        <button className='btn btn-primary' onClick={()=>accept(row)}>Accept</button>
                    </td>
                    <td>
                    <button className='btn btn-primary' onClick={()=>decline(row)}>Reject</button>
                    </td>
                </tr>
                
                
            );
           })
        }
    
  </tbody>
  
</table>
    </>
  )
}
