import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const username = event.target.username.value;
        const password = event.target.password.value;

        try {
            const response = await axios.post('http://localhost:9000/login', {
                username,
                password
            });

            console.log('Login successful:', response.data);
            navigate('./main');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className='container'>
            <div className='login-container'>
                <h2>Megaplex Emergency Alert System</h2>
                <h3>Login</h3>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" className='login-button'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
