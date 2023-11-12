import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./register.css";

const Registerinterface = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		userName: "",
		email: "",
		password: ""
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3000/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
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
		<div className="">
			<div className="">
				<div className="flex-container">
					<form className="flex" onSubmit={handleSubmit}>
						<h1>Welcome! <br/>We are so glad you are joining us!</h1>
						<div>Username</div>
						<div>
						<input
							type="text"
							placeholder="Username"
							name="userName"
							onChange={handleChange}
							value={data.userName}
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
							value={data.firstName}
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
							value={data.lastName}
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
							value={data.email}
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
							value={data.number}
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
							value={data.password}
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
							value={data.password}
							required
							className="input"
						/></div>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Register
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Registerinterface;