import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function UserManage() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const deleteUser = async (userId) => {
        try {
            await axios.delete(`http://localhost:9000/login/users/${userId}`);
            setUsers(users.filter(user => user._id !== userId));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const [editingUser, setEditingUser] = useState(null);
    const [editFormData, setEditFormData] = useState({
        fName: '',
        lName: '',
        employeeId: '',
        locationId: ''
    });

    const startEdit = (user) => {
        setEditingUser(user._id);
        setEditFormData({ ...user });
    };
    
    const handleEditFormChange = (event) => {
        setEditFormData({ ...editFormData, [event.target.name]: event.target.value });
    };
    
    const submitEdit = async () => {
        try {
            await axios.put(`http://localhost:9000/login/users/${editingUser}`, editFormData);
            setUsers(users.map((user) => (user._id === editingUser ? { ...user, ...editFormData } : user)));
            setEditingUser(null);
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };
    

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get('http://localhost:9000/login/users'); 
                console.log(users)
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleLogout = () => {
        navigate('/')
    };

    const returnToMainMenu = () => {
        navigate('/main'); 
    };

        return (
            <div className="user-list-container">
                <h2>User Management</h2>
                <button onClick={handleLogout} className="dashboard-button logout-button">Logout</button>
                <button onClick={returnToMainMenu} className="dashboard-button" >Return to Main Menu</button>
                <ul className="user-list">
                {users.map(user => (
                    <li key={user._id} className="user-item">
                        {editingUser === user._id ? (
                            <div>
                                <label>First Name:</label>
                                <input type="text" name="fName" value={editFormData.fName} onChange={handleEditFormChange} />
                                <br />
                                <label>Last Name:</label>
                                <input type="text" name="lName" value={editFormData.lName} onChange={handleEditFormChange} />
                                <br />
                                <label>Employee ID:</label>        
                                <input type="number" name="employeeId" value={editFormData.employeeId} onChange={handleEditFormChange} />
                                <br />
                                <label>Location ID:</label>
                                <input type="number" name="locationId" value={editFormData.locationId} onChange={handleEditFormChange} />
                                <br />
                                <button onClick={submitEdit}>Save</button>
                                <button onClick={() => setEditingUser(null)}>Cancel</button>
                            </div>
                        ) : (
                            <div>
                                {user.fName} {user.lName}
                                <br />
                                Employee ID: {user.employeeId}
                                <br />
                                Location ID: {user.locationId}
                                <br />
                                User ID: {user._id}
                                <button onClick={() => startEdit(user)}>Edit</button>
                                <button onClick={() => deleteUser(user._id)}>Delete</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
    </div>
        );
}

export default UserManage;