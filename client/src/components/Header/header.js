import React from 'react';
import './header.css';
import logo from "../../images/TransparentLogo.png";
import BurgerMenu from "../burgerNavigation/burgerMenu";

function HeaderTitle(){
  return (
      <div className={"headerTitle"}>
      <a href={"/"}><h1>TicketScalper</h1></a>
      </div>
  )
}
function Logo(){
  return(
      <div>
      <a href={"/"}><img src={logo} alt="Ticket Scalper Logo" className={"headerLogo"}/></a>
      </div>
  )
}

function Header() {
    return (
        <div className={"appHeader"}>
            <HeaderTitle />
            <BurgerMenu />
            <Logo />
        </div>
    )
}

export default Header;
