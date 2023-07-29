import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import $ from 'jquery';
import 'datatables.net';
import ConnectMetamask from '../Connection/ConnectMetaMask';
import ConnectContract from '../Connection/ConnectSmartContract';
import axios from "axios";
import Context from "../../index.js";
import { useContext } from 'react';
import "./receivedreq.css"
import img from "../../pages/no-data-concept-illustration_114360-616.avif";
export default function ReceivedRequests() {
 
  window.document.body.style.backgroundColor = "rgb(244, 245, 234)";
  const tableRef = useRef();
  const [res, setRes] = useState([]);
  const data = useContext(Context);
  ConnectMetamask();
  ConnectContract();
  useEffect(() => {
    if (res.length > 0) {
      $(tableRef.current).DataTable();
    }
  }, [res]);
 

  useEffect(() => {
    const fetchdata = async () => {
      const res = await window.contract.methods.getAllreceivedDDST(localStorage.getItem("ROLENAME")).call();
      setRes(res);
      
    }
    fetchdata();
  }, []);
  
  const accept = async (row) => {
    
    try {
      console.log(parseInt(row.reqno), localStorage.getItem("ROLENAME"), row.from, row.reqfrom);
      const hash = await window.contract.methods.adstsacceptfromdivision(parseInt(row.reqno), localStorage.getItem("ROLENAME"), row.from).send({ from: data[localStorage.getItem('ROLENAME')] })
      const currentTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
      const details = { user: localStorage.getItem("ROLENAME"), TransactionHash: hash.transactionHash, from: hash.from, to: hash.to, time: currentTime, gasUsed: Number(hash.gasUsed) };
      const response = await axios.post("http://localhost:4000/postTransaction", { details }, { withCredentials: true });
      const post = await axios.post("http://localhost:4000/postTrackOrder", { adstname: row.from, requestno: parseInt(row.reqno), status: "accepted", desc: `accepted by ${localStorage.getItem("ROLENAME")}` }, { withCredentials: true });
      
      window.location.reload();
    }
    catch (err) {
      console.log(err);
    }
  }
  const decline = async (row) => {
    try {
      const hash = await window.contract.methods.adstreject(parseInt(row.reqno), localStorage.getItem("ROLENAME"), row.reqfrom, row.from).send({ from: data[localStorage.getItem("ROLENAME")] });
      const currentTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
      const details = { user: localStorage.getItem("ROLENAME"), TransactionHash: hash.transactionHash, from: hash.from, to: hash.to, time: currentTime, gasUsed: Number(hash.gasUsed) };
      const response = await axios.post("http://localhost:4000/postTransaction", { details }, { withCredentials: true });
      const post = await axios.post("http://localhost:4000/postTrackOrder", { adstname: row.from, requestno: parseInt(row.reqno), status: "declined", desc: `declined by ${localStorage.getItem("ROLENAME")}` }, { withCredentials: true });
      window.location.reload();
    }
    catch (err) {
      console.log(err);
    }
  }
  return (
    <>
    <div className="d-flex justify-content-center">
        <h3>Received Requests</h3>
    </div>
            
      <div className="container table-reqreceived">
        <table className="table table-striped" ref={tableRef}>
          <thead style={{ backgroundColor: "darkblue" }}>
            <tr>
              <th className='text-white' scope="col">RequestNo</th>
              <th className='text-white' scope="col">Reqorigin</th>
              <th className='text-white' scope="col">Reqfrom</th>
              <th className='text-white' scope="col">Products</th>
              <th className='text-white' scope="col">Quantities</th>
              <th className='text-white' scope="col">Date</th>
              <th className='text-white' scope="col">Accept</th>
              <th className='text-white' scope="col">Decline</th>
            </tr>
          </thead>
          <tbody>
  {
    res.map((row, i) => {
      if (row.status === "pending") {
        
        return (
          <tr key={i}>
            <td>{parseInt(row.reqno)}</td>
            <td>{row.from}</td>
            <td>{row.reqfrom}</td>
            <td>{row.products.join(",")}</td>
            <td>{row.quantities.join(",")}</td>
            <td>{row.date}</td>
            <td>
              <button className='btn btn-primary' onClick={() => accept(row)}>Accept</button>
            </td>
            <td>
              <button className='btn btn-primary' onClick={() => decline(row)}>Reject</button>
            </td>
          </tr>
        );
      } else {
        return null; 
      }
    })
  }
</tbody>

        </table>
      </div>
    </>
  )
}
