import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import './adminUserView.css';

export default function AdminUserView() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const params = useParams();
    const { currentUser } = useSelector((state) => state.user);
    
    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true)
                const userId = params.userId;
                const res = await fetch(`/api/admin/get/${params.userId}`);
                const data = await res.json();
                if (data.success === false) {
                    setError(true);
                    setLoading(false);
                    return;
                }
                setUser(data);
                setLoading(false);
                setError(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        }
        fetchUser()
    }, []
    );
    return <div>
        {loading && <p>Loading...</p>}
        {user && user.name}
        {error && <p>An issue occurred, please try again</p>}
        {user && !loading && !error && (
            <div className='itemviewtextflex-container'>
                <div className="itemviewflex-container">
                    <div className="itemviewflex-item-left">Category:</div>
                    <div className="itemviewflex-item-right">{FormData.username}</div>
                </div>

            </div>
        )}

    </div>
}
