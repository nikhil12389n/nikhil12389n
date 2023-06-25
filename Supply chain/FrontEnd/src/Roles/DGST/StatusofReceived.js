import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import ConnectContractSR from '../Connection/ConnectContract2';
import ConnectMetamask from '../Connection/ConnectMetaMask';
import ConnectContract from '../Connection/ConnectSmartContract';

export default function DGSTStatusofReceived() {
    ConnectMetamask();
    ConnectContract();
    ConnectContractSR();
    const [res,setRes]=useState([]);
    const [flag,setFlag]=useState([]);
    useEffect(()=>{
        const fetchdata=async()=>{
            const res=await window.contract.methods.getAllreceivedDGST(localStorage.getItem("ROLENAME")).call();
            const res1=await window.contract1.methods.getalldgsts().call();
            const updated=[...res];
            for (let i = 0; i < res1.length; i++) {
              for (let j = 0; j < updated.length; j++) {
                if (parseInt(res1[i].reqno) === parseInt(updated[j].reqno) && res1[i].from === updated[j].from) {
                  // Create a new object with updated properties
                  const updatedObj = {
                    ...updated[j],
                    status: res1[i].status,
                    acceptedby: res1[i].acceptedby
                  };
            
                  // Replace the object in the array with the updated object
                  updated[j] = updatedObj;
                }
              }
            }
           
            
            
            
            
            
            
            let f=[];
            for(let i=0;i<updated.length;i++){
              f.push(parseInt(await window.contract.methods.DGSTCheck(updated[i].reqno, updated[i].from).call()));

            }
            setFlag(flag);
            setRes(updated);
            console.log(updated);
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
                    <div className="card">
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
    <p className="card-text">
      {
        ele.status!=="active"  ? "No supplies in units":ele.acceptedby
      }
    </p>
    <h5 className="card-title">Reqfrom</h5>
    <p className="card-text">{ele.reqfrom}</p>
    <h5 className="card-title">from</h5>
    <p className="card-text">{ele.from}</p>
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
