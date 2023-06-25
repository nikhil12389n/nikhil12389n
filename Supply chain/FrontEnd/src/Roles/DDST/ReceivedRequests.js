import React, { useEffect } from 'react'
import { useState } from 'react';
import ConnectMetamask from '../Connection/ConnectMetaMask';
import ConnectContract from '../Connection/ConnectSmartContract';
let account="0x85e19d642d24fe428Eb9205F077a856CA8bC95B0";
export default function DDSTReceivedRequests() {
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
    const sendtoadsts=async(row)=>{
        await window.contract.methods.DDSTforwardRequest(row.reqfrom,localStorage.getItem("ROLENAME"),parseInt(row.reqno),row.products,row.quantities,row.date,row.from).send({from:account});
    }
    const sendtoalladsts=async(row)=>{
        
        await window.contract.methods.DDSTforwardRequest(row.reqfrom,localStorage.getItem("ROLENAME"),parseInt(row.reqno),row.products,row.quantities,row.date,row.from).send({from:account});

        
    }
    const sendtodgst=async(row)=>{

        console.log(row.products);
        await window.contract.methods.DDSTsendDGST(localStorage.getItem("ROLENAME"),parseInt(row.reqno),row.products,row.quantities,row.date,row.from).send({from:account});
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
      <th scope="col">Send to adsts</th>
      <th scope="col">Send to dgst</th>
    </tr>
  </thead>
  
  
 
  <tbody>
    {
        res.map((row,i)=>{
            
            return (
                (row.status==="pending" || (row.acceptedby==="No supplies in units" && (row.status==="approvedtoadsts" || row.status==="approvedtosomeadsts") && row.reqfrom!=="DGST") ) &&   
                <tr>
                    <td>
                       {parseInt(row.reqno)}
                    </td>
                    <td>
                        {row.from}
                    </td> 
                    <td>
                        {row.reqfrom}
                    </td>
                    <td>
                        {row.products.join(",")}
                    </td>
                    <td>
                        {row.quantities.join(",")}
                    </td>
                    <td>
                        {row.date}
                    </td>
                    <td>
                    {
                        (row.acceptedby==="No supplies in units" )?(<p>NA</p>):(row.status==="pending" && row.reqfrom!=="DGST") ?(<button className='btn btn-primary' onClick={()=>sendtoadsts(row)}>Send to adsts</button>):(<button className='btn btn-primary' onClick={()=>sendtoalladsts(row)}>Send to all adsts</button>)
                    }
                    </td>
                    <td>
                    {
                        (row.acceptedby==="No supplies in units")? (<button className='btn btn-primary' onClick={()=>sendtodgst(row)}>Send to DGST</button>):(<p>NA</p>)
                    }
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
