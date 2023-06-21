import React, { useEffect, useState } from 'react'
import axios from "axios";
export default function Addmonuments() {
    const [values,Setvalues]=useState({
        "monumentname":"",
        "desc":"",
        "rating":"",
        "location":"",
        "imagelink":""
    })
    useEffect(()=>{

    },[]);
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
          const {data}=axios.post("http://localhost:4000/AddMonuments",
          {
            ...values,

          },{
            withCredentials:true
          });
          if(data){
            if(data.errors){
              alert("Check errors in posting");
            }
            else{
              alert("Data created successfully in mongodb");
            }
          }
          alert("data is created to mongo!");
        }
        catch(err){
          console.log("Form submission error",err);
        }
    }
  return (
    <>
    <div className='container'>
    <form onSubmit={(e)=>handleSubmit(e)}>
  <div className="mb-3">
    <label htmlFor="monumentname" className="form-label">Monumentname</label>
    <input type="text" className="form-control" id="monumentname" name="monumentname" onChange={(e)=>Setvalues({...values,[e.target.name]:e.target.value})} />
    
  </div>
  <div>
  Add Description
  <textarea className="form-control" id="mybox" rows="7" name="desc"  onChange={(e)=>Setvalues({...values,[e.target.name]:e.target.value})}></textarea>
  </div>
  <div className="mb-3">
    <label htmlFor="rating" className="form-label">Rating</label>
    <input type="number" className="form-control" id="rating"  name="rating" onChange={(e)=>Setvalues({...values,[e.target.name]:e.target.value})}/>
  </div>
  <div className="mb-3">
    <label htmlFor="location" className="form-label">Location</label>
    <input type="text" className="form-control" id="location" name="location" onChange={(e)=>Setvalues({...values,[e.target.name]:e.target.value})}/>
  </div>
  <div className="mb-3">
    <label htmlFor="image" className="form-label">Image link</label>
    <input type="text" className="form-control" id="image" name="imagelink" onChange={(e)=>Setvalues({...values,[e.target.name]:e.target.value})}/>
  </div>
  
  <div>
  <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>  
    </div>
    </>
  );
};
