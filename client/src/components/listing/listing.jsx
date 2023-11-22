<<<<<<< HEAD
import { useState} from "react";
import CurrencyInput from 'react-currency-input-field';
import checkbox from "../checkbox";
//import { Link, useNavigate } from "react-router-dom";
import styles from "./listing.css";



=======
import { useState } from "react";
import { Text, View, StatusBar } from 'react-native-web';
import CurrencyInput from 'react-currency-input-field';
import styles from "./listing.css";
>>>>>>> 4f7c479dd23a2caff19c013e4e353195f930b9d9

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
					<form className="flex" onSubmit={handleSubmit}>
						<h1>Create your listing</h1>
						<label>Event Name</label>
							<div>
								<input
									type="text"
									placeholder="Event Name"
									name="Event Name"
									onChange={handleChange}
									required= {true}
									className="input"/>
							</div>
							<div>
							<label for="Event date">Event Date</label>
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
							<div>
							<label for="Event time">Event Time</label>
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
						<div>
						    <label>Event Type</label>
							<select>
							    placeholder= "Browse..."
							    <option value = ""></option>
								<option value = "Concert">Concert</option>
								<option value = "Festival">Festival</option>
								<option value = "Gig">Gig</option>
								<option value = "Comedy Night">Comedy Night</option>
								<option value = "Club Night">Concert</option>
							</select>
						</div>
						<div>Starting Bid</div>
							<div>
								£<CurrencyInput
									name="Starting Bid"
									placeholder="00.00"
									decimalsLimit={2}
									onValueChange={(value, name) => console.log(value, name)}
									required = {true}
								/>
							</div>
						<div>Add a Reserve</div>
							<div>
								£<CurrencyInput
									input= "checkox"
									name="Starting Bid"
									placeholder="00.00"
									decimalsLimit={2}
									onValueChange={(value, name) => console.log(value, name)}
								/>
							</div>
							<div>
							<label for="Auction end date">Auction End Date</label>
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
							<div>
							<label for="Auction end time">Auction End Time</label>
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
						<div>Event Description</div>
							<div>
								<input
									type="textarea"
									placeholder="Give more information about your event..."
									name="Description"
									onChange={handleChange}
									required= {false}
									className="input"
									rows= {10}
							    />
							</div>
						<div>Upload Event Image</div>
							<div>
								<input
									type="button"
									placeholder="Click to upload image"
									name="Event image"
									onChange={handleChange}
									required
									className="input"
							    />
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