import React from 'react';
import { Link } from 'react-router-dom';
import './boilerplate.css';
import Footer from '../Foot/footer';

function Boilerplate() {
    return (
<>
        <div class="flex-container">
            <div class="aboutFlex">
                <div><b>About TicketScalper</b></div>
                <div><Link to={"/Termsofuse"}>Terms of Use</Link></div>
                <div><Link to={"/Privacy"}>Privacy</Link></div>
            </div>
            <div class="aboutFlex">
                <div><b>Support</b></div>
                <div><Link to={"/Helpcentre"}>Help Centre</Link></div>
            </div>
            
        </div>
<Footer/></>
    )
}

export default Boilerplate;