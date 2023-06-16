import React from 'react'
import { Link } from 'react-router-dom'

export default function DGSTDashboard() {
  return (
   <>
   <ul class=" position-absolute top-50 start-50 translate-middle">
     
      
     <li class="nav-item " id="Username">
     <Link to={`/${localStorage.getItem("ROLENAME")}/ReceivedReq`} ><button class="btn btn-primary mb-4">Received Requests</button></Link>
     </li>
    
    
     <li class="nav-item " id="Notification">
       
     <Link to={`/${localStorage.getItem("ROLENAME")}/StatusofReceived`} ><button class="btn btn-danger mb-4">Status of Received</button></Link>
     </li>
     
     </ul>
     
   </>
  )
}
