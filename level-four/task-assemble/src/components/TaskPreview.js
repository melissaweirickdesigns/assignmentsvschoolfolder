import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TaskPreview() {
    const [showHighPriority, setShowHighPriority] = useState(true);
    const [showMedPriority, setShowMedPriority] = useState(false);
    const [showLowPriority, setShowLowPriority] = useState(false);

    const handlePriorityButtonClick = (priority) => {
        if (priority === 'priority-high') {
            setShowHighPriority(true);
            setShowMedPriority(false);
            setShowLowPriority(false);
        } else if (priority === 'priority-med') {
            setShowHighPriority(false);
            setShowMedPriority(true);
            setShowLowPriority(false);
        } else if (priority === 'priority-low') {
            setShowHighPriority(false);
            setShowMedPriority(false);
            setShowLowPriority(true);
        }
    };

    return (
        <>
            <div className="priority-preview-section">
                <h3>Top Tasks Preview
                <Link to="/Tasks">
                <button name='gototaskspage'>Go To Tasks</button>
                </Link>
                </h3>
                <div className="combined-priority">
                <div className="priority-levl-btns-section">
                    <button
                        className="prioritybtn"
                        name="priority-high"
                        onClick={() => handlePriorityButtonClick('priority-high')}
                    >
                        Priority: HIGH
                    </button>
                    <button
                        className="prioritybtn"
                        name="priority-med"
                        onClick={() => handlePriorityButtonClick('priority-med')}
                    >
                        Priority: MEDIUM
                    </button>
                    <button
                        className="prioritybtn"
                        name="priority-low"
                        onClick={() => handlePriorityButtonClick('priority-low')}
                    >
                        Priority: LOW
                    </button>
                </div>
                <div className="priority-level-window">
                    {showHighPriority && (
                        <>
                            <div className="high-priority priority">
                                <h5>Update Hubspot Contacts</h5>
                                <h6>Due June 30th</h6>
                            </div>
                            <div className="high-priority priority">
                                <h5>Finish Website Updates for HPROF</h5>
                                <h6>Due June 30th</h6>
                            </div>
                            <div className="high-priority priority">
                                <h5>Fix Wherefour Inventory Tracking</h5>
                                <h6>Due June 30th</h6>
                            </div>
                        </>
                    )}
                    {showMedPriority && (
                        <>
                            <div className="med-priority priority">
                                <h5>Schedule Amazon FBA Inventory Replenishment</h5>
                                <h6>Due June 21st</h6>
                            </div>
                            <div className="med-priority priority">
                                <h5>Schedule International Shipment for Bergen</h5>
                                <h6>Due June 20th</h6>
                            </div>
                            <div className="med-priority priority">
                                <h5>Add Photos to Opal</h5>
                                <h6>Due June 30th</h6>
                            </div>
                        </>
                    )}
                    {showLowPriority && (
                        <>
                            <div className="low-priority priority">
                                <h5>Clean Front Office for cGMP Audit</h5>
                                <h6>Due June 30th</h6>
                            </div>
                            <div className="low-priority priority">
                                <h5>Clean up Helpscout Tickets</h5>
                                <h6>Due June 30th</h6>
                            </div>
                            <div className="low-priority priority">
                                <h5>Finish COGS Project</h5>
                                <h6>Due June 30th</h6>
                            </div>
                        </>
                    )}
                </div>
                </div>
            </div>
        </>
    );
}
