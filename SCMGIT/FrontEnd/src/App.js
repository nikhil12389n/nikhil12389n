import React from 'react'
import { BrowserRouter, Routes, Route, Router, useLocation } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import "react-toastify/dist/ReactToastify.css"
import Registered from './pages/Registered.jsx';
import Navbar from './pages/Navbar.jsx';
import Dashboard from './Roles/ADST/Dashboard.js';
import SendRequest from './Roles/ADST/SendRequest.js';
import StatusofSend from './Roles/ADST/StatusofSend.js';
import DDSTDashboard from './Roles/DDST/Dashboard.js';
import DDSTReceivedRequests from './Roles/DDST/ReceivedRequests.js';
import DDSTStatusofReceived from './Roles/DDST/StatusofReceived.js';
import ReceivedRequests from './Roles/ADST/ReceivedRequests.js';
import StatusofReceived from './Roles/ADST/StatusofReceived.js';
import DGSTDashboard from './Roles/DGST/Dashboard.js';
import DGSTReceivedRequests from './Roles/DGST/ReceivedRequests.js';
import DGSTStatusofReceived from './Roles/DGST/StatusofReceived.js';
import ManufDashboard from './Roles/MANUFACTURER/Dashboard.js';
import ManufReceivedReq from './Roles/MANUFACTURER/ReceivedReq.js';
import ManufStatusofreceived from './Roles/MANUFACTURER/Statusofreceived.js';
import Trackorder from './Roles/ADST/Trackorder.js';
import GetTransactions from './Transactions/GetTransactions.js';
import Home from './pages/Home.jsx';
import Footer from './pages/Footer.js';
import Cookies from "js-cookie"
import { useState } from 'react';
import { useEffect, createContext } from 'react';
import ConnectMetamask from './Roles/Connection/ConnectMetaMask.js';
import ConnectContract from './Roles/Connection/ConnectSmartContract.js';
import ConnectContractSR from './Roles/Connection/ConnectContract2.js';
import Display from './pages/Display.js';
import axios from "axios";
import AddDivisions from './Roles/DGST/AddDivisions.js';
import PageNotFound from './pages/PageNotFound.js';
import Spinner from "./pages/Spinner";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const regex1 = /^DIVISION(?!0$)\d+$/
const regex2 = /^D(?!0$)\d+ADST(?!0$)\d+$/
export const Context = React.createContext();
export default function App() {

  const [role, setRole] = useState('');
 
  const [dup1, setDup1] = useState(null);
  const [loading, setLoading] = useState(null);
  const [loggin,setLoggin]=useState(false);

  useEffect(() => {
    ConnectMetamask();
    ConnectContract();
    ConnectContractSR();
  }, []);
  useEffect(() => {
    if (Cookies.get('jwt')) {
      setLoggin(true);
      const fetchdata = async () => {

        try {
          setLoading(true);
          const { data } = await axios.get("http://localhost:4000/checkUser", { withCredentials: true });
         
          setRole(data.data.role);
         
          console.log(data,"hi");
          localStorage.setItem("ROLENAME", data.data.role);

        }
        catch (err) {
          
          console.log(err);
        }
        finally {
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        }
      }
      fetchdata();
    }
    else{
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [loggin]);

  if (loading) {
    return <Spinner />
  }

  const setter =async(a)=>{
    setLoggin(a);
  }

  return (
    <>
      <Navbar />

      <Context.Provider value={role}>
        <Routes>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/registered" element={<Registered />}></Route>
          <Route exact path="/login" element={<Login value={setter}/>}></Route>
          <Route exact path="/" element={<Home />}></Route>
          {role && regex1.test(role) &&
            <Route exact path={`/${role}`} element={<DDSTDashboard />}>
              <Route exact path="ReceivedReq" element={<DDSTReceivedRequests />}></Route>
              <Route exact path="StatusofReceived" element={<DDSTStatusofReceived />}></Route>
              <Route exact path="GetTransactions" element={<GetTransactions />}></Route>
            </Route>
          }
          {role && regex2.test(role) &&
            <Route exact path={`/${role}`} element={<Dashboard />}>
              <Route exact path="ReceivedReq" element={<ReceivedRequests/>}></Route>
              <Route exact path="StatusofReceived" element={<StatusofReceived />}></Route>
              <Route exact path="SendRequest" element={<SendRequest />}></Route>
              <Route exact path="StatusofSend" element={<StatusofSend />}></Route>
              <Route exact path="TrackOrder" element={<Trackorder />}></Route>
              <Route exact path="GetTransactions" element={<GetTransactions />}></Route>
            </Route>
          }
          {role && role === "DGST" &&
            <Route exact path="/DGST" element={<DGSTDashboard />}>

              <Route exact path="ReceivedReq" element={<DGSTReceivedRequests />}></Route>
              <Route exact path="StatusofReceived" element={<DGSTStatusofReceived />}></Route>
              <Route exact path="GetTransactions" element={<GetTransactions />}></Route>
              <Route exact path="AddDivisions" element={<AddDivisions />}></Route>
            </Route>
          }
          {role && role === "MANUFACTURER" &&
            <Route exact path="/MANUFACTURER" element={<ManufDashboard />}>
              <Route exact path="ReceivedReq" element={<ManufReceivedReq />}></Route>
              <Route exact path="StatusofReceived" element={<ManufStatusofreceived />}></Route>
              <Route exact path="GetTransactions" element={<GetTransactions />}></Route>
            </Route>
          }
          <Route exact path="*" element={<PageNotFound />}></Route>
        </Routes>

      </Context.Provider>
      <Footer />

    </>
  );
}

