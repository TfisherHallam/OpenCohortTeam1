import { useState} from "react";
import CurrencyInput from 'react-currency-input-field';
//import { Link, useNavigate } from "react-router-dom";
import styles from "./listing.css";
import Image from "../imageupload";




function Listing() {

	const [date, setDate] = useState(new Date());
	const [mode, setMode] = useState("date");
	const [show, setShow] = useState(false);

	//const [isChecked, setChecked]= useState(false);

	const onChange = (e, selectedDate) => {
		setDate(selectedDate);
		setShow(false);
	}

	const showMode = (currentMode) => {
		setShow(true);
		setMode(currentMode);
	}
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
	};
    return (
		<div className="">
			<div className="">                          
				<div className="flex-container">
					<form className= "form" onSubmit={handleSubmit}>  
						<h1>Create your listing</h1>
							<div className = "input-wrapper">
							    <label for = "Event Name" className = "form-label">Event Name</label>
								<input
									id= "Event Name"
									type="text"
									placeholder="Event Name"
									name="Event Name"
									onChange={handleChange}
									required= {true}
									className="form-input"/>
								
							</div>
							<div className = "input-wrapper">
							    <label for="Event date" className = "form-label">Event Date</label>
								<input
									className = "form-input"
									type="date" onPress={() => showMode("date")} 
									id="Event date"
									name="Event date"
									placeholder=""
									value={date}
									min=""
									mode={mode}
									is24hour={true}
									onChange={onChange} 
									/>
								
							</div>
							<div className = "input-wrapper">
							    <label for="Event time" className = "form-label">Event Time</label>
								<input
									type="time" onPress={() => showMode("time")} 
									id="Event time"
									name="Event Time"
									value={date}
									min=""
									mode={mode}
									is24hour={true}
									onChange={onChange}
									className = "form-input"/> 
							   
							</div>
							<div className = "input-wrapper">
							    <label for= "Event Type" className = "form-label">Event Type</label>
								<select
									id = "Event Type"
									placeholder= "Browse..."
									className = "form-input">
									<option value = ""></option>
									<option value = "Concert">Concert</option>
									<option value = "Festival">Festival</option>
									<option value = "Gig">Gig</option>
									<option value = "Comedy Night">Comedy Night</option>
									<option value = "Club Night">Concert</option>
								</select>
								
						    </div>
						
						    <div className = "input-wrapper">
							    <label for="Starting Bid" className = "form-label">Starting Bid</label>
								<CurrencyInput
									className= "form-input"
									id= "Starting Bid"
									name="Starting Bid"
									placeholder="£00.00"
									decimalsLimit={2}
									onValueChange={(value, name) => console.log(value, name)}
									required = {true}
									/>
								
							</div>
							
							
							<div className = "input-wrapper">
							    <label for="Auction end date" className = "form-label">Auction End Date</label>
								<input
									className= "form-input"
									type="date" onPress={() => showMode("date")} 
									id="Auction end date"
									name="Auction End date"
									value={date}
									min=""
									mode={mode}
									is24hour={true}
									onChange={onChange}
									/>
								
							</div>
							
							
							<div className = "input-wrapper">
							    <label for="Auction end time" className = "form-label">Auction End Time</label>
								<input
									className= "form-input"
									type="time" onPress={() => showMode("time")} 
									id="Auction end time"
									name="Auction End Time"
									value={date}
									min=""
									mode={mode}
									is24hour={true}
									onChange={onChange}
									/>
								
							</div>
							
							<div className = "input-wrapper">
							    <label for="Event Description" className = "form-label">Event Description</label>
								<input
									id= "Event Description"
									type="textarea"
									className= "form-input"
									placeholder="Give more information about your event..."
									name="Description"
									onChange={handleChange}
									required= {false}
									rows= {10}
							    />
								
							</div>
							
							<div className = "submit-button">
							    <label for="Event Image" className = "image-label">Add an Event Image</label>
								<Image/>
								
							</div>
						<button type="submit" className={styles.green_btn}>
							Submit Listing
						</button>
                        <button type="clear" className={styles.red_btn}>
							Clear Listing
						</button>
					</form>
				</div> 
			</div>
		</div>
	);
};


export default Listing;