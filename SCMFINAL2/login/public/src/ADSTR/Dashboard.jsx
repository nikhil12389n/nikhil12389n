
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SendReq from './SendReq';

function ADSTDashboard() {
  return (
    <>
    
    <ul class=" position-absolute top-50 start-50 translate-middle">
      <li class="nav-item">
        {/* <a href="sendrequest.html" target="_self"><button class="btn btn-primary mb-4">Send a req</button></a> */}
        <Link to={`/${localStorage.getItem("ROLENAME")}/SendRequest`}>
  <button className="btn btn-primary mb-4">Send a req</button>
</Link>
        
        
      </li>
      <li class="nav-item  " id="Dashboard">
        <Link to={`/${localStorage.getItem("ROLENAME")}/StatusofSend`} ><button class="btn btn-success mb-4">Status of send</button></Link>
      </li>
      <li class="nav-item " id="Username">
      <Link to={`/${localStorage.getItem("ROLENAME")}/ReceivedReq`} ><button class="btn btn-success mb-4">Received Requests</button></Link>
      </li>
     
     
      <li class="nav-item " id="Notification">
        
      <Link to={`/${localStorage.getItem("ROLENAME")}/StatusofReceived`} ><button class="btn btn-danger mb-4">Status of Received</button></Link>
      </li>
      <li class="nav-item " id="Notification">
        <a href="trackorder.html">  <button class="btn btn-dark" >Track order</button></a>
      </li>
      </ul>
    </>
  );
}

export default ADSTDashboard;
