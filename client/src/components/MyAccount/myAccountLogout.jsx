import React, { useEffect, useState, useCallback } from 'react';
import { IoLogOutOutline } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import './myAccount.css';
import '../../App.css';

function MyAccountLogOut() {
    return (
        <button className="button1">
            <IoLogOutOutline className="icon" size={50} /><br />
            <div className="accountPageButtonText">Log out</div></button>
    )
}

export default MyAccountLogOut;

