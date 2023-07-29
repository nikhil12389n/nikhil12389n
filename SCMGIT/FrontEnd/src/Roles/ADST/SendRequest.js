import { useContext, useEffect } from "react";
import Web3 from "web3";
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';

import ConnectContract from "../Connection/ConnectSmartContract.js";
import ConnectMetamask from "../Connection/ConnectMetaMask.js"

import Context from '../../index.js';
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export default function SendRequest() {
 
   window.document.body.style.backgroundColor ="rare-wind-gradient";


  
  let products = [];
  let quantities = [];
  let table;
  const generateError = (err) =>
  toast.success(err, {
    position: 'bottom-right',
    

  });
  const data = useContext(Context);
  ConnectMetamask();
  ConnectContract();
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    table = $("#example").DataTable({
      columns: [
        { title: "RequestNo", data: "requestno" },
        { title: "product", data: "product" },
        { title: "quantity", data: "quantity" },
        { title: "date", data: "date" },
      ],
    });
   
  }, []);
  const putdata = async (adstname, product, quantity, date, e) => {
    const count = parseInt(await window.contract.methods.getrequestcount(localStorage.getItem("ROLENAME")).call());
    products.push(product);
    quantities.push(quantity);
    if (e === "notsubmit") {
      table.row.add({ requestno: count + 1, product: product, quantity: quantity, date: date }).draw();
    } else {
      table.row.add({ 'requestno': count + 1, 'product': product, 'quantity': quantity, 'date': date }).draw();
      let dup = localStorage.getItem("ROLENAME");
      let ref = "";
      for (let i = 0; i < 2; i++) {
        ref += dup[i];
      }
      dup="DIVISION"+ref[1];
      console.log(count);
      try {
        let data1 = await window.contract.methods.fillform(dup, localStorage.getItem("ROLENAME"), products, quantities, date).send({ from: data[localStorage.getItem("ROLENAME")] })
        const trackorderobj = { adstname: localStorage.getItem("ROLENAME"), requestno: count + 1, status: "pending", desc: `Send to ${dup}` };
        const trackorderget = await axios.post('http://localhost:4000/postTrackOrder', trackorderobj, { withCredentials: true });
        console.log("Completed");
        const currentTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
        const details = { user: localStorage.getItem("ROLENAME"), TransactionHash: data1.transactionHash, from: data1.from, to: data1.to, time: currentTime, gasUsed: Number(data1.gasUsed) };
        console.log(details);
        const response = await axios.post("http://localhost:4000/postTransaction", { details }, { withCredentials: true });
        console.log(data1);
        
        window.location.reload();
      } catch (err) {
        if (err.message === "Returned error: The requested account and/or method has not been authorized by the user.") {
          window.alert("Authorizaton Error!");
        }
        else {
          console.log(err);
        }
      }
    }
  }
  const handleclick = () => {
    putdata(localStorage.getItem("ROLENAME"), document.getElementById('product').value, document.getElementById('quantity').value, document.getElementById('date1').value, 'submit');
  }

  const handleclick1 = () => {
    putdata(localStorage.getItem("ROLENAME"), document.getElementById('product').value, document.getElementById('quantity').value, document.getElementById('date1').value, 'notsubmit')
  }

  return (
    <>
      <div className="container form bs-tooltip-end " >
        <h1 style={{ fontSize: "18px" }}>Enter product</h1>
        <input type="text" placeholder="product" id="product" className="form-control" list="browser" name="browser" />
        <datalist id="browser">
          <option value="Wheat"></option>
          <option value="Grains"></option>
          <option value="Eggs"></option>
          <option value="Rice"></option>
          <option value="Meals"></option>
        </datalist>
        <h1 style={{ fontSize: "18px" }}>Enter Quantity</h1>
        <input type="number" className="form-control" placeholder="quantity" min="1" id="quantity" />
        <h1 style={{ fontSize: "18px" }}>Enter date</h1>
        <input type="date" className="form-control" placeholder="date" id="date1" />
        <button className="btn btn-primary my-2" onClick={handleclick1}>Add more</button>
        <hr />
        <h3>Details of your request</h3>
        <table id="example" style={{ width: "100" }}></table>
        <button className="btn btn-dark" onClick={handleclick}>Submit</button>
      </div>
    </>
  );
}

