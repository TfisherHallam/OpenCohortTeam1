import React from 'react';
import './header.css';
import logo from "../../images/logo.png";

function HeaderTitle(){
  return (
      <div className={"headerTitle"}>
      <h1>TicketScalper</h1>
      </div>
  )
}
function Logo(){
  return(
      <div>
        <img src={logo} alt="Ticket Scalper Logo" className={"headerLogo"}/>
      </div>
  )
}

function Header() {
    return (
        <div className={"appHeader"}>
            <HeaderTitle />
            <Logo />
        </div>
    )
}

export default Header;
