import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavigationDropdown from './Navigation';

function AddNewIssue() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const token = localStorage.getItem('token');
        if (!token) {
            console.error("User not logged in");
            return;
        }

        try {
            await axios.post('http://localhost:9002/api/issues', {
                title,
                description
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            navigate('/currentissues');
        } catch (error) {
            console.error('Error adding new issue:', error);
        }
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleLogout = () => {
        navigate('/login'); 
    };

    return (
        <div>
            <NavigationDropdown handleNavigation={handleNavigation} handleLogout={handleLogout} />
            <h1>Add New Issue</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit">Submit Issue</button>
            </form>
        </div>
    );
}

export default AddNewIssue;
