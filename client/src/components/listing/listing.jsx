import { useState } from "react";
import axios from "axios";
import DateTimerPicker from "react-date-picker";
import { Link, useNavigate } from "react-router-dom";
import styles from "./listing.css";

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
    const [date, setDate] = useState(new Date());
	const [mode, setMode] = useState("date");
	const [show, setShow] = useState(false);
	const [text, setText] = useState("Empty");

	const onChange = [e, selectedDate] => {
		setDate(selectedDate);
		setShow(false);
	}
	
	const showMode = (currentMode) => {
		setShow(true);
	    setMode(currentMode);
	}
        
    };
    return (
		<div className="">
			<div className="">
				<div className="flex-container">
					<form className="flex" onSubmit={handleSubmit}>
						<h1>Create your listing</h1>
						<div>Event Name</div>
						<div>
							<input
								type="text"
								placeholder="Event Name"
								name="Event Name"
								onChange={handleChange}
								required= "true"
								className="input"
							/></div>
                            	<div>Event Date</div>
						<div>
							<input
								type= "date"
								placeholder="Event Date and Time"
								name="Event Date and Time"
								onChange={handleChange}
								required= "true"
								className="input"
							/></div>
						<div>Auction End</div>
						<div>
							<input
								type="date"
								placeholder="Auction End"
								name="Auction End Date and Time"
								onChange={handleChange}
								required= "true"
								className="input"
							/>
						</div>
						<div>Event Type</div>
						<div>
							<input
								type=""
								placeholder="Browse..."
								name="Event Type"
								onChange={handleChange}
								required
								className="input"
							/></div>
						<div>Starting Bid</div>
						<div>
							<input
								type={"number"}
								placeholder="£00.00"
								name="Starting Bid"
								onChange={handleChange}
								required
								maxLength={"11"}
								className="input"
							/></div>
						<div>Add A Reserve</div>
						<div>
							<input
								type="number"
								placeholder="£00.00"
								name="Reserve"
								onChange={handleChange}
								required
								className="input"
							/></div>
						<div>Event Description</div>
						<div>
							<input
								type="text"
								placeholder="Give more information about your event..."
								name="Description"
								onChange={handleChange}
								required
								className="input"
							/></div>
                            <div>Upload Event Image</div>
						<div>
							<input
								type="button"
								placeholder="Click to upload image"
								name="Event image"
								onChange={handleChange}
								required
								className="input"
							/></div>
						<button type="submit" className={styles.green_btn}>
							Submit Listing
						</button>
                        <button type="clear" className={styles.red_btn}>
							Submit Listing
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

