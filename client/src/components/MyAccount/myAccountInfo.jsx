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
    
    return (<div>

<button class = "button1" onClick={setInfoToggle}><FaUser/><br/>
    Account Information</button>

{infoToggle && (
    <ul>
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
)}

</div>
    );
}

export default MyAccountInfoContent;
