import React from 'react'
import {Navigate } from 'react-router-dom';

const UserProtection = ({children}) => {
    const token = localStorage.getItem('token');
    if (!token) {
        return <Navigate to="/" />;
    }
    return children;
}

export default UserProtection