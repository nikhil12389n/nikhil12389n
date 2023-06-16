import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Navbar() {
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const navigate = useNavigate();

  useEffect(() => {
    
    if (localStorage.getItem("ROLENAME")) {
      document.getElementById("login").innerHTML = "Logout";
    } else {
      document.getElementById("login").innerHTML = "Login";
    }
  }, []);

  const logout = async () => {
    if (localStorage.getItem("ROLENAME")) {
      navigate("/");
      await axios.post("http://localhost:4000/logout")
      removeCookie("jwt"); // Remove the "jwt" cookie
      localStorage.removeItem("ROLENAME");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg  btn btn-secondary ">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav w-100 justify-content-between">
                <li className="nav-item">
                  <a href="/">
                    <button className="btn btn-dark">Home</button>
                  </a>
                </li>
                <li className="nav-item">
                  <h2 id="adstname">{localStorage.getItem("ROLENAME")}</h2>
                </li>
                <li className="nav item">
                  <button
                    id="login"
                    className="btn btn-primary"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
