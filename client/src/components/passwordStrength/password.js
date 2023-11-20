import React, { useState } from "react";
import "./password.css";

export default function PassStrength() {
    const [password, setPassword] = useState("");
    const [validate, setValidate] = useState({
        hasLow: false,
        hasCap: false,
        hasNumber: false,
        has8digit: false
    });


    const strength = Object.values(validate).reduce((a, item) => a + item, 0);
    const feedback = {
        1: "Password weak",
        2: "Password weak",
        3: "Medium strength",
        4: "Strong"
    }[strength];

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
        validatePassword(e.target.value);
    };

    const validatePassword = (password) => {
        if (password.match(/\d+/g)) {
            setValidate((o) => ({ ...o, hasNumber: true }));
        } else {
            setValidate((o) => ({ ...o, hasNumber: false }));
        }

        if (password.match(/[A-Z]+/g)) {
            setValidate((o) => ({ ...o, hasCap: true }));
        } else {
            setValidate((o) => ({ ...o, hasCap: false }));
        }

        if (password.match(/[a-z]+/g)) {
            setValidate((o) => ({ ...o, hasLow: true }));
        } else {
            setValidate((o) => ({ ...o, hasLow: false }));
        }

        if (password.length > 7) {
            setValidate((o) => ({ ...o, has8digit: true }));
        } else {
            setValidate((o) => ({ ...o, has8digit: false }));
        }
    };

    return (
        <div>
            <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => handleChangePassword(e)}
            />
            <br />
            {strength > 0 ? (
                <progress
                    hidden={password.length === 0}
                    className={`password strength-${strength}`}
                    value={strength}
                    max="4"
                />
            ) : null}
            <br />
            <div className={`feedback strength-${strength}`} hidden={password.length === 0}>
                {feedback}
            </div>
        </div>
    );
}