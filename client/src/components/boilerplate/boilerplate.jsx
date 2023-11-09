import React from 'react';
import './boilerplate.css';

function Boilerplate() {
    return (

            <div class="flex-container">
                <div class="aboutFlex">
                    <div><b>About TicketScalper</b></div>
                    <div><a href={"/Termsofuse"}>Terms of Use</a></div>
                    <div><a href={"/Privacy"}>Privacy</a></div>
                </div>
                <div class="aboutFlex">
                    <div><b>Support</b></div>
                    <div><a href={"/Helpcentre"}>Help Centre</a></div>
                </div>
            </div>

    )
}

export default Boilerplate;