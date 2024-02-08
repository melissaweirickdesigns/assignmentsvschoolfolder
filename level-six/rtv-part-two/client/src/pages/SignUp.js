import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function SignUp() {
    const navigate = useNavigate();
    const { signup, handleAuthErr, errMsg } = useContext(UserContext); // Destructure handleAuthErr and errMsg

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { username, password } = event.target.elements;

        const success = await signup({
            username: username.value,
            password: password.value
        });

        if (success) {
            navigate('/', { state: { message: 'Signup successful. Please log in.' } });
        } else {
        }
    };

    return (
        <div className='container'>
            <div className='signup-container'>
                <h2>CivicPulse</h2>
                <h3>Sign Up</h3>
                {errMsg && <p className="error">{errMsg}</p>} {/* Display errMsg from UserContext */}
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required />
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
