import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { toast, ToastContainer } from "react-toastify";
import Registered from "../pages/Registered";
import img1 from "./green-leaves-close-up-portrait.jpg";
import img from "./PROCESS FLOW (3).png";
import Login from "../pages/Login";


export default function Navbar(props) {
  const generateError = (err) =>
    toast.error(err, {
      position: 'bottom-right',
      

    });
  

  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);

  const [loggedin, setLoggedin] = useState(null);
  

  useEffect(() => {
    const y = localStorage.getItem("ROLENAME");

    if (localStorage.getItem("ROLENAME")) {
      if (parseInt(y[1])) {
        document.getElementById("send-req").style.display = "";
      }
      else {

        if (localStorage.getItem("ROLENAME") === "DGST") {
          document.getElementById("dgst").style.display = "";
        }
        else {
          document.getElementById("rec-req").style.display = "";
        }

      }
        setLoggedin(true)
      // document.getElementById("login").innerHTML = "Logout";
    } else {
      setLoggedin(false)
      // document.getElementById("login").innerHTML = "Login";
    }

  }, []);

  const dashboard = async () => {
    if (localStorage.getItem("ROLENAME")) {
      navigate(`/${localStorage.getItem("ROLENAME")}`);

    } else {
      window.alert("Login to Continue!");
    }
  };

  const logout = async () => {

    try {
      const data = await axios.post(
        "http://localhost:4000/logout",
        {},
        { withCredentials: true }
      );

      localStorage.removeItem("ROLENAME");
     
      navigate("/");
      
      window.location.reload();
      console.log(data);
    } catch (err) {
      console.log(err);
    }



  };
  const home = () => {
    navigate("/");
  }
  const login = () => {
    navigate("/login");
  }

  return (


    <>


      <nav className="navbar navbar-dark " style={{ backgroundImage: `url(${img1})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} >
        <div className="container-fluid ">


          <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <h3 className="text-white">{
            localStorage.getItem("ROLENAME") ? localStorage.getItem("ROLENAME") :"Supply chain management"
          }</h3>

          <div className="d-flex align-items-center  justify-content-end">
          <button className="btn  mx-3" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" >
               <img src={img} alt=""  height="35" width="80"/>
            </button>

            
            {loggedin ?

              <button className="btn btn-danger mx-3" type="submit" onClick={logout}>Logout</button> :<button className="btn btn-success mx-3 " style={{"width":"70px","height":"40px"}} type="submit" onClick={login}>Login</button>

            }

          </div>
          <div className="offcanvas offcanvas-start text-bg-dark " style={{ width: "300px" }} tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">

              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">SCM</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body" >

              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item ">
                  <button className="btn btn-dark my-2" onClick={() => home()}>Home</button>

                </li>




              </ul>
              <ul className="navbar-nav justify-content-end flex-grow-1 " id="send-req" style={{ display: "none" }}>
                <li>
                  <div className=' d-flex flex-column '>
                    <Link to={`/${localStorage.getItem('ROLENAME')}/SendRequest`} >
                      <button className='btn btn-dark my-3'>Send a Request</button>
                    </Link>
                    <Link to={`/${localStorage.getItem('ROLENAME')}/StatusofSend`}>
                      <button className='btn btn-dark my-3'>Status of Sent</button>
                    </Link>
                    <Link to={`/${localStorage.getItem('ROLENAME')}/ReceivedReq`} >
                      <button className='btn btn-dark my-3'>Received Requests</button>
                    </Link>
                    <Link to={`/${localStorage.getItem('ROLENAME')}/StatusofReceived`} >
                      <button className='btn btn-dark my-3'>Status of Received</button>
                    </Link>
                    <Link to={`/${localStorage.getItem('ROLENAME')}/TrackOrder`} >
                      <button className='btn btn-dark my-3'>Track Order</button>
                    </Link>
                    <Link to={`/${localStorage.getItem('ROLENAME')}/GetTransactions`}>
                      <button className='btn btn-dark my-3'>Get Transactions</button>
                    </Link>
                  </div>
                </li>
              </ul>

              <ul className="navbar-nav justify-content-end flex-grow-1  " id="rec-req" style={{ display: "none" }} >
                <li>
                  <div className=' d-flex flex-column '>

                    <Link to={`/${localStorage.getItem('ROLENAME')}/ReceivedReq`} >
                      <button className='btn btn-dark my-3'>Received Requests</button>
                    </Link>
                    <Link to={`/${localStorage.getItem('ROLENAME')}/StatusofReceived`} >
                      <button className='btn btn-dark my-3'>Status of Received</button>
                    </Link>

                    <Link to={`/${localStorage.getItem('ROLENAME')}/GetTransactions`}>
                      <button className='btn btn-dark my-3'>Get Transactions</button>
                    </Link>
                  </div>
                </li>
              </ul>
              {
                <ul className="navbar-nav justify-content-end flex-grow-1 " id="dgst" style={{ display: "none" }} >
                  <li>
                    <div className=' d-flex flex-column '>

                      <Link to={`/${localStorage.getItem('ROLENAME')}/ReceivedReq`} >
                        <button className='btn btn-dark my-3'>Received Requests</button>
                      </Link>
                      <Link to={`/${localStorage.getItem('ROLENAME')}/StatusofReceived`} >
                        <button className='btn btn-dark my-3'>Status of Received</button>
                      </Link>

                      <Link to={`/${localStorage.getItem('ROLENAME')}/GetTransactions`}>
                        <button className='btn btn-dark my-3'>Get Transactions</button>
                      </Link>
                      <Link to={`/${localStorage.getItem('ROLENAME')}/AddDivisions`}>
                        <button className='btn btn-dark my-3'>Add Divisions</button>
                      </Link>
                    </div>
                  </li>
                </ul>

              }



            </div>
          </div>
        </div>
      </nav>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body"  >
              <img src={img}  alt="" className="img-fluid" />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

    </>

  );
}


