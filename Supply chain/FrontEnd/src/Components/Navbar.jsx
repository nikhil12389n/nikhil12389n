import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { BrowserRouter as Router, Outlet, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Registered from "../pages/Registered";
import img from "./Screenshot (313).png";
export default function Navbar() {
  
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);

  useEffect(() => {
    
    if (localStorage.getItem("ROLENAME")) {
      document.getElementById("login").innerHTML = "Logout";
    } else {
      document.getElementById("login").innerHTML = "Login";
    }
  }, []);
  const logout=async()=>{
    try{
      const data=await axios.post("http://localhost:4000/logout",{},{withCredentials:true});
      console.log(data);
    }
    catch(err){
      console.log(err);
    }
    localStorage.removeItem("ROLENAME");
    navigate('/login');
  }

  
   
    
  
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg  btn btn-dark ">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav w-100 justify-content-between">
                <li className="nav-item">
                  <a href="/">
                    <button className="btn btn-dark">Home</button>
                  </a>
                </li>
                <li className="nav-item">
                  <h2 id="adstname">{localStorage.getItem("ROLENAME")}</h2>
                </li>
                <li className="nav item">
                   <button
                    id="login"
                    className="btn btn-primary"
                    onClick={logout}
                  >
                    Logout
                  </button> 
                  
                  <li>
                 <button type="button" className="btn btn-primary mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Process</button>
                  </li>
                  <li>
                  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    
      
      <div className="modal-body d-flex justify-content-center align-items-center">
        <img src={img} alt=""/><br/>
        
      </div>
      <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
     
    </div>
  
</div>
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      
    </>
  );
}
