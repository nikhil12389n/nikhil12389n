import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import CoverImage from "./wp2579124.jpg";
import Context from ".././index.js"
export default function Register() {
    const data = useContext(Context);
    let account = "0x6dd0BfDCa54774F1f7fd4131F6312eFB8Ffc8de5";
    const navigate = useNavigate();
    const [values, setValues] = useState({
        role: "",
        email: "",
        password: "",

    });
    const generateError = (err) => toast.error(err, {
        position: "bottom-right"
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        var emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        const email = values.email;
        const password = values.password;
        if (emailpattern.test(email) && passwordpattern.test(password)) {
            if (values.role === "DGST" || values.role === "MANUFACTURER") {
                try {
                    const { data } = await axios.post("http://localhost:4000/register", { ...values }, { withCredentials: true });
                    console.log(data);
                    if (data.created === false) {
                        generateError("Already Registered");
                    }
                    else 
                    {
                        console.log("Registered");
                        generateError("Registered Successfully!");
                        navigate('/login');
                    }
                }
                catch (err) {
                    console.log(err);
                }
            }
            else {
                generateError("Cant be Registered here!");
            }


        }
        else {
            generateError("Enter Credentials Correctly!");
        }

    }

    return (
        <div className='container d-flex justrify-content-center login-cont' >
            <div className="border rounded-5  bg-white shadow box-area my-4">
                <div className="row">
                    <div className='col-md-6   '>
                        <div className='featured-image '>
                            <img src={CoverImage} className="img-fluid rounded-5" alt="" />
                        </div>
                    </div>
                    <div className='col-md-5 my-4 '>
                        <h4 className='my-3'>Register Account</h4>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="mb-3">
                                <label htmlFor="role" className="form-label">Role</label>
                                <input type="text" placeholder='role' id="role" name="role" className="form-control" onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" placeholder='email' id="email" name="email" className="form-control" onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" name='password' placeholder='password' className="form-control" onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <span>
                                Already have an account?<Link to='/login'>Login</Link>
                            </span>
                            <ToastContainer />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}