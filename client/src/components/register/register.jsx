import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./register.css";

export default function Register() {
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
						<h1>Welcome! <br />We are so glad you are joining us!</h1>
						<div>Username</div>
						<div>
							<input
								type="text"
								placeholder="Username"
								name="userName"
								onChange={handleChange}
								required
								className="input"
							/></div>
						<div>First name </div>
						<div>
							<input
								type="text"
								placeholder="First Name"
								name="firstName"
								onChange={handleChange}
								required
								className="input"
							/></div>
						<div>Last name</div>
						<div>
							<input
								type="text"
								placeholder="Last Name"
								name="lastName"
								onChange={handleChange}
								required
								className="input"
							/>
						</div>
						<div>Email address</div>
						<div>
							<input
								type="email"
								placeholder="Email"
								name="email"
								onChange={handleChange}
								required
								className="input"
							/></div>
						<div>Mobile Number</div>
						<div>
							<input
								type={"number"}
								placeholder="07123456789"
								name="telephone"
								onChange={handleChange}
								required
								maxLength={"11"}
								className="input"
							/></div>
						<div>Create Password</div>
						<div>
							<input
								type="password"
								placeholder="Password"
								name="password"
								onChange={handleChange}
								required
								className="input"
							/></div>
						<div>Confirm Password</div>
						<div>
							<input
								type="password"
								placeholder="Password"
								name="password"
								onChange={handleChange}
								required
								className="input"
							/></div>
						<button type="submit" className={styles.green_btn}>
							Register
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

