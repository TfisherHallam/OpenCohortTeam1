import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function Login() {

    const [email, setEmail] = useState('')

    
    return (
        <div className="login">

            <h1>Welcome back</h1>

            <p>New user? Sign up <Link to="/signup">here</Link></p>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" name="" id="" />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" name="" id="" />

                <input type="submit" />
            </form>

            <br />
            <p>Forgotten your password? Click here to reset</p>
        </div>
    )

}

