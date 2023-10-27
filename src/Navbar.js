import { Link } from "react-router-dom";
import React from "react";

import './App.css';



const Navbar = () => {
  return (

    /*
    <nav className="navbar">
      
      <div >
        <Link to="/">Gallery</Link>
      </div>
      <div >
        <Link to="/AboutMe">About me</Link>
      </div>
      
        <h1 >Samanta Veinberga</h1>
      
    </nav>
    */

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