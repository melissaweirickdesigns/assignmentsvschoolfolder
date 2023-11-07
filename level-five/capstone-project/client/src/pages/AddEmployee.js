import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function AddEmployee() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        employeeId: '',
        locationId: '',
        username: '',
        password: '',
        loginStatus: false
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9000/login/add', formData);
            console.log('Employee Added:', response.data);
            window.alert("Employee Added Successfully")
            navigate('/main');
        } catch (error) {
            console.error('Error adding employee:', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="fName" 
                    value={formData.fName}
                    onChange={handleInputChange} 
                    placeholder="First Name" 
                    required 
                />
                <input 
                    type="text" 
                    name="lName" 
                    value={formData.lName}
                    onChange={handleInputChange} 
                    placeholder="Last Name" 
                    required 
                />
                <input 
                    type="number" 
                    name="employeeId" 
                    value={formData.employeeId}
                    onChange={handleInputChange} 
                    placeholder="Employee ID" 
                    required 
                />
                <input 
                    type="number" 
                    name="locationId" 
                    value={formData.locationId}
                    onChange={handleInputChange} 
                    placeholder="Location ID" 
                    required 
                />
                <input 
                    type="text" 
                    name="username" 
                    value={formData.username}
                    onChange={handleInputChange} 
                    placeholder="Username" 
                    required 
                />
                <input 
                    type="password" 
                    name="password" 
                    value={formData.password}
                    onChange={handleInputChange} 
                    placeholder="Password" 
                    required 
                />
                <button type="submit" className="submit-button">Add Employee</button>
            </form>
        </div>
    );
}

export default AddEmployee;
