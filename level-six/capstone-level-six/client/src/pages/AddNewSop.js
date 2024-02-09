import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import PropTypes from 'prop-types';

function AddNewSop({ previousSopId, onSubmitSuccess }) {
    const navigate = useNavigate();
    const { addNewSop, errMsg, resetAuthErr } = useContext(UserContext);

    // Updated state to match the full schema
    const [sop, setSop] = useState({
        title: '',
        purpose: '',
        background: '',
        keywords: [], // Assuming keywords as an array of strings
        guidelines: '',
        dateEffective: new Date(Date.now() + 72460601000), // Default value
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        resetAuthErr();

        
        const success = await addNewSop({
            ...sop, 
        }, previousSopId); 

        if (success) {
            onSubmitSuccess(); 
            navigate('/currentsops'); 
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "keywords") {
            setSop(prevSop => ({ ...prevSop, [name]: value.split(',').map(keyword => keyword.trim()) }));
        } else {
            setSop(prevSop => ({ ...prevSop, [name]: value }));
        }
    };

    return (
        <div>
            <h1>Add New SOP</h1>
            {errMsg && <p className="error-message">{errMsg}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={sop.title} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div>
                    <label>Purpose</label>
                    <input 
                        type="text" 
                        name="purpose" 
                        value={sop.purpose} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div>
                    <label>Background</label>
                    <textarea 
                        name="background" 
                        value={sop.background} 
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div>
                    <label>Keywords (comma separated)</label>
                    <input 
                        type="text" 
                        name="keywords" 
                        value={sop.keywords.join(', ')} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div>
                    <label>Guidelines</label>
                    <textarea 
                        name="guidelines" 
                        value={sop.guidelines} 
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit SOP</button>
            </form>
        </div>
    );
}

AddNewSop.propTypes = {
    previousSopId: PropTypes.string, 
    onSubmitSuccess: PropTypes.func.isRequired
};

export default AddNewSop;
