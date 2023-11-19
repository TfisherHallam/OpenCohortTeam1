import React from 'react';
import './selling.css';
import '../../App.css';
import { FaTicketAlt, FaPoundSign, FaHourglassHalf } from 'react-icons/fa';
import { LuHardDriveUpload } from "react-icons/lu"

function Selling() {
    return (
        <div class='textcontainer'>
            <div class="textflex-container">
                
                <div className='sellingparagraph'>
                <h1>Sell your tickets with ease</h1>
                <br/>
                    We know that plans can change, however you should not have to pay for hidden admin charges for your change of plans. Using TicketScalper, you can sell your tickets at a fair price and retain the full value!
                    <br />
                    <br />
                    It is as easy as the below steps: 
                    <br />
                    <br />                    
                    <h2>Select which tickets you want to sell</h2>
                    <br />  
                    <FaTicketAlt class='icon' size={50}/>
                    <br />
                    <br />
                    Select the tickets you want to sell and ensure you have the full details to hand
                    <br />
                    <br />
                    <h2>Upload the tickets onto TicketScalper using our easy to use site</h2>
                    <br />  
                    <LuHardDriveUpload class='icon' size={50}/>
                    <br />
                    <br />
                    Upload the tickets and provide the details to help buyers decide if they want to make it to your event
                    <br />
                    <br />
                    <h2>Set your reserve price and wait for the final countdown</h2>
                    <br />  
                    <FaHourglassHalf class='icon' size={50}/>
                    <br />
                    <br />
                    In the listing, ensure you set the reserve price and then wait until the auction ends
                    <br />
                    <br />
                    <h2>Message your buyer and arrange an exchange</h2>
                    <br />  
                    <FaPoundSign class='icon' size={50}/>
                    <br />
                    <br />
                    Once the auction ends, a message chain will start between you and the highest bidder - from then on its just a question of you meeting up to exchange the tickets and collect that cold hard cash
                    <br />
                    <br />
                    <h2>So... what are you waiting for?</h2>
                    <br />
                    <br />                   
                     </div>
            </div>
        </div>

    )
}

export default Selling;