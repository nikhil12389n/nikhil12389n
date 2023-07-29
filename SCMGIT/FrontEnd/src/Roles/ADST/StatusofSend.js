import React, { useEffect, useState } from 'react'
import ConnectContract2 from '../Connection/ConnectContract2';
import ConnectMetamask from '../Connection/ConnectMetaMask';
import ConnectContract from '../Connection/ConnectSmartContract';
import "./statusofsend.css";
import img from "../../pages/no-data-concept-illustration_114360-616.avif";
export default function StatusofSend() {
  window.document.body.style.backgroundColor="rgb(244, 245, 234)";
  const [res, setRes] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const res = await window.contract.methods.getAllRequestSendAdst(localStorage.getItem("ROLENAME")).call();
      const res1 = await window.contract1.methods.getalladstsend(localStorage.getItem("ROLENAME")).call();
      console.log(res1);
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
      setRes(updated);
      
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
        <h3>Status of send</h3>
    </div>
      {
        res && <div className='container cont  justify-content-center '>
          {
            <ul>
              {
                res.map((ele, i) => (
                  <div className="accordion my-4" id="accordionExample" key={i}>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${i}`} aria-expanded="false" aria-controls={`collapse-${i}`} >
                          <h5>{"Request No " + ele.reqno}</h5>
                        </button>
                      </h2>
                      <div id={`collapse-${i}`} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >

                          <div className='item-container'>
                            <div className='item'>
                              <h5 >Status</h5>
                              <p >{ele.status}</p>
                            </div>

                            <div className='item'>
                              <h5>Products</h5>
                              <p>{ele.products.join(",")}</p>
                            </div>
                            <div className='item'>
                              <h5>Quantities</h5>
                              <p>{(ele.quantities.join(","))}</p>
                            </div>
                            <div className='item'>
                              <h5 >Acceptedby</h5>
                              <p >{ele.acceptedby}</p>

                            </div>
                          </div>
                        </div>
                      </div>
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
