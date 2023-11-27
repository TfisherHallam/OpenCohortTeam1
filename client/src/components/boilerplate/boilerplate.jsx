import React from 'react';
import { Link } from 'react-router-dom';
import './boilerplate.css';
import logo from "../../images/TransparentLogo.png";

function Footer() {
    return (
        <div className={"appfooter"}>
            <p className='footerText'>
                <img src={logo} alt="Ticket Scalper Logo" className={"footerLogo"} />
                TicketScalper Build 1.1
            </p>
        </div>
    )
}


function Boilerplate() {
    return (
        <div className='footerGroup'>
            <div className="boilerplateflex-container">
                <div className="aboutFlex">
                    <div><b>About TicketScalper</b></div>
                    <span><Link to={"/Termsofuse"}>Terms of Use</Link></span>
                    <div><Link to={"/Privacy"}>Privacy</Link></div>
                </div>
                <div className="aboutFlex">
                    <div><b>Support</b></div>
                    <div><Link to={"/Helpcentre"}>Help Centre</Link></div>
                </div>
            </div>
            <Footer /></div>
    )
}

export default Boilerplate;