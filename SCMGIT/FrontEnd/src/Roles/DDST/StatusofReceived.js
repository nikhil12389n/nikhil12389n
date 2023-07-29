import React, { useEffect, useState } from 'react'
import ConnectMetamask from '../Connection/ConnectMetaMask';
import ConnectContract from '../Connection/ConnectSmartContract';
import img from "../../pages/no-data-concept-illustration_114360-616.avif";
export default function DDSTStatusofReceived() {
  window.document.body.style.backgroundColor = "rgb(244, 245, 234)";
  const [res, setRes] = useState([]);
  ConnectMetamask();
  ConnectContract();
  useEffect(() => {
    const fetchdata = async () => {
      const res = await window.contract.methods.getAllreceivedDDST(localStorage.getItem("ROLENAME")).call();
      setRes(res);
      console.log(res);
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
    <div className='d-flex justify-content-center my-3'>
      <h3>StatusofReceived</h3>
    </div>
      {
        res && <div className='container cont   justify-content-center'>
          {
            <ul>
              {
                res.map((ele, i) => (
                  <div className="accordion my-4" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${i}`} aria-expanded="false" aria-controls={`collapse-${i}`} >
                          <h5>{"Request No " + (i + 1)}</h5>
                        </button>
                      </h2>
                      <div id={`collapse-${i}`} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
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
                              <p>{ele.products}</p>
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
                ))
              }
            </ul>
          }
        </div>
      }
    </>
  )
}
