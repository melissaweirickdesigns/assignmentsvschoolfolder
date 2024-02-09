import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';

function AllSops() {
    const [sops, setSops] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const { userToken, fetchSops, errMsg } = useContext(UserContext);

    useEffect(() => {
        if (userToken) {
            (async () => {
                const response = await fetchSops();
                if (response.success) {
                    // No filtering here to get both active and archived SOPs
                    setSops(response.sops);
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
            sop.createdBy.toString(),
            sop.archivedDate ? formatDate(sop.archivedDate).toLowerCase() : '',
            sop.replaceById ? sop.replaceById.toString() : '',
        ].join(' ');
    
        return sopData.includes(searchQuery);
    }) : sops;

    return (
        <div className="sops-container">
            <h1>All SOPs</h1>
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
                        {sop.archivedDate && (
                            <>
                                <p><strong>Archived Date:</strong> {formatDate(sop.archivedDate)}</p>
                                <p><strong>Replaced By ID:</strong> {sop.replacedById}</p>
                            </>
                        )}                
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AllSops;
