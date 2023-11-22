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
            <div className="textflex-container">
                <h1 className="homeheader">Welcome to TicketScalper</h1>
                <p className='homecontentbox'>

                    TicketScalper is a platform where you can easily bid on and sell tickets in Sheffield.
                    <br />
                    <br />
                    We understand that plans can change or you want to see that concert of your favourite artist,
                    so instead of paying through the nose on Facebook Marketplace or on eBay, give us a go!     </p>
            </div>
    )
}

export default HomeContent;