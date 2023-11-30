import React from 'react';
import './blockederror.css';
import '../../App.css';
import { ImBlocked } from "react-icons/im";
import { Link } from 'react-router-dom';

function Blockederroritems() {
    return (
        <div className='blockederrorbox'><Link to={"/"}>
            <h1>You are a blocked user</h1>
            <p>
                <ImBlocked className='icon' size={50} />
                <br />
                You are unable to access this page as you are a blocked user.
                <br />
                This is as a result of an investigation which has been undertaken.
                <br />
                Please click here to return back home
            </p>
        </Link>
        </div>
    )
}

export default Blockederroritems;