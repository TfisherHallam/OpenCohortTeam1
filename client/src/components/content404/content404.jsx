import React from 'react';
import './content404.css';
import '../../App.css';
import { MdDirectionsOff } from "react-icons/md";
import { Link } from 'react-router-dom';


function Content404items() {
    return (
        <div className='content404box'><Link to={"/"}>
            <h1>404 - not found</h1>
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

export default Content404items;