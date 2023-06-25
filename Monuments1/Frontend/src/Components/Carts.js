import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./carts.css";
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { Link } from 'react-router-dom';
export default function Carts() {
    const [name, setName] = useState("");
    const [desc, setdesc] = useState("");
    const [res, Setres] = useState([]);
    useEffect(() => {
        const fetchdata = async () => {
            const { data } = await axios.get("http://localhost:4000/Carts", { params: { email: localStorage.getItem("Email") } });
            
            
            if(data){
                if (data.err) {
                    window.alert("check code there is a arror!");
                }
                else{
                    console.log(data.cart);
                    Setres(data.cart);
                }
            }
            else{
                window.alert("you are not loggined!");
            }
            
                
                
            
            
        }
        fetchdata();
    }, []);
    const setdata = async (ele) => {
        setdesc(ele.desc);
        setName(ele.monumentname);
    }
    const removecart=async(i)=>{
        try{
            let flag= window.confirm("remove from cart?");
            
            if(flag){
                 const data=await axios.delete("http://localhost:4000/DeleteCart",{data:{email:localStorage.getItem("Email"),index:i}});
                 if(data.data.removed===false){
                    window.alert("not removed!");
                 }
                 window.location.reload();
            }
            
           
           
           
            
        }
        catch(err){
            window.alert("error in code!");
        }
        
    }
    return (
        <>
            <div >
                {
                    res.length > 0 &&
                    res.map((ele, i) => {
                        return (
                            <div class="container card my-3">
                                <div class="card-header">
                                    {ele.monumentname}
                                </div>
                                <div class="card-body" style={{ display: "flex" }} >
                                    <div>
                                        <img src={ele.imagelink} className="pics" alt="" />
                                    </div>
                                    <div className='m-auto' >
                                        <LocationOnIcon></LocationOnIcon>  <b>{ele.location}</b><br />
                                        <p><StarIcon style={{ color: "yellow", padding: "0px" }}></StarIcon> {ele.rating}</p>
                                        <ConfirmationNumberIcon></ConfirmationNumberIcon>Indian- <b>{ele.cost.split(",")[0]}</b><br />
                                        <ConfirmationNumberIcon></ConfirmationNumberIcon>Foreign <b>{ele.cost.split(",")[1]}</b><br />
                                        <AccessTimeIcon></AccessTimeIcon>Morning   <b>{ele.slots.split(",")[0]}</b><br />
                                        <AccessTimeIcon></AccessTimeIcon>Evening   <b>{ele.slots.split(",")[1]}</b><br />
                                    </div>


                                </div>
                                <div className='card-body'>
                                    <button type='button' className='btn btn-primary mx-3' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setdata(ele)} >View description</button>
                                    <Link to={"/cart/" + localStorage.getItem("Email") +"/" + ele._id}><button className='btn btn-success mx-4' style={{ float: "right" }} >Book now</button></Link>
                                    <button className='btn btn-danger mx-4' style={{ float: "right" }} onClick={()=>removecart(i)}>Remove</button>
                                </div>

                            </div>
                        );
                    })
                }

            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" >
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">{name}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {desc}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};