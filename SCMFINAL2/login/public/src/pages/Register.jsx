import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {ToastContainer,toast} from 'react-toastify';
import axios from "axios";

export default function Register(){
    const navigate=useNavigate();
    const [values,setValues]=useState({
        email:"",
        password:"",

    });


    const generateError=(err)=>toast.error(err,{
        position:"bottom-right"
    })

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const {data}=await axios.post("http://localhost:4000/register",
            {
                ...values,
            },{
                withCredentials:true
            }
            );
            console.log(data);
            if(data){
                if(data.errors){
                    const {email,password}=data.errors;
                    if(email){
                        generateError(email);

                    }
                    else if(password){
                        generateError(password);

                    }
                }
                else{
                    navigate('/registered');
                }
            }
        }
        catch(err){
            console.log(err);
        }
    }
  return(
    <div className='container col-5 '>
       <div>
       <h2>Register Account</h2>

        
        
<form onSubmit={(e) => handleSubmit(e)}>
            <div classname="mb-3">
                <label htmlfor="email" class="form-label">Email</label>
                <input type="email" placeholder='email' name="email" class="form-control" onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label htmlfor="password" class="form-label">Password</label>
                <input type="password" name='password' placeholder='password' class="form-control" onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} />
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
            <span>
        Already have an account? <Link to='/login'>Login</Link>
    </span>
            
            <ToastContainer />
        </form>

       </div>
    </div>
  )
}