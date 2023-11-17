import React from 'react';
import './header.css';
import logo from "../../images/TransparentLogo.png";
import BurgerMenu from "../burgerNavigation/burgerMenu.js";
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

function Logo() {
    return (
        <div>
            <a href={"/"}><img src={logo} alt="Ticket Scalper Logo" class={"headerLogo"} /></a>
        </div>
    )
}

function Header() {
    return (
        <div className={"appHeader"}>

            <div class="headerFlex">
            <Logo />
            <div class="headerButtongroup">
                        <Link to={"/Buying"}>                            
                            <button class="headerButtons">Buy</button>
                            </Link>
                            <Link to={"/Sell"}>
                            <button class="headerButtons">Sell</button>
                            </Link>
                            <Link to={"/Helpcentre"}>
                            <button class="headerButtons">Help</button>
                            </Link>
                            </div>
  
                            <Link to={"/login"}>
                            <button class="loginButtons">Log in</button>
                            </Link>
                            <Link to={"/login"}>
                            <button class="loginicon"><FaUserCircle class='icon' size={70}/></button>
                            </Link>

                        </div>


  
        </div>
    )
}

export default Header;
