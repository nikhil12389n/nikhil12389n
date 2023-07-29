import React, { useEffect, useState } from "react";
import $ from 'jquery';
import 'datatables.net';
import axios from "axios";
import "./transactions.css"
import img from "../pages/no-data-concept-illustration_114360-616.avif";
function GetTransactions() {
    const [data, setData] = useState([]);
    window.document.body.style.backgroundColor = " rgb(213, 233, 219)"

    const [modaldata, setModaldata] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/GetTransactions", {
                    params: { ROLENAME: localStorage.getItem("ROLENAME") }
                });
                const { data } = response;
                if (data.found === false) {
                    window.alert("Login to get details");
                } else {
                    const { TransactionHash, from, to, time, gasUsed } = data.data;
                    const transactions = [];
                    for (let i = 0; i < TransactionHash.length; i++) {
                        transactions.push({
                            TransactionHash: TransactionHash[i],
                            from: from[i],
                            to: to[i],
                            time: time[i],
                            gasUsed: gasUsed[i]
                        });
                    }
                    setData(transactions);
                    
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    
    useEffect(() => {

        if (data.length > 0) {
            $('#myTable').DataTable();
        }
    }, [data]);
    const AddModaldata = async (transactions) => {
        setModaldata(transactions);
        console.log(transactions);

    }
    if(data.length===0){
        return (
            <div className='d-flex justify-content-center'>
              <img className='img-fluid' src={img} alt="" style={{"height":"95vh"}}/>
            </div>
          )
    }
    
    return (
        <>
        <div className="d-flex justify-content-center">
        <h3>Transaction Details</h3>
        </div>
            
            <div className="container trans-cont">
            
                {
                    data.map((transactions, i) => {
                        return (
                            <div className="card my-4 trans-card-box " key={i}>
                                <div className="card-header d-flex justify-content-between ">
                                    <h5> From Address: {transactions.from}</h5>
                                    <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={() => AddModaldata(transactions)}>Get Details</button>
                                </div>
                                <div className="card-body d-flex flex-wrap justify-content-between align-items-center">
                                    
                                    <div  className="flex-grow-1">Hash :{transactions.TransactionHash}</div>
                                    <div  className="flex-grow-1">Time is: {transactions.time}</div>
                                    
                                    
                                </div>

                            </div>
                        )
                    })
                }
                <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog ">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel"><h5>Transaction Details</h5></h1>
                               
                            </div>
                            <div className="modal-body modal1-body" >
                               <p>From Address is:{modaldata.from}</p>
                               
                               <p>To address is:{modaldata.to}</p>
                               <p>Time is:{modaldata.time}</p>
                               <p>Gas Used is:{modaldata.gasUsed}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default GetTransactions;
