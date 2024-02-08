import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;

        try {
            const response = await axios.post('http://localhost:9002/auth/signup', {
                username,
                password
            });

            console.log('Sign-up successful:', response.data);
            navigate('/');
        } catch (error) {
            console.error('Sign-up failed:', error);
        }
    };

    return (
        <div className='container'>
            <div className='signup-container'>
                <h2>CivicPulse</h2>
                <h3>Sign Up</h3>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" className='signup-button'>Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
