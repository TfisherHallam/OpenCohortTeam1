import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInFailure, signInSuccess } from "../../redux/user/userSlice";
import './login.css';
import '../../App.css';

export default function Login() {
	const [formData, setFormData] = useState({});
const {loading, error} = useSelector((state) => state.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			dispatch(signInStart());
			const res = await fetch('/api/auth/signin', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});
			const data = await res.json();
			console.log(data);
			if (data.success === false) {
				dispatch(signInFailure(data.message));
				return;
			}
			dispatch(signInSuccess(data));
			navigate('/');
		} catch (error) {
			dispatch(signInFailure(error.message));
		}
	};

	return (
		<div className='textflex-container'>
			<div className='textcontainer'>
				<div>
					<form className='loginform' onSubmit={handleSubmit}>
						<h1>Welcome back</h1>
						<br />
						<p><Link to={"/Register"}>New user? Sign up here</Link></p>
						<br />
						<FaUserCircle className='icon' size={70} />
						<br />
						<br />
						<input
							type="email"
							placeholder="Email"
							id="email"
							onChange={handleChange}
							required
							className="inputboxes"
						/>
						<br />
						<br />
						<input
							type="password"
							placeholder="Password"
							id="password"
							onChange={handleChange}
							required
							className="inputboxes"
						/>
						{error && <div className="">{error}</div>}
						<br />
						<br />
						<button type="submit" className="loginbutton">
							SIGN IN
						</button>
					</form>
					<p><Link to={"/"}>Forgotten your password? Click here to reset</Link></p>
				</div>
			</div>
		</div>
	);
};
