import React from 'react';
import './header.css';
import logo from "../../images/TransparentLogo.png";
import BurgerMenu from "../burgerNavigation/burgerMenu.js";

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
<<<<<<< HEAD

=======
            <BurgerMenu/>
>>>>>>> 84808830047452fe216e49b390fab916dfa7064c
        </div>
    )
}

export default Header;
