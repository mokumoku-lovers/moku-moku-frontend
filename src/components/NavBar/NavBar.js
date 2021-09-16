import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../logo.svg"
import SearchBar from "./SearchBar";

// Mock islogin data 
// later will be replaced by data from server
let isLoggedIn = true;

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={logo} alt="MokuMoku" />
          </NavLink>

          {isLoggedIn ? <SearchBar click={click} /> :
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <button className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"              
                >
                Sign In
              </NavLink>
            </button>
            <button className="nav-item">
              <NavLink
                exact
                to="/register"
                activeClassName="active"
                className="nav-links"
              >
                Sign Up
              </NavLink>
            </button>
          </ul>}
          
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;