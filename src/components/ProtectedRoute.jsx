import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import AuthContext from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    console.log('ProtectedRoute - user:', user, 'loading:', loading);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-black">
                <div className="gaming-loader"></div>
            </div>
        );
    }

    if (!user) {
        console.log('No user found, redirecting to login');
        return <Navigate to="/login" state={{ from: location.pathname }} replace />;
    }

    console.log('User authenticated, rendering protected content');
    return children;
};

export default ProtectedRoute;
