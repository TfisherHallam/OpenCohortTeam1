import React from 'react';
import './header.css';
import logo from "../../images/TransparentLogo.png";
import BurgerNew from "../burgerNavigation/hamBurgerMenu.jsx";
import { Link } from 'react-router-dom';
import { MdOutlinePeopleAlt } from "react-icons/md";

function Logo() {
    return (<div>
        <a href={"/"}><img src={logo} alt="Ticket Scalper Logo"
            className={"headerLogo"} /></a>
    </div>)
}

function Header() {
    return (
        <div className={"appHeader"}>
            <BurgerNew className={"burger"} />
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
                <Link to={"/Account"}>
                    <button class="loginButtons">My Account</button>
                </Link>
                <Link to={"/login"}>
                    <button class="loginicon"><MdOutlinePeopleAlt class='headericon' size={40} /></button>
                </Link>
            </div>
        </div>
    )
}

export default Header;