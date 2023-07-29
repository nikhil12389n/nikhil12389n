import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useEffect } from 'react';
import CoverImage from './wp2579124.jpg';
import './image.css';
import "./login.css"
import { useContext } from 'react';
import {Context} from "../App";

export default function Login(props) {
  const data=useContext(Context);
  window.document.body.style.backgroundColor="rgba(0, 0,100, 0.5)";
  const navigate = useNavigate();
  const [values, setValues] = useState({
    role: '',
    password: '',
  });
  const generateError = (err) =>
    toast.success(err, {
      position: 'bottom-right',
      

    });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'http://localhost:4000/login',
        {
          ...values,
        },
        {
          withCredentials: true,
        }
      );
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) {
            generateError(email);
          } else if (password) {
            generateError(password);
          }
        } else {
         
          props.value(true);
          
          navigate(`/${values.role}/ReceivedReq`);
          window.location.reload();

          
         
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  
  return (
    <>
    
      <div >
      <div className='container   d-flex justify-content-center login-cont '  >
      <div className=' border rounded-5  bg-white shadow box-area my-lg-4'>
        <div className="row">
          <div className='col-lg-6 '>
            <div className='image-container'>
              <img src={CoverImage} className='img-fluid rounded-5' alt='' />
            </div>
          </div>
          <div className='col-md-5 my-4'>
            <h4 className='my-3'>Login Account</h4>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                  Role
                </label>
                <input
                  type='text'
                  placeholder='role'
                  name='role'
                  className='form-control'
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                  aria-describedby='emailHelp'
                />
                <div id='emailHelp' className='form-text'>
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className='mb-3'>
                <label htmlFor='password' className='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  placeholder='password'
                  className='form-control'
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
              </div>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>

              <span className='mx-4'>
              Register here
                <Link to="/register">Register</Link>
              </span>
              
            </form>
          </div>
        </div>


      </div>
    </div>
      </div>
    </>
  );
}

