import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import CoverImage from "../../pages/wp2579124.jpg";
import Context from "../../index"
export default function AddDivisions() {
    window.document.body.style.backgroundColor = "rgba(0, 0,100, 0.5)";

    const data = useContext(Context);
    let account = data[localStorage.getItem("ROLENAME")];
    const navigate = useNavigate();
    const [values, setValues] = useState({
        role: "",
        email: "",
        password: "",

    });
    const generateError = (err) => toast.error(err, {
        position: "bottom-right"
    })

    const registerfinal = async () => {

    }

    const handleSubmitc = async (e) => {
        e.preventDefault();
        const res = values.role;
        const inputString1 = res;
        const regex1 = /^DIVISION(?!0$)\d+$/
        const flag1 = regex1.test(inputString1);
        const inputString2 = res;
        const regex2 = /^D(?!0$)\d+ADST(?!0$)\d+$/
        const flag2 = regex2.test(inputString2);
        const flag3 = res.match(/D(\d+)ADST(\d+)/);
        var emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        const email = values.email;
        const password = values.password;
        if (emailpattern.test(email) && passwordpattern.test(password)) {
            if ((flag1 || flag2) && res !== "D0ADST1") {
                let integer = 0;
                let flag1 = 0;
                for (let i = 1; i < values.role.length; i++) {
                    if (values.role[i] === '0') {
                        integer = integer * 10 + 0;
                        flag1 = 1;
                    }
                    else {
                        if (parseInt(values.role[i])) {
                            flag1 = 1;
                            integer = integer * 10 + parseInt(values.role[i]);
                        }
                        else {
                            break;
                        }
                    }
                }
                const result = Number(await window.contract.methods.getlen().call());
                console.log(flag1, result);

                if (flag1 === 1) {
                    if (integer === 0 || integer > result) {
                        generateError("Division is not exists!");
                    }
                    else {
                        const adstlength = await window.contract.methods.getlenadst(parseInt(flag3[1]) - 1).call();
                        let check1 = 0;
                        const entered = parseInt(flag3[2]);
                        console.log(entered, adstlength);
                        if (entered === Number(adstlength) + 1) {
                            try {
                                const { data } = await axios.post("http://localhost:4000/register1", { ...values, }, { withCredentials: true });
                                if (data.created === false) {
                                    generateError("Already Registered !");
                                }
                                else {
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
                                            try {
                                                const hash = await window.contract.methods.addunits(values.role, integer - 1).send({ from:account })
                                                const currentTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
                                                const details = { user: localStorage.getItem("ROLENAME"), TransactionHash: hash.transactionHash, from: hash.from, to: hash.to, time: currentTime, gasUsed: Number(hash.gasUsed) };
                                                const response = await axios.post("http://localhost:4000/postTransaction", { details }, { withCredentials: true });
                                                window.location.reload();
                                                console.log("registered successfully");

                                                generateError("registered");
                                            }
                                            catch (err) {
                                                const deleterole = await axios.delete("http://localhost:4000/deleteRole", { data: { ...values }, withCredentials: true });

                                                generateError("Transaction is Rejected");

                                            }
                                        }
                                    }
                                }

                            }
                            catch (err) {
                                console.log(err);
                            }
                        }
                        else {
                            generateError("Entered adst is too long!");
                        }

                    }
                }
                else {
                    const result = Number(await window.contract.methods.getlen().call());
                    let check = 0;
                    for (let i = 8; i < values.role.length; i++) {

                        if (values.role[i] === '0') {
                            check = check * 10 + 0;
                        }
                        else {
                            check = check * 10 + parseInt(values.role[i]);
                        }
                    }
                    console.log(check, result);


                    if (check === result + 1) {
                        try {
                            const { data } = await axios.post("http://localhost:4000/register1", { ...values, }, { withCredentials: true });
                            if (data.created === false) {
                                generateError("Already registered");

                            }
                            else {
                                if (data) {
                                    if (data.errors) {
                                        console.log(data);
                                        const { email, password } = data.errors;
                                        if (email) {
                                            generateError(email);
                                        }
                                        else if (password) {
                                            generateError(password);
                                        }
                                    }
                                    else {
                                        try {
                                            const hash = await window.contract.methods.adddivisions(values.role).send({ from: account })
                                            const currentTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
                                            const details = { user: localStorage.getItem("ROLENAME"), TransactionHash: hash.transactionHash, from: hash.from, to: hash.to, time: currentTime, gasUsed: Number(hash.gasUsed) };
                                            const response = await axios.post("http://localhost:4000/postTransaction", { details }, { withCredentials: true });
                                            console.log(hash);
                                            window.location.reload();
                                        }
                                        catch (err) {
                                            const deleterole = await axios.delete("http://localhost:4000/deleteRole", { data: { ...values }, withCredentials: true });

                                            generateError("Transaction is rejcted");

                                        }
                                    }
                                }
                            }
                        }
                        catch (err) {
                            console.log(err);
                        }


                    }
                    else {
                        if (check <= result) {
                            generateError("Already registered with division!");
                        }
                        else {
                            generateError("You cannot add reduce the number!");
                        }
                    }
                }
            }
            else {
                generateError("Already registered");
            }


        }
        else {
            generateError("Enter the credentials correctly!");
        }


    }
    return (
        <>
            

            <div className='container d-flex justrify-content-center login-cont'>
                <div className="border rounded-5  bg-white shadow box-area my-4">
                    <div className="row">
                        <div className='col-md-6   '>
                            <div className='featured-image '>
                                <img src={CoverImage} className="img-fluid rounded-5"  alt="" />
                            </div>
                        </div>
                        <div className='col-md-5 my-4 '>
                            <h4 className='my-3'>Register Account</h4>
                            <form onSubmit={(e) => handleSubmitc(e)}>
                                <div className="mb-3">
                                    <label htmlFor="role" className="form-label">Role</label>
                                    <input type="text" placeholder='role' id="role" name="role" className="form-control" onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} aria-describedby="emailHelp" />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="text" placeholder='email' id="email" name="email" className="form-control" onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password1" className="form-label">Password</label>
                                    <input type="password" name='password' id="password1" placeholder='password' className="form-control" onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <span>

                                </span>
                                <ToastContainer />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
