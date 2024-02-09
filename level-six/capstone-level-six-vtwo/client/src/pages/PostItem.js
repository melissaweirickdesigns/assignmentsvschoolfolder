import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

function PostItem({ post, editing, startEditingPost, cancelEditingPost, fetchMyPosts }) {
    const { errMsg } = useContext(UserContext);
    const [editMode, setEditMode] = useState(false);
    const {dateEffective, archivedDate, replacedById } = post;

    return (
        <div className='post-item'>
            {errMsg && <p className="error-message">{errMsg}</p>}
            {!editMode && (
                <>
                    <h3>{post.title}</h3>
                    <p><strong>ID:</strong> {post._id}</p>
                    <p><strong>Purpose:</strong> {post.purpose}</p>
                    <p><strong>Background:</strong> {post.background}</p>
                    <p><strong>Keywords:</strong> {post.keywords.join(', ')}</p>
                    <p><strong>Guidelines:</strong> {post.guidelines}</p>
                    {!archivedDate && (
                        <p><strong>Date Effective:</strong> {new Date(dateEffective).toLocaleDateString()}</p>
                    )}
                    {archivedDate && (
                        <>
                            <p><strong>Archived Date:</strong> {new Date(archivedDate).toLocaleDateString()}</p>
                            <p><strong>Replaced by SOP:</strong> {replacedById}</p>
                        </>
                    )}
                    {!archivedDate && !editing && ( // Check if SOP is not archived and not in edit mode
                    <button onClick={startEditingPost}>Edit</button>
                    )}
                    {editing && (
                        <button onClick={cancelEditingPost}>Cancel</button>
                    )}
                </>
            )}
        </div>
    );
}

export default PostItem;
