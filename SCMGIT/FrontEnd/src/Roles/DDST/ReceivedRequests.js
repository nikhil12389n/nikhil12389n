import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import $ from 'jquery';
import 'datatables.net';
import Context from '../../index.js';
import { useContext } from 'react';
import img from "../../pages/no-data-concept-illustration_114360-616.avif";
export default function DDSTReceivedRequests() {
  let [requestcount, setRequestCount] = useState(0);

  window.document.body.style.backgroundColor = "rgb(244, 245, 234)";
  const data = useContext(Context);
  const tableRef = useRef();
  const [res, setRes] = useState([]);
  useEffect(() => {
    if (res.length > 0) {
      $(tableRef.current).DataTable();
    }
  }, [res]);
  useEffect(() => {
    if (window.contract) {
      const fetchdata = async () => {
        try {
          const response = await window.contract.methods
            .getAllreceivedDDST(localStorage.getItem('ROLENAME'))
            .call();

          setRes(response);
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      };
      fetchdata();
    }
  }, []);
  
  const sendtoadsts = async (row) => {
    console.log(row, "hi");
    try {
      const hash = await window.contract.methods.DDSTforwardRequest(row.reqfrom, localStorage.getItem('ROLENAME'), parseInt(row.reqno), row.products, row.quantities, row.date, row.from).send({ from: data[localStorage.getItem('ROLENAME')] });

      const currentTime = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
      });
      const details = { user: localStorage.getItem("ROLENAME"), TransactionHash: hash.transactionHash, from: hash.from, to: hash.to, time: currentTime, gasUsed: Number(hash.gasUsed) };
      console.log(details);
      const response = await axios.post("http://localhost:4000/postTransaction", { details }, { withCredentials: true });
      console.log("poiuyhg");
      const trackorderpost = await axios.post('http://localhost:4000/postTrackOrder', { adstname: row.from, requestno: parseInt(row.reqno), status: "approved to adsts", desc: `send to all adsts from ${localStorage.getItem("ROLENAME")}` }, { withCredentials: true });
      console.log(trackorderpost);

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const sendtoalladsts = async (row) => {
    console.log(row);
    try {
      const hash = await window.contract.methods.DDSTforwardRequest(row.reqfrom, localStorage.getItem('ROLENAME'), parseInt(row.reqno), row.products, row.quantities, row.date, row.from).send({ from: data[localStorage.getItem('ROLENAME')] });
      const currentTime = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
      });
      const details = { user: localStorage.getItem("ROLENAME"), TransactionHash: hash.transactionHash, from: hash.from, to: hash.to, time: currentTime, gasUsed: Number(hash.gasUsed) };
      const response = await axios.post("http://localhost:4000/postTransaction", { details }, { withCredentials: true });
      const trackorderpost = await axios.post('http://localhost:4000/postTrackOrder', { adstname: row.from, requestno: parseInt(row.reqno), status: "send to all adsts", desc: `send to all adsts from ${localStorage.getItem("ROLENAME")}` }, { withCredentials: true });
      console.log(trackorderpost);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const sendtodgst = async (row) => {
    try {
      const hash = await window.contract.methods.DDSTsendDGST(localStorage.getItem('ROLENAME'), parseInt(row.reqno), row.products, row.quantities, row.date, row.from).send({ from: data[localStorage.getItem('ROLENAME')] });
      const currentTime = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
      });
      const details = { user: localStorage.getItem("ROLENAME"), TransactionHash: hash.transactionHash, from: hash.from, to: hash.to, time: currentTime, gasUsed: Number(hash.gasUsed) };
      const response = await axios.post("http://localhost:4000/postTransaction", { details }, { withCredentials: true });
      const trackorderpost = await axios.post('http://localhost:4000/postTrackOrder', { adstname: row.from, requestno: parseInt(row.reqno), status: "approved to dgst", desc: `approved to dgst from ${localStorage.getItem("ROLENAME")}` }, { withCredentials: true });
      console.log(trackorderpost);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
 
 
  
  return (
    <>
     <div className='d-flex justify-content-center my-3'>
      <h3>Received Requests</h3>
    </div>
      <div className="container table-reqreceived">
        <table className="table table-striped"  ref={tableRef} >
          <thead style={{ backgroundColor: "darkblue" }}>
            <tr>
              <th className='text-white' scope="col">RequestNo</th>
              <th className='text-white' scope="col">Reqorigin</th>
              <th className='text-white' scope="col">Reqfrom</th>
              <th className='text-white' scope="col">Products</th>
              <th className='text-white' scope="col">Quantities</th>
              <th className='text-white' scope="col">Date</th>
              <th className='text-white' scope="col">Send to adsts</th>
              <th className='text-white' scope="col">Send to dgst</th>
            </tr>
          </thead>
          <tbody>
            {res.map((row, i) => {
              const isPending =
                row.status === 'pending' ||
                (row.acceptedby === 'No supplies in units' &&
                  (row.status === 'approvedtoadsts' ||
                    row.status === 'approvedtosomeadsts') &&
                  row.reqfrom !== 'DGST');

              const isAcceptedNoSupplies =
                row.acceptedby === 'No supplies in units';

              if (isPending) {
                
                
                

                return (
                  <tr key={i}>
                    <td>{parseInt(row.reqno)}</td>
                    <td>{row.from}</td>
                    <td>{row.reqfrom}</td>
                    <td>{row.products.join(',')}</td>
                    <td>{row.quantities.join(',')}</td>
                    <td>{row.date}</td>
                    <td>
                      {isAcceptedNoSupplies ? (
                        <p>NA</p>
                      ) : row.reqfrom !== 'DGST' ? (
                        <button
                          className="btn btn-primary"
                          onClick={() => sendtoadsts(row)}
                        >
                          Send to adsts
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary"
                          onClick={() => sendtoalladsts(row)}
                        >
                          Send to all adsts
                        </button>
                      )}
                    </td>
                    <td>
                      {isAcceptedNoSupplies ? (
                        <button
                          className="btn btn-primary"
                          onClick={() => sendtodgst(row)}
                        >
                          Send to DGST
                        </button>
                      ) : (
                        <p>NA</p>
                      )}
                    </td>
                  </tr>
                );
              }
              return null; 
            })}
          </tbody>

        </table>
      </div>
    </>
  );
}
