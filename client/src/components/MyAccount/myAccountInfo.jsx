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

		<div className="mainDiv">

			<button className="button1" onClick={setInfoToggle}><FaUser className="icon" size={50} /><br />
				<div className="accountPageButtonText">Account Information</div></button>

			{infoToggle && (
				<div className="myAccountSubItem">
					<ul className="myAccountListItems">
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

					<button name="Make changes" className="button1"><div className="accountPageButtonText">Make Changes</div></button>
					<button className="button1"><div className="accountPageButtonText">Delete my account</div></button>
				</div>
			)}



		</div>
	);
}

export default MyAccountInfoContent;
