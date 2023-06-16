import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import ConnectMetamask from "../ADSTR/ConnectMetamask";
import Web3 from "web3";
import ConnectContractSR from "./ConnectContractSR";
import Context from "../index.js";

export default function DIVISIONReceivedReq() {
    const [res, setRes] = useState([]);
    let data=useContext(Context);
    let account=data[localStorage.getItem("ROLENAME")];
    ConnectMetamask();
    ConnectContractSR();
    const sentalladsts=async(row)=>{
        if(localStorage.getItem("ROLENAME")==="DIVISION1"){
            await  window.contract1.methods.adstsReceiveALL(localStorage.getItem("ROLENAME"),"D1ADST1","D2ADST2",localStorage.getItem("ROLENAME"),row.from,row.reqno,row.products,row.quantities,row.date).send({from:account});

        }
        if(localStorage.getItem("ROLENAME")==="DIVISION2"){
            await  window.contract1.methods.adstsReceiveALL(localStorage.getItem("ROLENAME"),"D2ADST1","D2ADST2",localStorage.getItem("ROLENAME"),row.from,row.reqno,row.products,row.quantities,row.date).send({from:account});
            
        }
        if(localStorage.getItem("ROLENAME")==="DIVISION3"){
            await  window.contract1.methods.adstsReceiveALL(localStorage.getItem("ROLENAME"),"D3ADST1","D3ADST2",localStorage.getItem("ROLENAME"),row.from,row.reqno,row.productss,row.quantities,row.date).send({from:account});
        }
    }
    const sentdgst=async(row)=>{
		await window.contract1.methods.dgstReceived(localStorage.getItem("ROLENAME"),row.reqno,row.from,row.products,row.quantities,row.date).send({from:account});	
    }
    const sendadsts=async(row)=>{
        console.log(row);
            let adst="";
            let ref1="";
            let ref2="";
            

            for(let i=0;i<row.from.length;i++){
                if(i>1){
                    ref2+=row.from[i];
                }
                else{
                    ref1+=row.from[i];
                }
            }
            console.log(ref1,ref2);
           
            if(ref2==="ADST1"){
              await  window.contract.methods.adstReceived([ref1+"ADST2"],parseInt(row.reqno),localStorage.getItem("ROLENAME"),row.reqfrom,row.products,row.quantities,row.date).send({from:account});

                
            }
            if(ref2==="ADST2"){
              await window.contract.methods.adstReceived([ref1+"ADST1"],parseInt(row.reqno),localStorage.getItem("ROLENAME"),row.reqfrom,row.products,row.quantities,row.date).send({from:account});
            } 
    }
    useEffect(() => {
        const fetchdata = async () => {
            let res = await window.contract.methods
                .getallreqreceivedddst(localStorage.getItem("ROLENAME"))
                .call();

            let res2 = await window.contract1.methods
                .getallreqreceivedddst(localStorage.getItem("ROLENAME"))
                .call();

            let updated = [...res];
            for (let i = 0; i < res2.length; i++) {
                for (let j = 0; j < updated.length; j++) {
                    if (
                        updated[j].reqno === res2[i].reqno &&
                        updated[j].from === res2[i].from
                    ) {
                        updated[j] = res2[i];
                    }
                }
            }
            if (updated.length === 0) {
                updated = [...res2];
            }

            setRes(updated);
            
        };
        fetchdata();
    },[]);
    console.log(res);
    return (
        <>

            <div className="container" >
                
                <table className="table table-striped table-hover" id="myTable">
                    <thead>
                        <tr>
                            <th>Request no</th>
                            <th>Request from</th>
                            <th>Products</th>
                            <th>Quantities</th>
                            <th>Date</th>
                            <th>send to adst</th>
                            <th>send to dgst</th>
                        </tr>
                    </thead>
                    <tbody>
                        {res.map((row, i) => {
                            
                                return (
                                    
                                   (row.status!=="approvedtodgst" | row.from!=="DGST" && row.status!=="approved") &&
                                    <tr key={i}>
                                        <td>{parseInt(row.reqno)}</td>
                                        <td>{row.reqfrom}</td>
                                        <td>{row.products}</td>
                                        <td>{row.quantities}</td>
                                        <td>{row.date}</td>
                                        <td>
                                            {row.reqfrom.length === 7 && row.acceptedby === "No supplies in units" && (
                                                <p>na</p>
                                            )}
                                            {row.reqfrom.length === 7 && row.status === "pending" && (
                                                <button className="btn btn-primary" onClick={() => sendadsts(row)} >Send to adsts</button>
                                            )}
                                            {row.reqfrom.length !== 7 && row.status === "pending" && (
                                                <button className="btn btn-primary" onClick={()=> sentalladsts(row)}  >Send all adsts</button>
                                            )}
                                        </td>
                                        <td>
                                            {row.reqfrom.length === 7 && row.acceptedby === "No supplies in units" && (
                                                <button className="btn btn-primary" onClick={()=>sentdgst(row)} >Send to dgst</button>
                                            )}
                                            {row.reqfrom.length === 7 && row.status === "pending" && (
                                                <p>na</p>
                                            )}
                                            {row.reqfrom.length !== 7 && row.status === "pending" && (
                                                <p>na</p>
                                            )}
                                        </td>
                                        
                                    </tr>
                                );
                            
                        })}

                    </tbody>
                </table>

            </div>
        </>
    );
}
