import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function MainPage() {
    const navigate = useNavigate();

    const handleLogout = () => {

        navigate('/login');
    };

    const handleAdmin = () => {

        navigate('/admin');
    };

    return (
        <div className="main-container">
            <h1>Welcome to the Dashboard</h1>
            <div className="button-container">
                <button 
                    className="dashboard-button"
                    onClick={handleAdmin}
                >
                    Admin Panel
                </button>
                <button className="dashboard-button">Send Alert</button>
                <button 
                    className="dashboard-button logout-button" 
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

export default MainPage;