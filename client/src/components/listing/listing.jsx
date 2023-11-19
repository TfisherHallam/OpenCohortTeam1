import { useState, Text, View, Checkbox, StatusBar, CurrencyInput } from "react";
//import axios from "axios";
//import { Link, useNavigate } from "react-router-dom";
import styles from "./listing.css";
import Datetimepicker from "../datetime.jsx";
//import {Text, View, Checkbox, StatusBar, CurrencyInput} from "react-bootstrap";

export default function Listing() {
	const [isChecked, setChecked]= useState(false);
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
					<form className="flex" onSubmit={handleSubmit}>
						<h1>Create your listing</h1>
						<label>Event Name</label>
						<div>
							<input
								type="text"
								placeholder="Event Name"
								name="Event Name"
								onChange={handleChange}
								required= "true"
								className="input"/>
						</div>
                        <div>Event Date</div>
						<div>
							<Datetimepicker/>
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
							<CurrencyInput
							    name="Starting Bid"
							    placeholder="Please enter a number"
							    defaultValue={1000}
							    decimalsLimit={2}
							    onValueChange={(value, name) => console.log(value, name)}
								required
							/></div>
						<div>Add a Reserve</div>
						<div> 
							<View style = {styles.container}>
							  <View>
						      <Checkbox value = {isChecked} onChange = {setChecked} 
							   />
							  <Text>Add a Reserve</Text>
							  </View>
							  <StatusBar style = {{"auto"}}/>
							  </View>
							  <input 
							    type="Checkbox" 
							    placeholder="Add a Reserve"
							    name= "Reserve"
								onChange={handleChange}
								required= {false}
								className= "input"
							   />
					         </div>
						<div>Auction End</div>
						<div>
						    <Datetimepicker/>
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
							Clear Listing
						</button>
					</form>
				</div> 
			</div>
		</div>
	);
};

