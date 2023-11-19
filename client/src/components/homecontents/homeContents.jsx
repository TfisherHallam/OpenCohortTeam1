import React from 'react';
import './homeContents.css';
import '../../App.css';
import { Link } from 'react-router-dom';
import './homeContents.css';
import BurgerNew from "../burgerNavigation/hamBurgerMenu.jsx";
import logo from "../../images/TransparentLogo.png";
import { MdOutlinePeopleAlt } from "react-icons/md";

function Logo() {
    return (<div>
        <a href={"/"}><img src={logo} alt="Ticket Scalper Logo"
            className={"headerLogo"} /></a>
    </div>)
}

function HomeContent() {
    return (
        
        <div class='textcontainer'>
            <div className={"homepageHeader"}>
            <BurgerNew class="burger" />
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
<div>
    <p class="homePageTitle">TicketScalper</p>
    <br/>
    <br/>
    <p class="headerSubline">Your next night in Sheffield awaits</p>
    <br/>
    <br/>
    <Link to={"/Buying"}>                            
                            <button class="ticketsButton">Go to tickets</button>
                            </Link>
</div>
            </div>
            <div class="textflex-container">
                <h1 class="homeheader">Welcome to TicketScalper</h1>
                <p class='homecontentbox'>
                
TicketScalper is a platform where you can easily bid on and sell tickets in Sheffield.
<br/>
<br/>
We understand that plans can change or you want to see that concert of your favourite artist, 
so instead of paying through the nose on Facebook Marketplace or on eBay, give us a go!     </p>
            </div>
        </div>

    )
}

export default HomeContent;