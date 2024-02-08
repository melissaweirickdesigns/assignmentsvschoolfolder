import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

function PostItem({ post, fetchMyPosts }) {
    const { userToken, updatePost, deletePost, errMsg } = useContext(UserContext);
    const [editMode, setEditMode] = useState(false);
    const [editedPost, setEditedPost] = useState({ title: post.title, description: post.description });

    const handleUpdate = async () => {
        const response = await updatePost(post._id, editedPost);
        if (response.success) {
            console.log('Update successful:', response.updatedPost);
            setEditMode(false); // Exit edit mode
            fetchMyPosts(); // Refresh posts list
        } else {
            console.error('Error updating the post:', response.message);
            // Now relies on errMsg from UserContext for error feedback
        }
    };

    const handleDelete = async () => {
        const response = await deletePost(post._id);
        if (response.success) {
            console.log('Post deleted successfully');
            fetchMyPosts(); // Refresh the list of posts to reflect the deletion
        } else {
            console.error('Error deleting the post:', response.message);
            // Now relies on errMsg from UserContext for error feedback
        }
    };

    return (
        <div className='post-item'>
            {errMsg && <p className="error-message">{errMsg}</p>}
            {editMode ? (
                <div>
                    {/* Edit fields */}
                    <div className="edit-field">
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={editedPost.title}
                            onChange={(e) => setEditedPost({...editedPost, title: e.target.value})}
                        />
                    </div>
                    <div className="edit-field">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            name="description"
                            value={editedPost.description}
                            onChange={(e) => setEditedPost({...editedPost, description: e.target.value})}
                        />
                    </div>
                    <button onClick={handleUpdate}>Save Changes</button>
                    <button onClick={() => setEditMode(false)}>Cancel</button>
                </div>
            ) : (
                <>
                    {/* Display post */}
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <button onClick={() => setEditMode(true)}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </>
            )}
        </div>
    );
}

export default PostItem;
