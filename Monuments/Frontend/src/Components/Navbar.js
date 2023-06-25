import React, { useEffect } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
export default function Navbar() {
  const navigate=useNavigate();

  useEffect(()=>{
    if(localStorage.getItem("Name")){
      document.getElementById("login").innerHTML="logout";
    }
    else{
      document.getElementById("login").innerHTML="login";
    }

  },[]);
  const logout=async()=>{
    if(localStorage.getItem("Name")){
      try{
        const data=await axios.post("http://localhost:4000/logout",{},{withCredentials:true});
      }
      catch(err){
        window.alert(err);
      }
      localStorage.removeItem("Name");
      localStorage.removeItem("Email");
      navigate('/Login');
    }
    else{
      navigate('/Login');    
    }
  }
  const cardspage=async()=>{
    navigate('/carts');
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              <li className="nav-item">
                <a className="nav-link active btn btn-primary" aria-current="page" href="/">Home</a>
              </li>
              
              <li>
             

              </li>

            </ul>
            <div>
            <p style={{color:"white",marginRight:'20px'}}>{localStorage.getItem("Name")}</p>
            </div>
            <div>
              <ShoppingCartIcon style={{ color: "white", marginRight: '10px' }} onClick={cardspage} />
            </div>
            <div>
              <button className='btn btn-primary' id="login" onClick={logout}></button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
