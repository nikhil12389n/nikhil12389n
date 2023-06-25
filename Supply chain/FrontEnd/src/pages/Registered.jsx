import React,{useEffect} from 'react'
import {useCookies}from 'react-cookie'
import { Outlet, useNavigate } from 'react-router-dom'
import axios from "axios"
import { toast, ToastContainer } from 'react-toastify';
export default function Registered(){
  const navigate=useNavigate();

  const [cookies,setCookie,removeCookie]=useCookies([]);
  useEffect(()=>{
    const verifyUser=async ()=>{
      if(!cookies.jwt){
        navigate('/login');
      }
      else{
        const {data}=await axios.post("http://localhost:4000",{},{withCredentials:true});
        if(!data.status){
          removeCookie("jwt");
          navigate("/login");
        }
        else{
          toast(` HI {data.user}`,{theme:"dark"}); 
        }
      }
    }
  })
  const  logout=()=>{
    removeCookie("jwt");
    navigate('/register');
  }
  return(
    <>
      <div>
     <button onClick={logout}>Logout</button>
     
    </div>
    <Outlet/>
    <ToastContainer/>
    </>
  )
}