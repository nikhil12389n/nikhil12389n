import { useContext, useEffect } from "react";
import Web3 from "web3";
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';
import ConnectContract from "../Connection/ConnectSmartContract.js";
import ConnectMetamask from "../Connection/ConnectMetaMask.js"
export default function SendRequest(){
  let account="0x85e19d642d24fe428Eb9205F077a856CA8bC95B0";
  let products=[];
  let quantities=[];
  let table;


  ConnectMetamask();
 ConnectContract();


  useEffect(()=>{
    // eslint-disable-next-line react-hooks/exhaustive-deps
    table= $("#example").DataTable({
      columns: [
        { title: "RequestNo", data: "requestno" },
        { title: "product", data: "product" },
        { title: "quantity", data: "quantity" },
        { title: "date", data: "date" },
      ],
    });

    

  },[]);
  const putdata=async(adstname,product,quantity,date,e)=>{

    const count=parseInt(await window.contract.methods.getrequestcount(localStorage.getItem("ROLENAME")).call());
    products.push(product);
    quantities.push(quantity);

    if(e==="notsubmit"){
      table.row.add({requestno:count+1,product:product,quantity:quantity,date:date}).draw();
    }
    else{
      table.row.add({'requestno':count+1,'product':product,'quantity':quantity,'date':date}).draw();
    
    //   console.log(document.getElementById("adstname").innerText,products,quantities,date);
      let dup=localStorage.getItem("ROLENAME");
      let ref="";
      for(let i=0;i<2;i++){
          ref+=dup[i];
      }
      if(ref==="D1"){
          dup="DIVISION1";
      }
      if(ref==="D2"){
          dup="DIVISION2";
      }
      if(ref==="D3"){
          dup="DIVISION3";
      }
      try{
        await window.contract.methods.fillform(dup,localStorage.getItem("ROLENAME"),products,quantities,date).send({from:account});
      }
      catch(err){
        alert("Transaction is cancelled!");
      }

    }
  }
  const handleclick=()=>{
    putdata(localStorage.getItem("ROLENAME"),document.getElementById('product').value,document.getElementById('quantity').value,document.getElementById('date1').value,'submit');
  }
  const handleclick1=()=>{
    putdata(localStorage.getItem("ROLENAME"),document.getElementById('product').value,document.getElementById('quantity').value,document.getElementById('date1').value,'notsubmit')
  }
    return (
        <>
        <div className="form bs-tooltip-end container">

      <h>Enter product</h>
      <input  type="text"  placeholder="product"  id="product" className="form-control" list="browser" name="browser"/>
      <datalist id="browser">
        <option value="Wheat"></option>
        <option value="Grains"></option>
        <option value="Eggs"></option>
        <option value="Rice"></option>
        <option value="Meals"></option>
      </datalist>
      <h> Enter Quantity</h>
      <input type="number" className="form-control" placeholder="quantity" min="1" id="quantity"/>
      <h>Enter date</h>
      <input type="date" className="form-control" placeholder="date" id="date1" />
      <button className="btn btn-dark" onClick={handleclick1}>Addmore</button>
      <hr />
      <h3>Details of your request</h3>

      <table id="example" style={{width: "100"}}></table>
      <button className="btn btn-dark" onClick={handleclick}>Submit</button>
    </div>

        </>
    );
}
