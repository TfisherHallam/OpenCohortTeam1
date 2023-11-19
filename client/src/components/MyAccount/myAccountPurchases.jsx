import React, { useEffect, useState, useCallback } from 'react';
import { FaShoppingBasket } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import './myAccount.css';
import '../../App.css';

const MyAccountPurchasesContent = () => {
    const useToggle = (initialState = false) => {
        const [state, setState] = useState(initialState);
        const toggle = useCallback(() => setState((state) => !state), []);
        return [state, toggle]
    };
    const [toggle, setToggle] = useToggle()

    return (<div>

        <button class="button1" onClick={setToggle}><FaShoppingBasket class="icon" size={50} /><br /><div class="accountPageButtonText">My purchases</div></button>

        {toggle && (
            <ul>
                <li>Items to go here</li>
            </ul>
        )}

    </div>
    );
}

export default MyAccountPurchasesContent;
