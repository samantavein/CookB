
import { Link } from "react-router-dom";
import React, { useState } from "react";
import './App.css';

function Navbar() {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
    const [menu_class, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    
    const updateMenu = () => {
      if(!isMenuClicked){
        setBurgerClass("burger-bar clicked");
        setMenuClass("menu visible");
        
      }
      else{
        setBurgerClass("burger-bar unclicked");
        setMenuClass("menu hidden");
        
      }
      setIsMenuClicked(!isMenuClicked)
    }

    return (
      <div>
        <nav className="navbar">
          <div className="navbar-left">
            <Link to="/">Gallery</Link>
            <Link to="/AboutMe">About me</Link>
          </div>

      
          <div className="navbar-title">
            <h1>Photogram Visuals</h1> 
          </div>

          <div className="burger-menu" onClick={updateMenu}>
            <div className = {burger_class}  ></div>
            <div className = {burger_class}  ></div>
            <div className = {burger_class}  ></div>

          </div>
          
        </nav>

        <div className={menu_class}>
          <Link to="/" onClick={updateMenu}>Gallery</Link>
          <Link to="/AboutMe" onClick={updateMenu}>About Me</Link>
        </div>
      </div>
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


/// old burger menu
/*
        <div className="navbar-menu">
        <div className="menu-icon" onClick={toggleMenu}>&#9776;</div>
        <div className={`menu-links ${menuVisible ? 'visible' : ''}`}>
          <Link to="/gallery">Gallery</Link>
          <Link to="/AboutMe">About me</Link>
        </div>
        </div>
*/ 