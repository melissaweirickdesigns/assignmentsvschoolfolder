import React from 'react';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const username = event.target.username.value;
        const password = event.target.password.value;

        try {
            const response = await axios.post('http://localhost:9002/auth/login', {
                username,
                password
            });

            console.log('Login successful:', response.data);
            localStorage.setItem('token', response.data.token);
            onLogin(true);
            navigate('/currentissues');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const handleSignUp = () => {
        navigate('/signup');
    };

    return (
        <div className='container'>
            <div className='login-container'>
                <h2>CivicPulse</h2>
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
                <p className='signup-button'>
                    Don't have an account? <button type="button" onClick={handleSignUp}>Sign Up</button>
                </p>
            </div>
        </div>
    );
}

export default Login;
