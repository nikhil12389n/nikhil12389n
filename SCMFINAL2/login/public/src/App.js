import React from 'react'
import {BrowserRouter,Routes,Route, Router} from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Secret from './pages/Secret.jsx';
import "react-toastify/dist/ReactToastify.css"
import Registered from './pages/Registered.jsx';
import ADSTDashboard from './ADSTR/Dashboard.jsx';
import Navbar from './Components/Navbar.jsx';
import SendReq from './ADSTR/SendReq.jsx';
import StatusofSend from './ADSTR/StatusofSend.jsx';
import StatusofReceived from './ADSTR/StatusofReceived.jsx';
import DIVISIONDashboard from './DDSTR/Dashboard.jsx';
import DIVISIONStatusofreceived  from './DDSTR/StatusofReceived.jsx';
import DIVISIONReceivedReq from './DDSTR/ReceivedReq.jsx';
import ReceivedReq from './ADSTR/ReceivedReq.jsx';
import DGSTDashboard from './DGSTR/Dashboard.js';
import DGSTReceivedreq from './DGSTR/Receivedreq.js';
import DGSTStatusofReceived from './DGSTR/StatusofReceived.js';
import ManufReceivedReq from './MANUFR/ReceivedReq.js';
import DashboardManuf from './MANUFR/Dashboard.js';
import ManufStatusofReceived from './MANUFR/StatusofReceived.js';
import Footer from './Components/Footer.js';
import Display from './Components/Display.js';

export default function App(){
  return(
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Display/>
   
    
   <Routes>
     <Route exact path="/register" element={<Register/>}></Route>
     <Route exact path="/registered" element={<Registered/>}></Route>
     <Route exact path="/login"   element={<Login/>}></Route>
     <Route exact path="/" element={<Secret/>}></Route>
     <Route exact path="/D1ADST1">
      <Route exact path="Dashboard" element={<ADSTDashboard/>}></Route>
      <Route exact path="ReceivedReq" element={<ReceivedReq/>}></Route>
      <Route exact path="SendRequest" element={<SendReq/>} ></Route>
      <Route exact path="StatusofReceived" element={<StatusofReceived/>} ></Route>
      <Route exact path="StatusofSend" element={<StatusofSend/>} ></Route>
     </Route>
     <Route exact path="/D1ADST2">
      <Route exact path="Dashboard" element={<ADSTDashboard/>}></Route>
      <Route exact path="ReceivedReq" element={<ReceivedReq/>}  ></Route>
      <Route exact path="SendRequest" element={<SendReq/>} ></Route>
      <Route exact path="StatusofReceived" element={<StatusofReceived/>} ></Route>
      <Route exact path="StatusofSend" element={<StatusofSend/>} ></Route>
     </Route>
     <Route exact path="/D2ADST1">
      <Route exact path="Dashboard" element={<ADSTDashboard/>}></Route>
      <Route exact path="ReceivedReq" element={<ReceivedReq/>}  ></Route>
      <Route exact path="SendRequest" element={<SendReq/>} ></Route>
      <Route exact path="StatusofReceived" element={<StatusofReceived/>} ></Route>
      <Route exact path="StatusofSend" element={<StatusofSend/>} ></Route>
     </Route>
     <Route exact path="/D2ADST2">
      <Route exact path="Dashboard" element={<ADSTDashboard/>}></Route>
      <Route exact path="ReceivedReq" element={<ReceivedReq/>}  ></Route>
      <Route exact path="SendRequest" element={<SendReq/>} ></Route>
      <Route exact path="StatusofReceived" element={<StatusofReceived/>} ></Route>
      <Route exact path="StatusofSend" element={<StatusofSend/>} ></Route>
     </Route>
     <Route exact path="/DIVISION1">
      <Route exact path="Dashboard" element={<DIVISIONDashboard/>}></Route>
      <Route exact path="ReceivedReq" element={<DIVISIONReceivedReq/>} ></Route>
      <Route exact path="StatusofReceived" element={<DIVISIONStatusofreceived/>} ></Route>
     </Route>
     <Route exact path="/DIVISION2">
      <Route exact path="Dashboard" element={<DIVISIONDashboard/>}></Route>
      <Route exact path="ReceivedReq" element={<DIVISIONReceivedReq/>} ></Route>
      <Route exact path="StatusofReceived" element={<DIVISIONStatusofreceived/>} ></Route>
     </Route>
     <Route exact path="/DGST">
      <Route exact path="Dashboard" element={<DGSTDashboard/>}></Route>
      <Route exact path="ReceivedReq" element={<DGSTReceivedreq/>}  ></Route>
      <Route exact path="StatusofReceived" element={<DGSTStatusofReceived/>}  ></Route>
     </Route>
     <Route exact path="/MANUFACTURER">
      <Route exact path="Dashboard" element={<DashboardManuf/>}></Route>
      <Route exact path="ReceivedReq" element={<ManufReceivedReq/>}  ></Route>
      <Route exact path="StatusofReceived" element={<ManufStatusofReceived/>}  ></Route>
     </Route>
   </Routes>
   
  </BrowserRouter>
    </>
  );
}