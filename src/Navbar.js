
import { Link } from "react-router-dom";
import React, { useState } from "react";
import './App.css';

function Navbar() {
    const [menuVisible, setMenuVisible] = useState(false);
  
    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    }

  
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/">Gallery</Link>
          <Link to="/AboutMe">About me</Link>
        </div>
        <div className="navbar-title">
          <h1>Samanta Veinberga</h1>
        </div>
        <div className="navbar-menu">
        <div className="menu-icon" onClick={toggleMenu}>&#9776;</div>
        <div className={`menu-links ${menuVisible ? 'visible' : ''}`}>
          <Link to="/">Gallery</Link>
          <Link to="/AboutMe">About me</Link>
        </div>
        </div>
      </nav>
    );
  }


export default Navbar;


/*
import { Link } from "react-router-dom";
import React from "react";

import './App.css';



const Navbar = () => {
  return (

<html>
<body>
    <div class="navbar">
        <div class="navbar-left">
            <Link to="/">Gallery</Link>
            <Link to="/AboutMe">About me</Link>
        </div>
        <div class="navbar-title">
            <h1 >Samanta Veinberga</h1>
        </div>

        <div class="navbar-menu">
            <div class="menu-icon">&#9776;</div>
            <div class="menu-links">
                <Link to="/">Gallery</Link>
                <Link to="/AboutMe">About me</Link>
            </div>
        </div>

    </div>

    <script src="script.js"> </script>
    </body>
    </html>
  );
}
 
export default Navbar;
*/