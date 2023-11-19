import React, { useEffect, useState, useCallback } from 'react';
import { FaUser } from "react-icons/fa";
import './myAccount.css';
import '../../App.css';

const MyAccountInfoContent = () => { 
    const useInfoToggle = (initiaInfolState = false) => {
      const [infoState, setInfoState] = useState(initiaInfolState);
      const infoToggle = useCallback(() => setInfoState((state) => !state), []);
      return [infoState, infoToggle]
    };
        const [infoToggle, setInfoToggle] = useInfoToggle()
    
    return (
	
	<div class="mainDiv">

<button class = "button1" onClick={setInfoToggle}><FaUser class="icon" size={50}/><br/>
<div class="accountPageButtonText">Account Information</div></button>

{infoToggle && (
    <div class="myAccountSubItem">
    <ul class="myAccountListItems">
        <li><label>First Name<input
						type="text"
						placeholder="First Name"
						id="firstname"
						onChange={""}
						required
						className="input"
					/></label></li>
        <li>Last Name<input
						type="text"
						placeholder="First Name"
						id="firstname"
						onChange={""}
						required
						className="input"
					/></li>
        <li>Email address<input
						type="text"
						placeholder="First Name"
						id="firstname"
						onChange={""}
						required
						className="input"
					/></li>
        <li>Mobile<input
						type="text"
						placeholder="First Name"
						id="firstname"
						onChange={""}
						required
						className="input"
					/></li>
    </ul>

    <button name="Make changes" class="button1"><div class="accountPageButtonText">Make Changes</div></button>
    <button class="button1"><div class="accountPageButtonText">Delete my account</div></button>
    </div>
)}



</div>
    );
}

export default MyAccountInfoContent;
