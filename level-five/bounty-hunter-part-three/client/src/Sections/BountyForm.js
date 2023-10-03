import React, { useState } from 'react';

function BountyForm({onBountyAdd}) {
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        living: true,
        bountyAmt: '',
        type: 'sith'
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === "living" ? value === "true" : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/bounty', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.status === 200) {
                alert('Bounty added successfully!');
                onBountyAdd(formData);
                setFormData({
                    fName: '',
                    lName: '',
                    living: true,
                    bountyAmt: '',
                    type: 'sith'
                });
            } else {
                alert('Error adding bounty!');
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <h1>Enter Bounty Details</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fName">First Name:</label>
                <input type="text" id="fName" name="fName" value={formData.fName} onChange={handleChange} required />

                <label htmlFor="lName">Last Name:</label>
                <input type="text" id="lName" name="lName" value={formData.lName} onChange={handleChange} required />

                <label>Living:</label>
                <input type="radio" id="livingYes" name="living" value="true" checked={formData.living === true} onChange={handleChange} required />
                <label htmlFor="livingYes" className='radio-label'>Yes</label>
                <input type="radio" id="livingNo" name="living" value="false" checked={formData.living === false} onChange={handleChange} required />
                <label htmlFor="livingNo" className='radio-label'>No</label>

                <label htmlFor="bountyAmt">Bounty Amount:</label>
                <input type="number" id="bountyAmt" name="bountyAmt" value={formData.bountyAmt} onChange={handleChange} required />

                <label htmlFor="type">Type:</label>
                <select id="type" name="type" value={formData.type} onChange={handleChange} required>
                    <option value="sith">Sith</option>
                    <option value="jedi">Jedi</option>
                </select>

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default BountyForm;
