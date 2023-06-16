import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import ConnectMetamask from '../ADSTR/ConnectMetamask';
import ConnectContractSR from './ConnectContractSR.jsx';

export default function StatusofReceived() {
  const [res,Setres]=useState([]);
    ConnectMetamask();
    ConnectContractSR();
    useEffect(()=>{
        const fetchdata=async()=>{
            let res=await window.contract.methods.getallreqreceivedddst(localStorage.getItem("ROLENAME")).call();
		let res2=await window.contract1.methods.getallreqreceivedddst(localStorage.getItem("ROLENAME")).call();
        
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
    console.log(updated);
    Setres(updated)

       
        }

        fetchdata();
    },[]);
  return (
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
  </div>
</div>
            ))
      }
           </ul>
        }
      </div>
      }
    </div>
  )
}
