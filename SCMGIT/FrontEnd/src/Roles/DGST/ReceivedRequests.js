import React, { useRef } from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import $ from "jquery"
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';
import { ContractMissingDeployDataError } from 'web3';
import ConnectContract2 from '../Connection/ConnectContract2';
import ConnectMetamask from '../Connection/ConnectMetaMask';
import ConnectContract from '../Connection/ConnectSmartContract';
import axios from "axios";
import Context from "../../index";
import { useContext } from 'react';
import { json } from 'react-router-dom';
import img from "../../pages/no-data-concept-illustration_114360-616.avif";
export default function DGSTReceivedRequests() {

  window.document.body.style.backgroundColor = "rgb(244, 245, 234)";
  const data = useContext(Context);
  const tableRef = useRef(null);
  const [res, setRes] = useState([]);
  const [flag, setFlag] = useState([]);
  ConnectMetamask();
  ConnectContract();
  ConnectContract2();

  useEffect(() => {
    if (res.length > 0) {
      $(tableRef.current).DataTable();

    }

  }, [res]);
  useEffect(() => {
    const fetchdata = async () => {
      const res = await window.contract.methods.getAllreceivedDGST(localStorage.getItem("ROLENAME")).call();
      const res1 = await window.contract1.methods.getalldgsts().call();
      console.log(res, res1);
      const updated = [...res];
      for (let i = 0; i < res1.length; i++) {
        for (let j = 0; j < updated.length; j++) {
          if (parseInt(res1[i].reqno) === parseInt(updated[j].reqno) && res1[i].from === updated[j].from) {
            const updatedObj = {
              ...updated[j],
              status: res1[i].status,
              products: res1[i].products,
              quantities: res1[i].quantities,
              acceptedby: res1[i].acceptedby
            };
            updated[j] = updatedObj;
          }
        }
      }
      console.log(updated);
      let fl = [];
      for (let i = 0; i < updated.length; i++) {
        const f = await window.contract.methods.DGSTCheck(updated[i].reqno, updated[i].from).call();
        fl.push(parseInt(f));
      }

      setFlag(fl);
      setRes(updated);
    }
    fetchdata();
  }, []);
  const accept = async (row) => {
    try {
      const hash = await window.contract.methods.DGSTAccept(row.reqno, row.from).send({ from: data[localStorage.getItem("ROLENAME")] })
      const currentTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
      const details = { user: localStorage.getItem("ROLENAME"), TransactionHash: hash.transactionHash, from: hash.from, to: hash.to, time: currentTime, gasUsed: Number(hash.gasUsed) };
      const response = await axios.post("http://localhost:4000/postTransaction", { details }, { withCredentials: true });
      const trackorderpost = await axios.post('http://localhost:4000/postTrackOrder', { adstname: row.from, requestno: parseInt(row.reqno), status: "active", desc: `accepted by ${localStorage.getItem("ROLENAME")}` }, { withCredentials: true });
      console.log(trackorderpost);
      window.location.reload();
    }
    catch (err) {
      console.log(err);
    }
  }
  const sendtodiv = async (row) => {
    try {
      const hash = await window.contract.methods.DGSTForwardRequest(parseInt(row.reqno), row.products, row.quantities, row.date, row.reqfrom, row.from).send({ from: data[localStorage.getItem("ROLENAME")] })
      const currentTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
      const details = { user: localStorage.getItem("ROLENAME"), TransactionHash: hash.transactionHash, from: hash.from, to: hash.to, time: currentTime, gasUsed: Number(hash.gasUsed) };
      const response = await axios.post("http://localhost:4000/postTransaction", { details }, { withCredentials: true });
      const trackorderpost = await axios.post('http://localhost:4000/postTrackOrder', { adstname: row.from, requestno: parseInt(row.reqno), status: "approved to all divisions", desc: `approved to all divisions from ${localStorage.getItem("ROLENAME")}` }, { withCredentials: true });
      console.log(trackorderpost);
      window.location.reload();
    }
    catch (err) {
      console.log(err);
    }
  }
  function parseQuantities(quantities) {
    return quantities.map(quantity => parseInt(quantity, 10)).join(", ");
  }
  const sendtomanuf = async (row) => {
    try {
      const hash = await window.contract1.methods.DGSTSendtomanuf(parseInt(row.reqno), row.from, row.products, row.quantities, row.date).send({ from: data[localStorage.getItem("ROLENAME")] })
      const currentTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
      const details = { user: localStorage.getItem("ROLENAME"), TransactionHash: hash.transactionHash, from: hash.from, to: hash.to, time: currentTime, gasUsed: Number(hash.gasUsed) };
      const response = await axios.post("http://localhost:4000/postTransaction", { details }, { withCredentials: true });
      const trackorderpost = await axios.post('http://localhost:4000/postTrackOrder', { adstname: row.from, requestno: parseInt(row.reqno), status: "approved to manuf", desc: `approved to manuf by ${localStorage.getItem("ROLENAME")}` }, { withCredentials: true });
      console.log(trackorderpost);
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

        <table className="table table-striped " ref={tableRef}>
          <thead >
            <tr style={{ backgroundColor: "darkblue" }}>
              <th className='text-white' scope="col">RequestNo</th>
              <th className='text-white' scope="col">Reqorigin</th>
              <th className='text-white' scope="col">Reqfrom</th>
              <th className='text-white' scope="col">Products</th>
              <th className='text-white' scope="col">Quantities</th>
              <th className='text-white' scope="col">Date</th>
              <th className='text-white' scope="col">Send to Divisions</th>
              <th className='text-white' scope="col">Accept</th>
              <th className='text-white' scope="col">Send to manuf</th>
            </tr>
          </thead>
          <tbody>
            {res.map((row, i) => {

              if (row.status !== "active" && flag[i] === 1 && row.status !== "approvedtomanufacturer") {


                return (
                  <tr key={i}>
                    <td>{parseInt(row.reqno)}</td>
                    <td>{row.from}</td>
                    <td>{row.reqfrom}</td>
                    <td>{row.products}</td>
                    <td>{row.quantities.join(",")}</td>
                    <td>{row.date}</td>
                    <td>NA</td>
                    <td>
                      NA
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
                      <button className='btn btn-primary' onClick={() => accept(row)}>Accept</button>
                    </td>
                    <td>
                      <button className='btn btn-primary' onClick={() => sendtodiv(row)}>Send to div</button>
                    </td>
                    <td>NA</td>
                  </tr>
                );
              } else {
                return null;
              }
            })}
          </tbody>

        </table>

      </div>
    </>
  )
}
