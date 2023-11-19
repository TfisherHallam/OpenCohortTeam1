import React, { useEffect, useState, useCallback } from 'react';
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import './myAccount.css';
import '../../App.css';

const MyAccountSalesContent = () => {
    const useToggle = (initialState = false) => {
        const [state, setState] = useState(initialState);
        const toggle = useCallback(() => setState((state) => !state), []);
        return [state, toggle]
    };
    const [toggle, setToggle] = useToggle()

    return (<div>

        <button class="button1" onClick={setToggle}><FaRegMoneyBillAlt class="icon" size={50} /><br /><div class="accountPageButtonText">My sales</div></button>

        {toggle && (
            <ul>
                <li>Items to go here</li>
            </ul>
        )}

    </div>
    );
}

export default MyAccountSalesContent;
