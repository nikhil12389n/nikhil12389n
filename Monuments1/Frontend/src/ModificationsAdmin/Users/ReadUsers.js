import React, { useEffect, useState } from 'react'
import axios from "axios";
export default function ReadUsers() {
    const [res,Setres]=useState([]);
    useEffect(()=>{
        const fetchdata=async()=>{
            const data=await axios.get("http://localhost:4000/ReadUsers");
            console.log(data.data.data);
            Setres(data.data.data);

        }
        fetchdata();
    })
  return (
    <>
    

    </>
  )
}
