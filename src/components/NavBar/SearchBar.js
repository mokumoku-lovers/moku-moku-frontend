import React from "react";
import "./SearchBar.css";
import icon from "../../icon.svg"

function SearchBar({click}) {
  return (
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <div className="input-control">
          <input type="text" className="searchbar" />
          <i className="fas fa-search search-icon"></i>
        </div>
        <img src={icon} alt="Icon" />
      </ul>
  );
}

export default SearchBar;