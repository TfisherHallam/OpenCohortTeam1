import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import './adminUserView.css';
    const PORT = process.env.PORT || 3001;
export default function AdminUserView() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const params = useParams();
    const { currentUser } = useSelector((state) => state.user);


}