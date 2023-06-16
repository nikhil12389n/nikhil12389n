import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react'
import ConnectMetamask from '../ADSTR/ConnectMetamask';
import ConnectContract from './ConnectContract.js';
import Context from "../index.js";


export default function DGSTReceivedreq() {
    const [res,setRes]=useState([]);
    let data=useContext(Context);
   
    let account=data[localStorage.getItem("ROLENAME")];
   
  

    const sendtodiv=async(row)=>{
      await window.contract.methods.ddstsReceive(row.reqfrom,row.from,row.reqno,row.products,row.quantities,row.date).send({from:account});
    }
    const acceptreq=async(row)=>{
      await window.contract.methods.acceptdgst(localStorage.getItem("ROLENAME"),row.from,row.reqno,row.products,row.quantities,row.date).send({from:account});

    }
    const sendtoamanuf=async(row)=>{
      await window.contract1.methods.ManufReceived(row.reqno,row.from,row.products,row.quantities,row.date).send({from:account});
    }
    ConnectMetamask();
    ConnectContract();
    useEffect(()=>{
       const fetchdata=async()=>{
        let res=await window.contract.methods.dgstgetALL().call();

		let res2=await window.contract1.methods.getalldgsts().call();
        let updated=[...res];
        for(let i=0;i<updated.length;i++){
			for(let j=0;j<res2.length;j++){
				if(res2[j].reqno===updated[i].reqno && res2[j].from===updated[i].from){
					updated[i]=res2[j];
				}
			}
		}
        setRes(updated);
        console.log(res); 
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
           <td>RequestFrom</td>
           <td>From</td>
           <td>Products</td>
           <td>Quantities</td>
           <td>Date</td>
           <td>Send to div</td>
           <td>Accept</td>
           <td>Send to manuf</td>
           </tr>
        </thead>
        <tbody>
             {
                res.map((row,i)=>{
                  
                    return (
                      (row.status!=="approved" && row.status!=="accepted") && 
                        <tr key={i}>
                        <td>{parseInt(row.reqno)}</td>
                        <td>{row.reqfrom}</td>
                        <td>{row.from}</td>
                        <td>{row.products}</td>
                        <td>{row.quantities}</td>
                        <td>{row.date}</td>
                        <td>
                          {
                            row.status==="pending" && (
                              <button className='btn btn-primary' onClick={()=>sendtodiv(row)}>Send to div</button>
                            )
                          }
                          {
                            row.acceptedby==="No supplies in units" && (
                              <button className='btn btn-primary'>NA</button>
                            )
                          }
                        </td>
                        <td>
                          {
                            row.status==="pending" && (
                              <button className='btn btn-primary'>NA</button>
                            )
                          }
                          {
                            row.acceptedby==="No supplies in units" && (
                              <button className='btn btn-primary' onClick={()=>acceptreq(row)}>Accept</button>
                            )
                          }
                        </td>
                        <td>
                          {
                            row.status==="pending" && (
                              <button className='btn btn-primary'>NA</button>
                            )
                          }
                          {
                            row.acceptedby==="No supplies in units" && (
                              <button className='btn btn-primary' onClick={()=>sendtoamanuf(row)}>Send to manuf</button>
                            )
                          }
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
