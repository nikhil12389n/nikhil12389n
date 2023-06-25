import React, { useEffect, useState } from 'react'
import ConnectMetamask from '../Connection/ConnectMetaMask';
import ConnectContract from '../Connection/ConnectSmartContract';

export default function StatusofReceived() {
    const [res,setRes]=useState([]);
    ConnectMetamask();
    ConnectContract();
    useEffect(()=>{
        const fetchdata=async()=>{
            const res=await window.contract.methods.getAllreceivedADST(localStorage.getItem("ROLENAME")).call();
            setRes(res);
            console.log(res);
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
    <p className="card-text">{ele.acceptedby}</p>
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
