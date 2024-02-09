import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';

function CurrentSops() {
    const [sops, setSops] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const { userToken, fetchSops, errMsg } = useContext(UserContext);

    useEffect(() => {
        if (userToken) {
            (async () => {
                const response = await fetchSops();
                if (response.success) {
                    const activeSops = response.sops.filter(sop => !sop.archivedDate);
                    setSops(activeSops);
                }
            })();
        }
    }, [userToken, fetchSops]);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const handleClearSearch = () => {
        setSearchQuery('');
    };

    const filteredSops = searchQuery.trim().length > 0 ? sops.filter(sop => {
        const sopData = [
            sop._id,
            sop.title.toLowerCase(),
            sop.purpose.toLowerCase(),
            sop.background.toLowerCase(),
            sop.keywords.join(', ').toLowerCase(),
            sop.guidelines.toLowerCase(),
            formatDate(sop.dateCreated).toLowerCase(),
            formatDate(sop.dateEffective).toLowerCase(),
            sop.createdBy.toString().toLowerCase(),
        ].join(' ');
    
        return sopData.includes(searchQuery);
    }) : sops;

    return (
        <div className="sops-container">
            <h1>Current Sops</h1>
            {errMsg && <p className="error-message">{errMsg}</p>}
            <div>
                <input
                    type="text"
                    placeholder="Search SOPs..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    style={{ marginBottom: '10px', padding: '10px', width: 'calc(100% - 20px)' }}
                />
                <button onClick={handleClearSearch} style={{ padding: '10px', marginLeft: '10px' }}>Clear Search</button>
            </div>
            <ul>
                {filteredSops.map(sop => (
                    <li key={sop._id}>
                        <h2>{sop.title}</h2>
                        <p><strong>ID:</strong> {sop._id}</p>
                        <p><strong>Date Created:</strong> {formatDate(sop.dateCreated)}</p>
                        <p><strong>Date Effective:</strong> {formatDate(sop.dateEffective)}</p>
                        <p><strong>Purpose:</strong> {sop.purpose}</p>
                        <p><strong>Background:</strong> {sop.background}</p>
                        <p><strong>Keywords:</strong> {sop.keywords.join(', ')}</p>
                        <p><strong>Guidelines:</strong> {sop.guidelines}</p>
                        <p><strong>Created By:</strong> {sop.createdBy}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CurrentSops;
