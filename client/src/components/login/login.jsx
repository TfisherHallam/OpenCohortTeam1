import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux/es/hooks/useSelector.js';
import { signInStart, signInFailure, signInSuccess } from "../../redux/user/userSlice";
import Contenterroritems from "../contenterror/contenterror";
import './login.css';
import '../../App.css';

export default function Login() {
	const [formData, setFormData] = useState({});
	const { loading, error } = useSelector((state) => state.user);
	const {currentUser} = useSelector(state => state.user)
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
			window.location.reload(false);
		} catch (error) {
			dispatch(signInFailure(error.message));
		}
	};
if (!currentUser) {
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
						<label><input
							type="email"
							placeholder="Email"
							id="email"
							onChange={handleChange}
							required
							className="inputboxes"
						/></label>
						<br />
						<br />
						<label><input
							type="password"
							placeholder="Password"
							id="password"
							onChange={handleChange}
							required
							className="inputboxes"
						/></label>
						{error && <div className="errortext">{error}</div>}
						<br />
						<br />
						<label><button disabled={loading} type="submit" className="loginbutton">
							{loading ? 'Logging in...' : 'SIGN IN'}
						</button></label>
					</form>
				</div>
			</div>
		</div>
	);
} return (
	<div>
		<Contenterroritems/>
	</div>
)
};
