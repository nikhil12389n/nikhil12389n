import React, { useRef } from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import $ from "jquery"
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';
import ConnectContract from '../Connection/ConnectContract2';
import ConnectMetamask from '../Connection/ConnectMetaMask';
import axios from "axios";
import Context from "../../index";
import { useContext } from 'react';
import img from "../../pages/no-data-concept-illustration_114360-616.avif";
export default function ManufReceivedReq() {
 
  window.document.body.style.backgroundColor = "rgb(253, 253, 249)";
  const data = useContext(Context);
  const tableRef = useRef(null);
  const [res, setRes] = useState([]);
  ConnectMetamask();
  ConnectContract();
  useEffect(() => {
    if (res.length > 0) {
      $(tableRef.current).DataTable();
    }
  }, [res]);
  useEffect(() => {
    const fetchdata = async () => {
      const res = await window.contract1.methods.getallmanuf().call();
      console.log(res);
      setRes(res);
    }
    fetchdata();
  }, []);
  const accept = async (row) => {
    try {
      const hash = await window.contract1.methods.ManufAccept(parseInt(row.reqno), row.from).send({ from: data[localStorage.getItem("ROLENAME")] })
      const trackorderpost = await axios.post('http://localhost:4000/postTrackOrder', { adstname: row.from, requestno: parseInt(row.reqno), status: "active", desc: `accepted by ${localStorage.getItem("ROLENAME")}` }, { withCredentials: true });
      console.log(trackorderpost);
      const currentTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
      const details = { user: localStorage.getItem("ROLENAME"), TransactionHash: hash.transactionHash, from: hash.from, to: hash.to, time: currentTime, gasUsed: Number(hash.gasUsed) };
      const response = await axios.post("http://localhost:4000/postTransaction", { details }, { withCredentials: true });
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
          <thead style={{ backgroundColor: "darkblue" }}>
            <tr>
              <th className='text-white' scope="col">RequestNo</th>
              <th className='text-white' scope="col">Reqorigin</th>
              <th className='text-white' scope="col">Reqfrom</th>
              <th className='text-white' scope="col">Products</th>
              <th className='text-white' scope="col">Quantities</th>
              <th className='text-white' scope="col">Date</th>
              <th className='text-white' scope="col">Accept</th>
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
          <td>{row.products}</td>
          <td>{row.quantities.join(",")}</td>
          <td>{row.date}</td>
          <td>
            <button className='btn btn-primary' onClick={() => accept(row)}>Accept</button>
          </td>
        </tr>
      );
      }
      
    })
  }
</tbody>

        </table>
      </div>

    </>
  )
}
