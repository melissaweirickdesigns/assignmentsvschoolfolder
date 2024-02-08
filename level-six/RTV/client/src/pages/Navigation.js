import React from 'react';

function NavigationDropdown({ handleNavigation, handleLogout }) {
    return (
        <div className="navigation-dropdown">
            <select onChange={(e) => handleNavigation(e.target.value)}>
                <option value="">Navigate to...</option>
                <option value="/currentissues">Current Issues</option>
                <option value="/addnewissue">Add New Issue</option>
                <option value="/myposts">My Posts</option>
                <option value="" onClick={handleLogout}>Logout</option>
            </select>
        </div>
    );
}

export default NavigationDropdown;
