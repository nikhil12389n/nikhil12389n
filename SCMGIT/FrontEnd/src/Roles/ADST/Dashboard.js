import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./dashboard.css"
import backgroundImage from "./127-1920x1080-f8963ce54dd7fef3c697c37fc10b540f.jpg";
function Dashboard() {
  window.document.body.style.backgroundColor = "rgb(244, 245, 234)";
  
  return (
    <>
      <div className='dashboard-cont' >
      
    </div>
    <Outlet/>
    </>
  );
}

export default Dashboard;

