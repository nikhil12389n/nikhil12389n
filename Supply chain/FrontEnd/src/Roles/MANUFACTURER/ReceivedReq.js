import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import ConnectContract from '../Connection/ConnectContract2';
import ConnectMetamask from '../Connection/ConnectMetaMask';
let account="0x85e19d642d24fe428Eb9205F077a856CA8bC95B0";
export default function ManufReceivedReq() {
    const [res,setRes]=useState([]);
    ConnectMetamask();
    ConnectContract();
    useEffect(()=>{
        const fetchdata=async()=>{
            const res=await window.contract1.methods.getallmanuf().call();
            console.log(res);
            setRes(res);
        }
        fetchdata();
    },[]);
    const accept=async(row)=>{
        await window.contract1.methods.ManufAccept(parseInt(row.reqno),row.from).send({from:account});
    }
  return (
    <>
    <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">RequestNo</th>
            <th scope="col">Reqorigin</th>
            <th scope="col">Reqfrom</th>
            <th scope="col">Products</th>
            <th scope="col">Quantities</th>
            <th scope="col">Date</th>
            
            <th scope="col">Accept</th>
            
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
                        <td>{row.products}</td>
                        <td>{row.quantities}</td>
                        
                        <td>{row.date}</td>
                        <td>
                            <button className='btn btn-primary' onClick={()=>accept(row)}>Accept</button>
                        </td>
                    </tr>
                )
            })
            
        }
  
      </tbody>

      </table>

       
    </>
  )
}
