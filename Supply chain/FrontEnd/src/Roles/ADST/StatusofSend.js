import React, { useEffect, useState } from 'react'
import ConnectContract2 from '../Connection/ConnectContract2';
import ConnectMetamask from '../Connection/ConnectMetaMask';
import ConnectContract from '../Connection/ConnectSmartContract';

export default function StatusofSend() {
  const [res, setRes] = useState([]);
  ConnectMetamask();
  ConnectContract();
  ConnectContract2();

  useEffect(() => {
    const fetchdata = async () => {
      const res = await window.contract.methods.getAllRequestSendAdst(localStorage.getItem("ROLENAME")).call();
      const res1 = await window.contract1.methods.getalladstsend(localStorage.getItem("ROLENAME")).call();
      console.log(res1);
      const updated = [...res];
      for (let i = 0; i < res1.length; i++) {
        for (let j = 0; j < updated.length; j++) {
          if (parseInt(res1[i].reqno) === parseInt(updated[j].reqno) && res1[i].from === updated[j].from) {
            // Create a new object with updated properties
            const updatedObj = {
              ...updated[j],
              status: res1[i].status,
              acceptedby: res1[i].acceptedby
            };

            // Replace the object in the array with the updated object
            updated[j] = updatedObj;
          }
        }
      }

      setRes(updated);
      console.log(res);
    }
    fetchdata();
  }, []);
  return (
    <>
      {
        res && <div>
          {
            <ul>
              {
                res.map((ele, i) => (
                  <div className="card">
                    <div className="card-header"  >
                      <h2>{"RequestNo" + parseInt(ele.reqno)}</h2>

                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Products</h5>
                      <p className="card-text">{ele.products.join(",")}</p>
                      <h5 className="card-title">Quantities</h5>
                      <p className="card-text">{ele.quantities.join(",")}</p>
                      <h5 className="card-title">Status</h5>
                      <p className="card-text">{ele.status}</p>
                      <h5 className="card-title">Acceptedby</h5>
                      <p className="card-text">{ele.acceptedby}</p>
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
