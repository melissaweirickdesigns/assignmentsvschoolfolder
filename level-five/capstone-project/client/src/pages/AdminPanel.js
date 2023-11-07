import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function AdminPanel() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/'); 
    };

    const goToMainMenu = () => {
        navigate('/main'); 
    };

    const handleAdd = () => {
        navigate('/add'); 
    };

    const handleUsers = () => {
        navigate('/userlist'); 
    };

    return (
        <div className="admin-panel-container">
            <button className="admin-panel-button" onClick={handleAdd}>Add an Employee</button>
            <button className="admin-panel-button">Training</button>
            <button className="admin-panel-button">Alert Steps Setup</button>
            <button className="admin-panel-button" onClick={handleUsers}>Existing Employees</button>
            <button className="admin-panel-button">Notification Settings</button>
            <button className="admin-panel-button">IP Management</button>
            <button className="admin-panel-button" onClick={goToMainMenu}>Return to Main Menu</button>
            <button className="admin-panel-button logout-button" onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default AdminPanel;