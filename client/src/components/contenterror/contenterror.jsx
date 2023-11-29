import React from 'react';
import './contenterror.css';
import '../../App.css';
import { MdDirectionsOff } from "react-icons/md";
import { Link } from 'react-router-dom';


function Contenterroritems() {
    return (
        <div className='contenterrorbox'><Link to={"/"}>
            <h1>You are already logged in</h1>
            <p>
                <MdDirectionsOff className='icon' size={50} />
                <br />
                Oops, you might be a little lost!
                <br />
                Please click here to return back home
            </p>
        </Link>
        </div>
    )
}

export default Contenterroritems;