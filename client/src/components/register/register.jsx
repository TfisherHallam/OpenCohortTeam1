import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './register.css';
import '../../App.css';

export default function Register() {
	const [formData, setFormData] = useState({});
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const res = await fetch('/api/auth/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});
			const data = await res.json();
			console.log(data);
			if (data.success === false) {
				setLoading(false);
				setError(data.message);
				return;
			}
			setLoading(false);
			setError(null);
			navigate('/login');
		} catch (error) {
			setLoading(false);
			setError(error.message);
		}
	};

	return (
		<div class="textcontainer">
			<form onSubmit={handleSubmit} >
				<h1>Welcome! <br />We are so glad you are joining us!</h1>
				<div class="registerflex-container">
					<div class="registerflex-item-left">Username:</div>
					<div class="registerflex-item-right">
						<input
						type="text"
						placeholder="Username"
						id="username"
						onChange={handleChange}
						required
						className="input"
					/></div>
				</div>
				<div class="registerflex-container">
					<div class="registerflex-item-left">First name:</div>
					<div class="registerflex-item-right">
						<input
						type="text"
						placeholder="First Name"
						id="firstname"
						onChange={handleChange}
						required
						className="input"
					/></div></div>
				<div class="registerflex-container">
					<div class="registerflex-item-left">Last name:</div>
					<div class="registerflex-item-right">							
					<input
						type="text"
						placeholder="Last Name"
						id="lastname"
						onChange={handleChange}
						required
						className="input"
					/></div>
				</div><div class="registerflex-container">
					<div class="registerflex-item-left">Email address:</div>
					<div class="registerflex-item-right">							
					<input
						type="email"
						placeholder="Email"
						id="email"
						onChange={handleChange}
						required
						className="input"
					/></div>
				</div>
				<div class="registerflex-container">
					<div class="registerflex-item-left">Mobile Number:</div>
					<div class="registerflex-item-right">
						<input
						type="tel"
						placeholder="07123456789"
						id="telephone"
						onChange={handleChange}
						required
						maxLength="11"
						className="input"
					/></div>
				</div>
				<div class="registerflex-container">
					<div class="registerflex-item-left">Create Password:</div>
					<div class="registerflex-item-right"><input
						type="password"
						placeholder="Password"
						id="password"
						onChange={handleChange}
						required
						className="input"
					/></div>
				</div>
				<button class="registerbutton">
					Register
				</button>
			</form>
			<p><Link to={"/login"}>Already a member? Click here to login</Link></p>
		</div>	);
};
