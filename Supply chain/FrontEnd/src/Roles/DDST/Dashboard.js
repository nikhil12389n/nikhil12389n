import React from 'react'
import { Link } from 'react-router-dom'

export default function DDSTDashboard() {
  return (
    <>
      <div className='container d-flex align-items-center justify-content-center vh-100'>
        <div className='row'>

          <Link to={`/${localStorage.getItem("ROLENAME")}/ReceivedReq`} ><button class="btn btn-success mb-4">Received Requests</button></Link>


          <Link to={`/${localStorage.getItem("ROLENAME")}/StatusofReceived`} ><button class="btn btn-danger mb-4">Status of Received</button></Link>

        </div>
      </div>
    </>
  )
}
