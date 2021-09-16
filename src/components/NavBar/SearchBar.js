import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SearchBar.css";
import logo from "../../logo.svg"
import icon from "../../icon.svg"

function SearchBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={logo} alt="MokuMoku" />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <div className="input-control">
              <input type="text" className="searchbar" />
              <i className="fas fa-search search-icon"></i>
            </div>
            <img src={icon} alt="Icon" />
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default SearchBar;