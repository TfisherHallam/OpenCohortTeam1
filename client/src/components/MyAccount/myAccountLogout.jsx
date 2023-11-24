import React from 'react';
import { IoLogOutOutline } from "react-icons/io5";
import './myAccount.css';
import '../../App.css';
import { deleteUserFailure, deleteUserSuccess, signOutUserStart } from '../../redux/user/userSlice';
import { useDispatch } from 'react-redux';
export default function MyAccountLogOut() {
    const dispatch = useDispatch();

    const handleSignOut = async () => {
        try {
            dispatch(signOutUserStart());
            const res = await fetch('/api/auth/signout');
            const data = await res.json();
            if (data.success === false) {
                dispatch(deleteUserFailure(data.message));
                return;
            }
            dispatch(deleteUserSuccess(data));
        } catch (error) {
            dispatch(deleteUserFailure(error.message));
        }
    };

    return (
        <button className="button1" onClick={handleSignOut}>
            <IoLogOutOutline className="icon" size={50} /><br />
            <div className="accountPageButtonText">Log out</div></button>
    )
}