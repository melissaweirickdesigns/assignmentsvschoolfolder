import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function SignUp() {
    const navigate = useNavigate();
    const { signup, errMsg } = useContext(UserContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Only destructure the form elements that match the updated user schema
        const { username, password, fName, lName, phoneNumber, wEmail } = event.target.elements;

        // Prepare userData object with only the necessary fields
        const userData = {
            username: username.value,
            password: password.value,
            fName: fName.value,
            lName: lName.value,
            phoneNumber: phoneNumber.value,
            wEmail: wEmail.value,
        };

        const success = await signup(userData);

        if (success) {
            navigate('/', { state: { message: 'Signup successful. Please log in.' } });
        } else {
            // Optionally, handle the failure case, for example, by showing an error message
        }
    };

    return (
        <div className='container'>
            <div className='signup-container'>
                <h2>Symphony Natural Health Internal Help Desk</h2>
                <h3>Sign Up</h3>
                {errMsg && <p className="error">{errMsg}</p>}
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="fName">First Name</label>
                        <input type="text" id="fName" name="fName" required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="lName">Last Name</label>
                        <input type="text" id="lName" name="lName" required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="number" id="phoneNumber" name="phoneNumber" required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="wEmail">Work Email</label>
                        <input type="text" id="wEmail" name="wEmail" required />
                    </div>
                    <button type="submit" className='signup-button'>Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
