import React from 'react'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Secret from './pages/Secret.jsx';
import "react-toastify/dist/ReactToastify.css"
import Registered from './pages/Registered.jsx';
import Navbar from './Components/Navbar.jsx';
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



export default function App() {
  return (
    <>


      <BrowserRouter>

        <Navbar />



        <Routes>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/registered" element={<Registered />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/" element={<Secret />}></Route>
          <Route exact path="/D1ADST1" >
            <Route exact path="Dashboard" element={<Dashboard />}></Route>
            <Route exact path="ReceivedReq" element={<ReceivedRequests />}></Route>
            <Route exact path="StatusofReceived" element={<StatusofReceived />}></Route>
            <Route exact path="SendRequest" element={<SendRequest />}></Route>
            <Route exact path="StatusofSend" element={<StatusofSend />}></Route>
            <Route exact path="TrackOrder" element={<Trackorder />}></Route>
          </Route>
          <Route exact path="/DIVISION1">
            <Route exact path="Dashboard" element={<DDSTDashboard />}></Route>
            <Route exact path="ReceivedReq" element={<DDSTReceivedRequests />}></Route>
            <Route exact path="StatusofReceived" element={<DDSTStatusofReceived />}></Route>
          </Route>
          <Route exact path="/DIVISION2" >
            <Route exact path="Dashboard" element={<DDSTDashboard />}></Route>
            <Route exact path="ReceivedReq" element={<DDSTReceivedRequests />}></Route>
            <Route exact path="StatusofReceived" element={<DDSTStatusofReceived />}></Route>
          </Route>
          <Route exact path="/D1ADST2" >
            <Route exact path="Dashboard" element={<Dashboard />}></Route>
            <Route exact path="ReceivedReq" element={<ReceivedRequests />}></Route>
            <Route exact path="StatusofReceived" element={<StatusofReceived />}></Route>
            <Route exact path="SendRequest" element={<SendRequest />}></Route>
            <Route exact path="StatusofSend" element={<StatusofSend />}></Route>
            <Route exact path="TrackOrder" element={<Trackorder />}></Route>
          </Route>
          <Route exact path="/D1ADST3" >
            <Route exact path="Dashboard" element={<Dashboard />}></Route>
            <Route exact path="ReceivedReq" element={<ReceivedRequests />}></Route>
            <Route exact path="StatusofReceived" element={<StatusofReceived />}></Route>
            <Route exact path="SendRequest" element={<SendRequest />}></Route>
            <Route exact path="StatusofSend" element={<StatusofSend />}></Route>
            <Route exact path="TrackOrder" element={<Trackorder />}></Route>
          </Route>
          <Route exact path="/D2ADST1" >
            <Route exact path="Dashboard" element={<Dashboard />}></Route>
            <Route exact path="ReceivedReq" element={<ReceivedRequests />}></Route>
            <Route exact path="StatusofReceived" element={<StatusofReceived />}></Route>
            <Route exact path="SendRequest" element={<SendRequest />}></Route>
            <Route exact path="StatusofSend" element={<StatusofSend />}></Route>
            <Route exact path="TrackOrder" element={<Trackorder />}></Route>
          </Route>
          <Route exact path="/D2ADST2" >
            <Route exact path="Dashboard" element={<Dashboard />}></Route>
            <Route exact path="ReceivedReq" element={<ReceivedRequests />}></Route>
            <Route exact path="StatusofReceived" element={<StatusofReceived />}></Route>
            <Route exact path="SendRequest" element={<SendRequest />}></Route>
            <Route exact path="StatusofSend" element={<StatusofSend />}></Route>
            <Route exact path="TrackOrder" element={<Trackorder />}></Route>
          </Route>
          <Route exact path="/D2ADST3" >
            <Route exact path="Dashboard" element={<Dashboard />}></Route>
            <Route exact path="ReceivedReq" element={<ReceivedRequests />}></Route>
            <Route exact path="StatusofReceived" element={<StatusofReceived />}></Route>
            <Route exact path="SendRequest" element={<SendRequest />}></Route>
            <Route exact path="StatusofSend" element={<StatusofSend />}></Route>
            <Route exact path="TrackOrder" element={<Trackorder />}></Route>
          </Route>
          <Route exact path="/DGST" >
            <Route exact path="Dashboard" element={<DGSTDashboard />}></Route>
            <Route exact path="ReceivedReq" element={<DGSTReceivedRequests />}></Route>
            <Route exact path="StatusofReceived" element={<DGSTStatusofReceived />}></Route>
          </Route>
          <Route exact path="/MANUFACTURER" >
            <Route exact path="Dashboard" element={<ManufDashboard />}></Route>
            <Route exact path="ReceivedReq" element={<ManufReceivedReq />}></Route>
            <Route exact path="StatusofReceived" element={<ManufStatusofreceived />}></Route>
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}