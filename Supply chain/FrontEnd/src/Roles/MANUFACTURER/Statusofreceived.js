import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import ConnectContract from '../Connection/ConnectContract2';
import ConnectMetamask from '../Connection/ConnectMetaMask';

export default function ManufStatusofreceived() {
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
  return (
    <>
     {
        res && <div>
        {
           <ul>
            {
                res.map((ele,i)=>(
                    <div className="card" key={i}>
  <div className="card-header"  >
  <h2>{"RequestNo"+parseInt(ele.reqno)}</h2>
   
  </div>
  <div className="card-body">
    <h5 className="card-title">Products</h5>
    <p className="card-text">{ele.products.join(",")}</p>
    <h5 className="card-title">Quantities</h5>
    <p className="card-text">{ele.quantities.join(",")}</p>
    <h5 className="card-title">Status</h5>
    <p className="card-text">{ele.status}</p>
    <h5 className="card-title">Acceptedby</h5>
    <p className="card-text">{ele.acceptedby}</p>
    <h5 className="card-title">Reqfrom</h5>
    <p className="card-text">{ele.reqfrom}</p>
  </div>
</div>
                ))
            }
           </ul>
        }
      </div>
      }
    </>
  )
}
