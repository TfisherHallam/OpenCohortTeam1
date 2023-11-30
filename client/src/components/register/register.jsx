import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from 'react-redux/es/hooks/useSelector.js';
import './register.css';
import '../../App.css';
import Contenterroritems from "../contenterror/contenterror.jsx";

export default function Register() {
	const { currentUser } = useSelector(state => state.user);
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
	if (!currentUser) {
		return (
			<div className="textcontainer">
				<form onSubmit={handleSubmit} className="form">
					<h1 className="registerHeader">Welcome! <br />
						<br />
						We are so glad you are joining us!</h1>
					<div className="registerflex-container">
						<label htmlFor="username" className="registerflex-item-left">Username:</label>
						<div className="registerflex-item-right">
							<input
								type="text"
								placeholder="Username"
								id="username"
								onChange={handleChange}
								required
								className="input"
								maxLength="11"
							/>
						</div>
					</div>
					<div className="registerflex-container">
						<label htmlFor="First Name" className="registerflex-item-left">First name:</label>
						<div className="registerflex-item-right">
							<input
								type="text"
								placeholder="First Name"
								id="firstname"
								onChange={handleChange}
								required
								className="input"
							/>
						</div>
					</div>
					<div className="registerflex-container">
						<label htmlFor="Last Name" className="registerflex-item-left">Last name:</label>
						<div className="registerflex-item-right">
							<input
								type="text"
								placeholder="Last Name"
								id="lastname"
								onChange={handleChange}
								required
								className="input"
							/>
						</div>
					</div><div className="registerflex-container">
						<label htmlFor="email" className="registerflex-item-left">Email address:</label>
						<div className="registerflex-item-right">
							<input
								type="email"
								placeholder="Email"
								id="email"
								onChange={handleChange}
								required
								className="input"
							/>
						</div>
					</div>
					<div className="registerflex-container">
						<label htmlFor="telephone" className="registerflex-item-left">Mobile Number:</label>
						<div className="registerflex-item-right">
							<input
								type="tel"
								placeholder="07123456789"
								pattern="[0-9]{11}"
								id="telephone"
								onChange={handleChange}
								required
								maxLength="11"
								className="input"
							/>
						</div>
					</div>
					<div className="registerflex-container">
						<label htmlFor="password" className="registerflex-item-left">Create Password:</label>
						<div className="registerflex-item-right"><input
							type="password"
							placeholder="Password"
							id="password"
							onChange={handleChange}
							required
							className="input"
						/>
						</div>
					</div>
					<button disabled={loading} className="registerbutton">
						{loading ? 'Signing you up...' : 'REGISTER'}
					</button>
				</form>
				{error && <p className='errortext'>{error}</p>}
				<br />
				<br />
				<p><Link to={"/login"}>Already a member? Click here to login</Link></p>
			</div>);
	} return (
		<div>
			<Contenterroritems />
		</div>
	)
};