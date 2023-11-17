import React, { useEffect, useState, useCallback } from 'react';
import { IoLogOutOutline } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import './myAccount.css';
import '../../App.css';

function MyAccountLogOut() {
    return (
        
                      
                            <button class="button1"><IoLogOutOutline class="icon" size={50}/><br/><div class="accountPageButtonText">Log out</div></button>

    )
}

export default MyAccountLogOut;

