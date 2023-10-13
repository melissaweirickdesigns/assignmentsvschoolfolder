import React, { useState } from 'react';
import axios from 'axios';

export default function BountyList({ bounties, onEdit, onDelete }) {
  const [editableBounty, setEditableBounty] = useState(null);

  const handleEditClick = (bounty) => {
    setEditableBounty({ ...bounty });
  };

  const handleDeleteClick = async (bounty) => {
    try {
      const response = await axios.delete(`/bounty/${bounty._id}`);
      if (response.status === 200) {
        onDelete(bounty);
      } else {
        console.error('Failed to delete bounty:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting bounty:', error);
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableBounty((prevBounty) => ({
      ...prevBounty,
      [name]: value,
    }));
  };

  const handleSaveClick = async () => {
    try {
      const response = await axios.put(`/bounty/${editableBounty._id}`, editableBounty);
      if (response.status === 201) {
        onEdit(response.data);
        setEditableBounty(null);
        this.forceUpdate();
      } else {
        console.error('Failed to update bounty:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating bounty:', error);
    }
}

  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredBounties = bounties.filter(bounty => 
    bounty.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Bounty List</h2>
      <input 
        type="text" 
        placeholder="Search by type..." 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)} 
      />
      <ul className="bounty-list">
        {filteredBounties.map((bounty) => (
          <li key={bounty._id} className="bounty-item">
            {editableBounty && editableBounty._id === bounty._id ? (
              <>
                <label>First Name:</label>
                <input
                  type="text"
                  name="fName"
                  value={editableBounty.fName}
                  onChange={handleInputChange}
                />
                <label>Last Name:</label>
                <input
                  type="text"
                  name="lName"
                  value={editableBounty.lName}
                  onChange={handleInputChange}
                />
                <label>Living:</label>
                <input
                    type="radio"
                    name="living"
                    value="true"
                    checked={editableBounty.living === true}
                    onChange={handleInputChange}
                />
                <label htmlFor="livingYes" className='radio-label'>Yes</label>

                <input
                    type="radio"
                    name="living"
                    value="false"
                    checked={editableBounty.living === false}
                    onChange={handleInputChange}
                />
                <label htmlFor="livingNo" className='radio-label'>No</label>
                <label>Bounty Amount:</label>
                <input
                  type="number"
                  name="bountyAmt"
                  value={editableBounty.bountyAmt}
                  onChange={handleInputChange}
                />
                <label>Type</label>
                <select
                  name="type"
                  value={editableBounty.type}
                  onChange={handleInputChange}
                >
                  <option value="sith">Sith</option>
                  <option value="jedi">Jedi</option>
                </select>
                <button onClick={handleSaveClick}>Save</button>
              </>
            ) : (
              <>
                Name: {bounty.fName} {bounty.lName}
                <br />
                Living: {bounty.living ? 'Yes' : 'No'}
                <br />
                Bounty Amount: ${bounty.bountyAmt}
                <br />
                Type: {bounty.type}
                <br />
                <button onClick={() => handleEditClick(bounty)}>Edit</button>
                <button onClick={() => handleDeleteClick(bounty)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
 }