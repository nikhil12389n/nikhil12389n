import axios from 'axios';
import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'

export default function Login() {
  const navigate=useNavigate();
    const [values,setValues]=useState({
        "name":"",
        "password":"",
        "email":""
    });
    const handleSubmit=async(e)=>{
        e.preventDefault();
        
        
        const {data}=await axios.get("http://localhost:4000/Role",{params:values});
        
        if(data.data1!=null){
          if(data.data1.Role!=="User"){
            localStorage.setItem("Name",values.name);
            localStorage.setItem("Email",values.email);
            navigate("/Admin");
          }
          else{
            try{
              const {data}=await axios.post('http://localhost:4000/Login',{
              ...values},{
                  withCredentials:true
              });
              if(data.error){
                  if(data.error.email){
                      window.alert(data.error.email);
                  }
                  else if(data.error.password){
                      window.alert(data.error.password);
                  }
              }
              else{
                localStorage.setItem("Name",values.name);
                localStorage.setItem("Email",values.email);
                navigate('/');
              }
          }
          catch(err){
              window.alert(err);
          }
          }
        }
        else{
          window.alert("credentials not found!");
        }

        
    }
  return (
    <>
     <div className='container login'>
                <h2>Login Account</h2>

                <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                name="name"
                type="text"
                placeholder="name"
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                name="email"
                type="email"
                placeholder="email"
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                className="form-control"
                name="password"
                type="password"
                placeholder="password"
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            </div>

            <button className="btn btn-primary">Submit</button>
            <span>
              Already have an account? <Link to="/register">Register</Link>
            </span>
          </form>
                

    </div>
    </>
  )
}
