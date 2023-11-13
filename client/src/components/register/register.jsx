import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./register.css";

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
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

	return (
		<div className="">
			<div className="">
				<div className="flex-container">
					<form onSubmit={handleSubmit} className="flex">
						<h1>Welcome! <br />We are so glad you are joining us!</h1>
						<div>Username</div>
						<div>
							<input
								type="text"
								placeholder="Username"
								id="username"
								onChange={handleChange}
								required
								className="input"
							/></div>
						<div>First name </div>
						<div>
							<input
								type="text"
								placeholder="First Name"
								id="firstname"
								onChange={handleChange}
								required
								className="input"
							/></div>
						<div>Last name</div>
						<div>
							<input
								type="text"
								placeholder="Last Name"
								id="lastname"
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
								id="email"
								onChange={handleChange}
								required
								className="input"
							/></div>
						<div>Mobile Number</div>
						<div>
							<input
								type={"number"}
								placeholder="07123456789"
								id="telephone"
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
								id="password"
								onChange={handleChange}
								required
								className="input"
							/></div>
						<button>
							Register
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
