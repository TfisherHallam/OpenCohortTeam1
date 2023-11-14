import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';
import "./login.css";
import '../../App.css';

const Logininterface = () => {
	const [data, setData] = useState({ username: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3000/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div class='textflex-container'>
			<div class='textcontainer'>
				<div>
					<form class='loginform'>
						<h1>Welcome back</h1>
						<br/>
						<p><Link to={"/Register"}>New user? Sign up here</Link></p>
						<br/>						
						<FaUserCircle class='icon' size={70}/>
						<br/>
						<br/>
						<input class='inputboxes'
							type="input"
							placeholder="Username"
							name="username"
							onChange={handleChange}
							value={data.username}
							required
						/>
						<br/>
						<br/>
						<input class='inputboxes'
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required	
						/>
						{error && <div class="">{error}</div>}
						<br/>
						<br/>
						<button type="submit" class="loginbutton">
							SIGN IN
						</button>
					</form>
					<p><Link to={"/"}>Forgotten your password? Click here to reset</Link></p>
				</div>				
			</div>
		</div>
	);
};

export default Logininterface;