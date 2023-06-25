import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ password: '', email: '', name: '' });

  const generateError = (err) =>
    toast.error(err, {
      position: 'bottom-right'
    })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'http://localhost:4000/Register',
        { ...values },
        {
          withCredentials: true,
        }
      );
      console.log(data);
      if(data.error){
        if(data.error.email){
          window.alert(data.error.email);
        }
      }
      else{
        navigate('/Login');
      }
      
    } catch (err) {
      window.alert(err);
    }
  };

  return (
    <>
   
    
      <div className="container">
        <div>
          <h2>Register Account</h2>
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
              Already have an account? <Link to="/Login">Login</Link>
            </span>
          </form>
         
        </div>
      </div>
      
    </>
  );
}






