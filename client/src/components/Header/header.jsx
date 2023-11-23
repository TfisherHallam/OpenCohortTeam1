import React from 'react';
import './header.css';
import logo from "../../images/TransparentLogo.png";
import BurgerNew from "../burgerNavigation/hamBurgerMenu.jsx";
import { Link, useLocation } from 'react-router-dom';
import { MdOutlinePeopleAlt } from "react-icons/md";
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector.js';


function Logo() {
  return (<div>
    <a href={"/"}><img src={logo} alt="Ticket Scalper Logo"
      className={"headerLogo"} /></a>
  </div>)
}

function Header() {
const {currentUser} = useSelector(state => state.user)



  const location = useLocation();
  if (location.pathname === '/') {
    return (
      <div className='textcontainer'>
        <div className={"homepageHeader"}>
          <BurgerNew className="burger" />
          <div className="headerFlex">
            <Logo />
            <div className="headerButtongroup">
              <Link to={"/Buying"}>
                <button className="headerButtons">Buy</button>
              </Link>
              <Link to={"/Sell"}>
                <button className="headerButtons">Sell</button>
              </Link>
              <Link to={"/Helpcentre"}>
                <button className="headerButtons">Help</button>
              </Link>
            </div>
            <Link to={"/login"}>
              <button className="loginButtons">Log in</button>
            </Link>
            <Link to={"/Account"}>
              <button className="loginButtons">My Account</button>
            </Link>
            <Link to={"/login"}>
              <button className="loginicon"><MdOutlinePeopleAlt
                className='headericon' size={40} /></button>
            </Link>
          </div>
          <div>
            <p className="homePageTitle">TicketScalper</p>
            <br />
            <br />
            <p className="headerSubline">Your next night in Sheffield awaits</p>
            <br />
            <br />
            <Link to={"/Buying"}>
              <button className="ticketsButton">Go to tickets</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={"appHeader"}>
      <BurgerNew className={"burger"} />
      <div className="headerFlex">
        <Logo />
        <div className="headerButtongroup">
          <Link to={"/Buying"}>
            <button className="headerButtons">Buy</button>
          </Link>
          <Link to={"/Sell"}>
            <button className="headerButtons">Sell</button>
          </Link>
          <Link to={"/Helpcentre"}>
            <button className="headerButtons">Help</button>
          </Link>
        </div>
        <Link to={"/login"}>
          {currentUser ? (
            <img className='headerAvatar' src={currentUser.avatar} alt="profile-pic" />
          ) : (<button className="loginButtons">Log in</button>
          )}
        </Link>
        <Link to={"/Account"}>
          <button className="loginButtons">My Account</button>
        </Link>
        <Link to={"/login"}>
          <button className="loginicon"><MdOutlinePeopleAlt
            className='headericon' size={40} /></button>
        </Link>
      </div>
    </div>
  )
}

export default Header;