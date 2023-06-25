import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { typography } from '@mui/system';
export default function Home() {
  const [monument,setMonument]=useState(null);
  const [card,setCard]=useState([]);
  const css = require("./cards.css");
  useEffect(()=>{

  },[]);
 
  const [res, Setres] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchdata = async () => {
      const { data } = await axios.get("http://localhost:4000/AllMonuments");
      Setres(data);
    }
    fetchdata();
  }, []);
  useEffect(()=>{
    
    
    if(card.length!==0){
      card["Email"]=localStorage.getItem("Email");
      const add=async()=>{
        try{
          const carts=await axios.post("http://localhost:4000/Addtocart",{
          ...card},{
            withCredentials:true
          }
          
        );
        window.alert("Added to cart!");
        }
        catch(err){
          window.alert("error in add to cart!");
        }

      }
      add();
    }
    
  },[card]);
  
  const moredetails = async (ele) => {
    navigate(`/monument/${ele._id}`);
  }
  const setmonument=async(ele)=>{
    setMonument(ele);
  }
 

  const addtocart=async(ele)=>{
    if(localStorage.getItem("Name")){
      setCard(ele);
      
      
      
    
    }
    else{
      window.alert("login in for add to cart!");
    }
    
  }
  const booknow=async(row)=>{
    if(row && row._id){
      navigate("/"+localStorage.getItem("Email")+"/"+row._id);
    }
  }
  

  return (
    <>
      <div className='container ' >
        {res.length > 0 &&
          res.map((ele, i) => {
            return (
              <div >
                <div className="card my-3 boxes" key={i}>
                  <img src={ele.imagelink} className="card-img-top pics1" alt="..." />
                  <div className="card-body names">
                    <p className="card-text"> {ele.monumentname}</p>
                    <p className="card-text">{ele.location}</p>
                  </div>
                  <p className="card-text"><StarIcon style={{ color: "yellow" }}></StarIcon> {ele.rating}</p>

                  <div className="card-body flex">
                    <button className='btn btn-primary add-to-cart' onClick={()=>addtocart(ele)}>
                      Add to cart 
                    </button>
                    <button className='btn btn-primary view-details' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>setmonument(ele)}>
                      View more details
                    </button>
                  </div>
                  <div>
                  </div>
                </div>
              </div>

            )
          })
        }
      </div>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div className="modal-dialog" style={{maxWidth:"900px"}}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{monument && monument.monumentname}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className='modal-body'>
             <img src={monument && monument.imagelink} style={{"height":"6cm",width:"400px"}}  alt=""/> 

            </div>
            <div className="modal-body">
            {monument && monument.desc}
            </div>
            <div className='modal-body'>
              <LocationOnIcon></LocationOnIcon> {monument && monument.location}
            </div>
            <div className='modal-body'>
            <AccessTimeIcon></AccessTimeIcon>  Morning-{monument && monument.slots.split(",")[0]}
             
            </div>
            <div className='modal-body'>
            <AccessTimeIcon></AccessTimeIcon> Evening- {monument && monument.slots.split(",")[0]}
            </div>
            <div className='modal-body'>
              <ConfirmationNumberIcon></ConfirmationNumberIcon> India- {monument && monument.cost.split(",")[0]}
            </div>
            <div className='modal-body'>
            <ConfirmationNumberIcon></ConfirmationNumberIcon> Foreign- {monument && monument.cost.split(",")[1]}
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={()=>booknow(monument)}>Book now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );


}
