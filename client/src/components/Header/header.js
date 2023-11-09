import React from 'react';
import './header.css';
import logo from "../../images/TransparentLogo.png";
import BurgerMenu from "../burgerNavigation/burgerMenu";

function Logo() {
    return (
        <div>
            <a href={"/"}><img src={logo} alt="Ticket Scalper Logo" className={"headerLogo"} /></a>
        </div>
    )
}

function Header() {
    return (
        <div className={"appHeader"}>
            <Logo />
            <BurgerMenu />

        </div>
    )
}

export default Header;
