import React, { useEffect, useState, useCallback } from 'react';
import { FaUser } from "react-icons/fa";
import './myAccount.css';
import '../../App.css';
import Profile from './myAccountDetails';

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
				<Profile/>
			)}



		</div>
	);
}

export default MyAccountInfoContent;
