import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import ConnectContractSR from '../Connection/ConnectContract2';
import ConnectMetamask from '../Connection/ConnectMetaMask';
import ConnectContract from '../Connection/ConnectSmartContract';
import img from "../../pages/no-data-concept-illustration_114360-616.avif";
export default function DGSTStatusofReceived() {
  let requestcount=0;
  window.document.body.style.backgroundColor = "rgb(244, 245, 234)";
  ConnectMetamask();
  ConnectContract();
  ConnectContractSR();
  const [res, setRes] = useState([]);
  const [flag, setFlag] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const res = await window.contract.methods.getAllreceivedDGST(localStorage.getItem("ROLENAME")).call();
      const res1 = await window.contract1.methods.getalldgsts().call();
      const updated = [...res];
      for (let i = 0; i < res1.length; i++) {
        for (let j = 0; j < updated.length; j++) {
          if (parseInt(res1[i].reqno) === parseInt(updated[j].reqno) && res1[i].from === updated[j].from) {
            const updatedObj = {
              ...updated[j],
              status: res1[i].status,
              acceptedby: res1[i].acceptedby
            };
            updated[j] = updatedObj;
          }
        }
      }
      let f = [];
      for (let i = 0; i < updated.length; i++) {
        f.push(parseInt(await window.contract.methods.DGSTCheck(updated[i].reqno, updated[i].from).call()));
      }
      setFlag(flag);
      setRes(updated);
      console.log(updated);
    }
    fetchdata();
  }, []);
 if(res.length===0){
  return (
    <div className='d-flex justify-content-center'>
      <img className='img-fluid' src={img} alt="" style={{"height":"95vh"}}/>
    </div>
  )

 }
  return (
    <>
     <div className="d-flex justify-content-center">
        <h3>Status Received Requests</h3>
      </div>

      {
  res && (
    <div className='container cont justify-content-center statusofreceived-cont'>
      <ul>
        {res.map((ele, i) => {
       
          return (
            <div className="accordion my-4" id="accordionExample" key={i}>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse-${i}`}
                    aria-expanded="false"
                    aria-controls={`collapse-${i}`}
                  >
                    <h5>{"Request No " + (i+1)}</h5>
                  </button>
                </h2>
                <div
                  id={`collapse-${i}`}
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className='item-container'>
                      <div className='item'>
                        <h5 >From</h5>
                        <p >{ele.from}</p>
                      </div>
                      <div className='item'>
                        <h5 >Reqfrom</h5>
                        <p >{ele.reqfrom}</p>
                      </div>
                      <div className='item'>
                        <h5 >Status</h5>
                        <p >{ele.status}</p>
                      </div>
                      <div className='item'>
                        <h5 >Acceptedby</h5>
                        <p >{ele.acceptedby}</p>
                      </div>
                      <div className='item'>
                        <h5>Products</h5>
                        <p>{ele.products.join(",")}</p>
                      </div>
                      <div className='item'>
                        <h5>Quantities</h5>
                        <p>{(ele.quantities.join(","))}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  )
}


    </>
  )
}
