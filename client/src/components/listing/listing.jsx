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
				<div class="flex-container">
					<form className= "form" onSubmit={handleSubmit}>  
						<h1>Create your listing</h1>
						<label for = "Event Name" class = "form-label">Event Name</label>
							<div class = "input-wrapper">
								<input
									id= "Event Name"
									type="text"
									placeholder="Event Name"
									name="Event Name"
									onChange={handleChange}
									required= {true}
									className="input"/>
							</div>
						<label for="Event date" class = "form-label">Event Date</label>
						<div class = "input-wrapper">
							<input
								type="date" onPress={() => showMode("date")} 
								id="Event date"
								name="Event date"
								value={date}
								min=""
								mode={mode}
					            is24hour={true}
					            onChange={onChange} />
							</div>
							
							<label for="Event time" class = "form-label">Event Time</label>
							<div class = "input-wrapper">
								<input
								type="time" onPress={() => showMode("time")} 
								id="Event time"
								name="Event Time"
								value={date}
								min=""
								mode={mode}
					            is24hour={true}
					            onChange={onChange} />
							</div>
						    <label for= "Event Type" class = "form-label">Event Type</label>
							<div class = "input-wrapper">
							<select
								id = "Event Type"
							    placeholder= "Browse...">
							    <option value = ""></option>
								<option value = "Concert">Concert</option>
								<option value = "Festival">Festival</option>
								<option value = "Gig">Gig</option>
								<option value = "Comedy Night">Comedy Night</option>
								<option value = "Club Night">Concert</option>
							</select>
						</div>
						<label for="Starting Bid" class = "form-label">Starting Bid</label>
						<div class = "input-wrapper">
								£<CurrencyInput
									id= "Starting Bid"
									name="Starting Bid"
									placeholder="00.00"
									decimalsLimit={2}
									onValueChange={(value, name) => console.log(value, name)}
									required = {true}
								/>
							</div>
							
							<label for="Auction end date" class = "form-label">Auction End Date</label>
							<div class = "input-wrapper">
								<input
								type="date" onPress={() => showMode("date")} 
								id="Auction end date"
								name="Auction End date"
								value={date}
								min=""
								mode={mode}
					            is24hour={true}
					            onChange={onChange} />
							</div>
							
							<label for="Auction end time" class = "form-label">Auction End Time</label>
							<div class = "input-wrapper">
								<input
								type="time" onPress={() => showMode("time")} 
								id="Auction end time"
								name="Auction End Time"
								value={date}
								min=""
								mode={mode}
					            is24hour={true}
					            onChange={onChange} />
							</div>
							<label for="Event Description" class = "form-label">Event Description</label>
							<div class = "input-wrapper">
								<input
									id= "Event Description"
									type="textarea"
									placeholder="Give more information about your event..."
									name="Description"
									onChange={handleChange}
									required= {false}
									className="input"
									rows= {10}
							    />
							</div>
							<label for="Event Image" class = "image-label">Add an Event Image</label>
							<div class = "submit-button">
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