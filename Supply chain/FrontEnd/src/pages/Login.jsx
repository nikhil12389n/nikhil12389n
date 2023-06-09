import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios";
import { useEffect } from 'react';
export default function Login() {
    
    // window.document.body.style.backgroundImage = `url(${backgroundImage})`;
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        password: "",

    });
    const generateError = (err) => toast.error(err, {
        position: "bottom-right"
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:4000/login",
                {
                    ...values,
                }, {
                withCredentials: true
            }
            );
            if (data) {
                if (data.errors) {
                    const { email, password } = data.errors;
                    if (email) {
                        generateError(email);
                    }
                    else if (password) {
                        generateError(password);

                    }
                }
                else {
                    localStorage.setItem("ROLENAME",values.password);
                    navigate(`/${values.password}/Dashboard`);
                }
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='container col-5 '>
            <div>
                <h2>Login Account</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div class="mb-3">
                        <label htmlfor="email" class="form-label">Email address</label>
                        <input type="email" placeholder='email' name="email" class="form-control" onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label htmlfor="password" class="form-label">Password</label>
                        <input type="password" name='password' placeholder='password' class="form-control" onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <span>
                        Already have an account?<Link to='/register'>Register</Link>
                    </span>
                    <ToastContainer/>
                </form>
            </div>
        </div>
    )
}