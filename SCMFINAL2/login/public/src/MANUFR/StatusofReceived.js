import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import ConnectMetamask from '../ADSTR/ConnectMetamask';
import ConnectContract from './ConnectContract';

export default function ManufStatusofReceived() {
  const [res,setRes]=useState([]);
  ConnectMetamask();
  ConnectContract();
  useEffect(()=>{
    const fetchdata=async()=>{
      const res=await window.contract.methods.getAllManufacturer().call();
      setRes(res);
    }
    fetchdata();
  },[]);
  return (
    <>
    <div>
       {
        res && <div>
        {
           <ul>
            {
                res.map((ele,i)=>(
                    <div className="card">
  <div className="card-header"  >
  <h2>{"RequestNo"+parseInt(ele.reqno)}</h2>
   
  </div>
  <div className="card-body">
    <h5 className="card-title">Products</h5>
    <p className="card-text">{ele.products}</p>
    <h5 className="card-title">Quantities</h5>
    <p className="card-text">{ele.quantities.join(",")}</p>
    <h5 className="card-title">Reqfrom</h5>
    <p className="card-text">{ele.reqfrom}</p>
    <h5 className="card-title">Status</h5>
    <p className="card-text">{ele.status}</p>
    <h5 className="card-title">Acceptedby</h5>
    <p className="card-text">{ele.acceptedby}</p>
    <h5 className="card-title">From</h5>
     <p className="card-text">{ele.from}</p>
      </div>
   </div>
            ))
      }
           </ul>
        }
      </div>
      }
    </div>
        
    </>
  )
}
