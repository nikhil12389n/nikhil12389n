import { useEffect } from "react";
import ConnectMetamask from "./ConnectMetamask.jsx";
import ConnectcontractSS from "./ConnectcontractSS.jsx";
import { useState } from "react";

export default function StatusofSend() {
  const [res, setRes] = useState([]);
  const [res2, setRes2] = useState([]);
  const [res3, setRes3] = useState([]);

  ConnectMetamask();
  ConnectcontractSS();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await window.contract.methods
          .getAllreqsent(localStorage.getItem("ROLENAME"))
          .call();
        setRes(res);

        const res2 = await window.contract1.methods
          .getallreqsend(localStorage.getItem("ROLENAME"))
          .call();
        setRes2(res2);

        const res3 = await window.contract2.methods
          .getAllAdstSend(localStorage.getItem("ROLENAME"))
          .call();
        setRes3(res3);
        console.log(res);

        
        const updated=[...res];
        
        // console.log(updated);

        for (let i = 0; i < updated.length; i++) {
          for (let j = 0; j < res2.length; j++) {
            if (res2[j].reqno === updated[i].reqno && res2[j].from === updated[i].from) {
              updated[i] = res2[j];
            }
          }
        }

        for (let i = 0; i < updated.length; i++) {
          for (let j = 0; j < res3.length; j++) {
            if (res3[j].reqno === updated[i].reqno && res3[j].from === updated[i].from) {
              updated[i] = res3[j];
            }
          }
        }

        let resultf = [];

        for (let i = updated.length - 1; i >= 0; i--) {
          let result = [];
          const ref1 = await window.contract.methods.track(updated[i].from, updated[i].reqno).call();
          for (let item of ref1) {
            result.push(item);
          }

          const ref2 = await window.contract1.methods.track(updated[i].from, updated[i].reqno).call();
          for (let item of ref2) {
            result.push(item);
          }

          const ref3 = await window.contract2.methods.track(updated[i].from, updated[i].reqno).call();
          for (let item of ref3) {
            result.push(item);
          }

          resultf.push(result);
          setRes(updated);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {
        res && <div>
        {
           <ul>
            {
                res.map((ele,i)=>(
                    <div className="card">
  <div className="card-header"  >
  <h2>{"RequestNo"+parseInt(ele.reqno)}</h2>
   
  </div>
  <div className="card-body">
    <h5 className="card-title">Products</h5>
    <p className="card-text">{ele.products}</p>
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
  );
}
