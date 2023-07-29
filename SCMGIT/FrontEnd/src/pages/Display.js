import React, { useContext } from 'react'
import Context from "../index.js";
export default function Display() {
    let data=useContext(Context);
    let account=data[localStorage.getItem("ROLENAME")];
  
  return (
    <div className='container'>
     Account is: {account}
    </div>
  )
}
