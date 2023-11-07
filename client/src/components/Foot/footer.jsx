import React from 'react';
import './footer.css';
import logo from "../../images/TransparentLogo.png";

function Footer() {
    return (
        <div className={"appfooter"}>            
            <p className='footerText'>
            <img src={logo} alt="Ticket Scalper Logo" className={"footerLogo"}/>
            TicketScalper Build 1.1
            </p>
        </div>
    )
}

export default Footer;