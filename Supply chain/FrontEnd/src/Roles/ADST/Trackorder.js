import React, { useEffect, useState } from 'react'
import ConnectMetamask from "../Connection/ConnectMetaMask.js";
import ConnectContract2 from '../Connection/ConnectContract2.js';
import ConnectContract from "../Connection/ConnectSmartContract.js";
export default function Trackorder() {
    const [res,setRes]=useState([]);
    const [trackorder,SetTrackOrder]=useState([]);
    ConnectMetamask();
    ConnectContract();
    ConnectContract2();
    useEffect(() => {
        const fetchdata = async () => {
          const res = await window.contract.methods.getAllRequestSendAdst(localStorage.getItem("ROLENAME")).call();
          const res1 = await window.contract1.methods.getalladstsend(localStorage.getItem("ROLENAME")).call();
          
          const updated = [...res];
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
    
          setRes(updated);
          for(let i=0;i<updated.length;i++){
            const data=await window.contract.methods.getAllTrackorders(localStorage.getItem("ROLENAME"),updated[i].reqno).call();
            console.log(data);
            
          }  
        }
        fetchdata();
      }, []);
  return (
    <>

    </>
  )
}
