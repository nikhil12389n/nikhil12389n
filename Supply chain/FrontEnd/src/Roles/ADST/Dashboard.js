
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <>


      <div className='container  d-flex align-items-center justify-content-center vh-100 '>



        <div className='row'>

          <Link to={`/${localStorage.getItem("ROLENAME")}/SendRequest`}>
            <button className="btn btn-primary mb-4">Send a req</button>
          </Link>




          <Link to={`/${localStorage.getItem("ROLENAME")}/StatusofSend`} ><button class="btn btn-success mb-4">Status of send</button></Link>

          <Link to={`/${localStorage.getItem("ROLENAME")}/ReceivedReq`} ><button class="btn btn-success mb-4">Received Requests</button></Link>


          <Link to={`/${localStorage.getItem("ROLENAME")}/StatusofReceived`} ><button class="btn btn-danger mb-4">Status of Received</button></Link>


          <Link to={`/${localStorage.getItem("ROLENAME")}/TrackOrder`} ><button className="btn btn-dark mb-4" >Track order</button></Link>
        </div>

      </div>
    </>
  );
}

export default Dashboard;
