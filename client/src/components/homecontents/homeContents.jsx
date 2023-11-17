import React from 'react';
import './homeContents.css';
import '../../App.css';

function HomeContent() {
    return (
        
        <div class='textcontainer'>
            <div className={"homepageHeader"}>

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