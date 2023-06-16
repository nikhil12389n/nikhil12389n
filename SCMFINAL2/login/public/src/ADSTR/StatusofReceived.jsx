import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

import ConnectContractSR from "./ConnectContractSR"
import ConnectMetamask from './ConnectMetamask';

export default function StatusofReceived() {
  ConnectMetamask();
  ConnectContractSR();
    const [res,setRes]=useState([]);
  
      useEffect(()=>{
        
       const fetchdata=async()=>{
        let res=await window.contract.methods.getAllreqreceive(localStorage.getItem("ROLENAME")).call();

        let res2=await window.contract1.methods.getalladsts(localStorage.getItem("ROLENAME")).call();
        let updated=[...res];
        for(let i=0;i<res2.length;i++){
          for(let j=0;j<updated.length;j++){
            if(updated[j].reqno===res2[i].reqno && updated[j].from===res2[i].from){
              updated[j]=res2[i];
            }
          }
        }
        if(updated.length===0){
          updated=[...res2];
        }
        setRes(updated);
        
       }
       fetchdata();
      },[]);

















  return (
    <div>
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
   
  </div>
</div>
          
        ))
      }
      
    </div>
  );
}
