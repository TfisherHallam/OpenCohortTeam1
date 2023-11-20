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
                        <button className="loginicon"><MdOutlinePeopleAlt className='headericon' size={40} /></button>
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
            <div className="textflex-container">
                <h1 className="homeheader">Welcome to TicketScalper</h1>
                <p className='homecontentbox'>

                    TicketScalper is a platform where you can easily bid on and sell tickets in Sheffield.
                    <br />
                    <br />
                    We understand that plans can change or you want to see that concert of your favourite artist,
                    so instead of paying through the nose on Facebook Marketplace or on eBay, give us a go!     </p>
            </div>
        </div>

    )
}

export default HomeContent;