import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const { login, errMsg, resetAuthErr } = useContext(UserContext); // Using errMsg from UserContext
    const [signupSuccessMessage, setSignupSuccessMessage] = useState('');

    useEffect(() => {
        if (location.state?.message) {
            setSignupSuccessMessage(location.state.message);
            // Clear state after reading to prevent message from persisting on navigation
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location, navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        resetAuthErr();
        const { username, password } = event.target.elements;

        const success = await login({
            username: username.value,
            password: password.value
        });
        
        if (success) {
            navigate('/currentissues');
        }
        // No need to set error here, as errMsg from context will be used
    };

    return (
        <div className='container'>
            <div className='login-container'>
                <h2>Symphony Natural Health Internal Help Desk</h2>
                <h3>Login</h3>
                {signupSuccessMessage && <p className="success-message">{signupSuccessMessage}</p>}
                {errMsg && <p className="error-message">{errMsg}</p>} {/* Use errMsg for errors */}
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" className='login-button'>Login</button>
                </form>
<p className='signup-button'>
                    Don't have an account? <button type="button" onClick={() => navigate('/signup')}>Sign Up</button>
                </p>
            </div>
        </div>
    );
}

export default Login;
