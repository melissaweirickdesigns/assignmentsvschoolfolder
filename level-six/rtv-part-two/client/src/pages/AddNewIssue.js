import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationDropdown from './Navigation';
import { UserContext } from '../context/UserContext';

function AddNewIssue() {
    const [issue, setIssue] = useState({ title: '', description: '' });
    const navigate = useNavigate();
    const { addNewIssue, errMsg, resetAuthErr } = useContext(UserContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        resetAuthErr();
        const success = await addNewIssue(issue);

        if (success) {
            navigate('/currentissues');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setIssue(prevIssue => ({ ...prevIssue, [name]: value }));
    };

    return (
        <div>
            <h1>Add New Issue</h1>
            {errMsg && <p className="error-message">{errMsg}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={issue.title} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea 
                        name="description" 
                        value={issue.description} 
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit Issue</button>
            </form>
        </div>
    );
}

export default AddNewIssue;
