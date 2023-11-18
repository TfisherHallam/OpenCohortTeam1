import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./listing.css";
import datetime from "./datetime.jsx"

export default function Listing() {
	const [formData, setFormData] = useState({})
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await fetch('/api/auth/', {
			method: 'POST',
			headers:{
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		});
		const data = await res.json();
		console.log(data);
	}
    return (
		<div className="">
			<div className="">
				<div className="flex-container">
					<form className="flex" onSubmit={handleSubmit}></form>
                    <div>Event Date</div>
                    <div>
                        <input
								type= "button"
								placeholder="Event Date"
								name="Event Date"
								onChange={handleChange}
								required= "true"
								className="input"
							/></div>



                    <button type="submit" className={styles.green_btn}>
							Submit Listing
						</button>
                        <button type="clear" className={styles.red_btn}>
							Clear Listing
						</button>
				</div> 
			</div>
		</div>
	);
};
