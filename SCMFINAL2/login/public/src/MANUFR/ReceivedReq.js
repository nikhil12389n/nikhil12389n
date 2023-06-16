import React, { useContext } from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import ConnectMetamask from '../ADSTR/ConnectMetamask'
import ConnectContract from './ConnectContract';
import Context from "../index.js";

export default function ManufReceivedReq() {
  let data=useContext(Context);
  let account=data[localStorage.getItem("ROLENAME")];
  const accept=async(row)=>{
    await window.contract.methods.acceptmanufact(localStorage.getItem("ROLENAME"),row.from,row.reqno).send({from:account});
  }
  const [res,setRes]=useState([]);
  
  ConnectMetamask();
  ConnectContract();
  useEffect(()=>{
    const fetchdata=async()=>{
      const res=await window.contract.methods.getAllManufacturer().call();
      console.log(res);
      setRes(res);
    }
    fetchdata();
  },[]);
  return (
   <>
   <div className='container'>
    <table className='table table-striped table-hover'>
      <thead>
      <tr>
        <td>RequestNo</td>
        <td>Refrom</td>
        <td>From</td>
        <td>Products</td>
        <td>Quantities</td>
        <td>Date</td>
        <td>Accept</td>
      </tr>
      </thead>
      <tbody>
      {
           res.map((row,i)=>{
                
                    return (  
                      row.status==="pending" &&
                        <tr key={i}>
                        <td>{parseInt(row.reqno)}</td>
                        <td>{row.reqfrom}</td>
                        <td>{row.from}</td>
                        <td>{row.products}</td>
                        <td>{row.quantities}</td>
                        <td>{row.date}</td>
                        <td>
                        <button className='btn btn-primary' onClick={()=>accept(row)}>Accept</button>
                          
                        </td>
                           
                       
                        </tr>

                        
                    );
                })
             }
      </tbody>
    </table>
   </div>
     
    
   </>
  )
}
