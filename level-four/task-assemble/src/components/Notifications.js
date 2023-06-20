import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Notifications() {
    const [messageCount] = useState(3);
    const [commentCount] = useState(0);
    const [approvalRequestCount] = useState(1);

    return (
        <>
            <div className="message-section">
                <h3>Message Center</h3>
                <div className="notification-preview">
                    <div className="messages-link">
                        <NavLink to="/MessageCenter" activeClassName="active">
                            Messages ({messageCount})
                        </NavLink>
                    </div>
                    <div className="comments-link">
                        <NavLink to="/MessageCenter" activeClassName="active">
                            Comments ({commentCount})
                        </NavLink>
                    </div>
                    <div className="approvalrequests-link">
                        <NavLink
                            to="/MessageCenter"
                            activeClassName="active"
                        >
                            Approval Requests ({approvalRequestCount})
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}
