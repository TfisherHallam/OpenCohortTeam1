import React, { useEffect } from 'react';
import './header.css';
import logo from "../../images/TransparentLogo.png";
import BurgerNew from "../burgerNavigation/hamBurgerMenu.jsx";
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector.js';


function Logo() {
  return (<div>
    <a href={"/"}><img src={logo} alt="Ticket Scalper Logo"
      className={"headerLogo"} /></a>
  </div>)
}

function Header() {
  const { currentUser } = useSelector(state => state.user)
  const location = useLocation();

  useEffect(() => {
    // Add the "homepage" class to the body if on the homepage
    if (location.pathname === '/') {
      document.body.classList.add('homepage');
    } else {
      document.body.classList.remove('homepage');
    }
  }, [location.pathname]);
  const isCurrentPage = (path) => location.pathname === path;

  if (location.pathname === '/') {
    return (<div className='textcontainer'>
      <Logo />
      <div className={"homepageHeader"}>
        <BurgerNew className="burger" />
        <div className="headerFlex">
          <div className="headerButtongroup homeButtonGroup">
            <Link to={"/Buying"}>
              <button className="headerButtons">Buy</button>
            </Link>
            {currentUser ? (<Link to={"/Listing"}>
              <button className="headerButtons">Sell</button>
            </Link>) : (<Link to={"/Sell"}>
              <button className="headerButtons">Sell</button>
            </Link>)}
            <Link to={"/Helpcentre"}>
              <button className="headerButtons">Help</button>
            </Link>
            {currentUser && currentUser.userStateCode === "Admin" ? (
              <Link to={"/Admin"}>
                <button className="headerButtons">Admin</button>
              </Link>) : ("")}
            <Link to={"/Account"}>
              <button className={`headerButtons AccountButton ${isCurrentPage(
                '/Account') ? 'active' : ''}`}>My Account
              </button>
            </Link>
            <Link to={"/Account"}>
              {currentUser ? (
                <img className='headerAvatar' src={currentUser.avatar}
                  alt="profile-pic" />) : (
                <button className="loginButtons">Log in</button>)}
            </Link>
          </div>

        </div>
        <div>
          <p className="homePageTitle">TicketScalper</p>
          <br />
          <br />
          <p className="tagLine">Your next night in Sheffield awaits</p>
          <br />
          <p className="mobileInstruction">You are on Mobile,
            click the
            burger menu in the top left to get started</p>
          <br />
        </div>
      </div>
    </div>)
  }

  return (<div className={"appHeader"}>
    <BurgerNew className={"burger"} />
    <div className="headerFlex">
      <Logo />
      <div className="headerButtongroup">
        <Link to={"/Buying"}>
          <button
            className={`headerButtons ${isCurrentPage('/Buying') ? 'active'
              : ''}`}>Buy
          </button>
        </Link>
        {currentUser ? (<Link to={"/Listing"}>
          <button
            className={`headerButtons ${isCurrentPage('/Listing') ? 'active'
              : ''}`}>Sell
          </button>
        </Link>) : (<Link to={"/Sell"}>
          <button className="headerButtons">Sell</button>
        </Link>)}
        <Link to={"/Helpcentre"}>
          <button className={`headerButtons ${isCurrentPage('/Helpcentre')
            ? 'active' : ''}`}>Help
          </button>
        </Link>
        {currentUser && currentUser.userStateCode === "Admin" ? (
          <Link to={"/Admin"}>
            <button className="headerButtons">Admin</button>
          </Link>) : ("")}
        <Link to={"/Account"}>
          <button className={`headerButtons AccountButton ${isCurrentPage(
            '/Account') ? 'active' : ''}`}>My Account
          </button>
        </Link>
        <Link to={"/Account"}>
          {currentUser ? (<img className='headerAvatar' src={currentUser.avatar}
            alt="profile-pic" />) : (
            <button className="loginButtons">Log in</button>)}
        </Link>
      </div>

    </div>
  </div>)
}

export default Header;