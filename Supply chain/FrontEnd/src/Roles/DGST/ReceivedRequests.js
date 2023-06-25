import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { ContractMissingDeployDataError } from 'web3';
import ConnectContract2 from '../Connection/ConnectContract2';
import ConnectMetamask from '../Connection/ConnectMetaMask';
import ConnectContract from '../Connection/ConnectSmartContract';
let account = "0x85e19d642d24fe428Eb9205F077a856CA8bC95B0";
export default function DGSTReceivedRequests() {
  const [res, setRes] = useState([]);
  const [flag,setFlag]=useState([]);
  ConnectMetamask();
  ConnectContract();
  ConnectContract2();
  useEffect(() => {
    const fetchdata = async () => {
      const res = await window.contract.methods.getAllreceivedDGST(localStorage.getItem("ROLENAME")).call();
      const res1=await window.contract1.methods.getalldgsts().call();
     console.log(res,res1);
      const updated=[...res];
      for (let i = 0; i < res1.length; i++) {
        for (let j = 0; j < updated.length; j++) {
          if (parseInt(res1[i].reqno) === parseInt(updated[j].reqno) && res1[i].from === updated[j].from) {
            // Create a new object with updated properties
            const updatedObj = {
              ...updated[j],
              status: res1[i].status,
              products:res1[i].products,
              acceptedby: res1[i].acceptedby
            };
      
            // Replace the object in the array with the updated object
            updated[j] = updatedObj;
          }
        }
      }
      console.log(updated);
     
      let fl=[];
      for(let i=0;i<updated.length;i++){
        
        const f = await window.contract.methods.DGSTCheck(updated[i].reqno, updated[i].from).call();
        fl.push(parseInt(f));
      }
      setFlag(fl);
      setRes(updated);
    }
    fetchdata();
  }, []);
  const accept=async(row)=>{
    await window.contract.methods.DGSTAccept(row.reqno,row.from).send({from:account});
  }
  const sendtodiv = async (row) => {
    await window.contract.methods.DGSTForwardRequest(parseInt(row.reqno), row.products, row.quantities, row.date, row.reqfrom, row.from).send({ from: account });
  }
  const sendtomanuf=async(row)=>{
    await window.contract1.methods.DGSTSendtomanuf(parseInt(row.reqno),row.from,row.products,row.quantities,row.date).send({from:account});
  }
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">RequestNo</th>
            <th scope="col">Reqorigin</th>
            <th scope="col">Reqfrom</th>
            <th scope="col">Products</th>
            <th scope="col">Quantities</th>
            <th scope="col">Date</th>
            <th scope="col">Send to Divisions</th>
            <th scope="col">Accept</th>
            <th scope="col">Send to manuf</th>
          </tr>
        </thead>
        <tbody>
  {res.map((row, i) => {
    console.log(flag[i]);
    if (row.status !== "active" && flag[i] === 1 && row.status!=="approvedtomanufacturer") {
      return (
        <tr key={i}>
          <td>{parseInt(row.reqno)}</td>
          <td>{row.from}</td>
          <td>{row.reqfrom}</td>
          <td>{row.products}</td>
          <td>{row.quantities}</td>
          <td>{row.date}</td>
          <td>NA</td>
          <td>
            <button className='btn btn-primary' onClick={() => accept(row)}>Accept</button>
          </td>
          <td>
            <button className='btn btn-primary' onClick={() => sendtomanuf(row)}>Send to manuf</button>
          </td>
        </tr>
      );
    } else if (row.status === "pending") {
      return (
        <tr key={i}>
          <td>{parseInt(row.reqno)}</td>
          <td>{row.from}</td>
          <td>{row.reqfrom}</td>
          <td>{row.products.join(",")}</td>
          <td>{row.quantities.join(",")}</td>
          <td>{row.date}</td>
          <td>
            <button className='btn btn-primary' onClick={() => sendtodiv(row)}>Send to div</button>
          </td>
          <td>NA</td>
          <td>NA</td>
        </tr>
      );
    } else {
      return null; // Return null for other cases where the row should not be rendered
    }
  })}
</tbody>

      </table>


    </>
  )
}
