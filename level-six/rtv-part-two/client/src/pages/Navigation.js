// NavigationDropdown.js or any component that uses handleLogout
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function NavigationDropdown() {
    const { handleLogout } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogoutAndNavigate = () => {
        handleLogout(); // This will clear the context and local storage
        navigate('/'); // This will redirect the user to the login page
    };

    return (
        <div className="navigation-dropdown">
            <select onChange={(e) => {
                if (e.target.value === 'logout') {
                    handleLogoutAndNavigate();
                } else {
                    navigate(e.target.value);
                }
            }}>
                <option value="">Navigate to...</option>
                <option value="/currentissues">Current Issues</option>
                <option value="/addnewissue">Add New Issue</option>
                <option value="/myposts">My Posts</option>
                <option value="logout">Logout</option>
            </select>
        </div>
    );
}

export default NavigationDropdown;
