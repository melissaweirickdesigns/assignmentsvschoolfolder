import React, { useState, useEffect } from 'react';
import BountyForm from './Sections/BountyForm';
import BountyList from './Sections/BountyList';
import "./App.css"

function App() {
    const [bounties, setBounties] = useState([]);
    const handleBountyDelete = (deletedBounty) => {
      setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== deletedBounty._id));
    };
    

    useEffect(() => {
        
        const fetchBounties = async () => {
            try {
                const response = await fetch('/bounty'); 
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setBounties(data);
            } catch (error) {
                console.error('Fetching bounties failed: ', error);
            }
        };
        fetchBounties();
    }, []);

    const handleBountyAdd = (newBounty) => {
        
        setBounties(prevBounties => [...prevBounties, newBounty]);
    };

    return (
        <div className="app-container">
            <BountyForm onBountyAdd={handleBountyAdd} />
            <BountyList bounties={bounties} />
        </div>
    );
}

export default App;
