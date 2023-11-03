import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from axios;
import styles from './loginstyles.module.css';

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8080/api/auth";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/Home";
        } catch (error) {
            if (error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500) {
                setError(error.response.data.message)
            }
        }
    }

    return (
        <div className={styles.login_container}>
            <div className={styles.login_form_container}>
                <div className={styles.left}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Log in</h1>
                        <input
                            type="email"
                            placeholder='Email'
                            name='email'
                            onChange={handleChange}
                            value={data.email}
                            required
                            className={styles.input}
                        />
                        <input
                            type="password"
                            placeholder='Password'
                            name='password'
                            onChange={handleChange}
                            value={data.password}
                            required
                            className={styles.input}
                        />
                        {error && <div className={styles.error_msg}>{error}</div>}
                        <button type="submit" className={styles.green_btn}>
                            Sign in
                        </button>
                    </form>
                </div>
                <div className={styles.right}>
                    <h1>Register</h1>
                    <link to="/signup">
                        <button type='button' className={styles.white_btn}>
                            Register
                        </button>
                    </link>
                </div>

            </div>
        </div>
    )
};

export default Login;