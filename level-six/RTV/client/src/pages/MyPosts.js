import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavigationDropdown from './Navigation';

function MyPosts() {
    const [myPosts, setMyPosts] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editedPost, setEditedPost] = useState({ title: '', description: '' });
    const navigate = useNavigate();

    useEffect(() => {
        fetchMyPosts();
    }, []);

    const fetchMyPosts = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.get('http://localhost:9002/api/currentissues', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setMyPosts(response.data);
        } catch (error) {
            console.error('Error fetching my posts:', error);
        }
    };

    const handleDelete = async (issueId) => {
        const token = localStorage.getItem('token');
        try {
            await axios.delete(`http://localhost:9002/api/currentissues/${issueId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            fetchMyPosts(); // Refresh the posts
        } catch (error) {
            console.error('Error deleting the post:', error);
        }
    };

    const startEditing = (post) => {
        setEditingId(post._id);
        setEditedPost({ title: post.title, description: post.description });
    };

    const handleEditChange = (e) => {
        setEditedPost({ ...editedPost, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (issueId) => {
        const token = localStorage.getItem('token');
        try {
            await axios.put(`http://localhost:9002/api/currentissues/${issueId}`, editedPost, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setEditingId(null); // Exit edit mode
            fetchMyPosts(); // Refresh posts
        } catch (error) {
            console.error('Error updating the post:', error);
        }
    };
  

    // Function to navigate to the AddNew page
    const handleAddNewPost = () => {
        navigate('/addnew'); // Replace '/addnew' with the actual route to your AddNew page
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleLogout = () => {
        navigate('/'); 
    };

    return (
        <div className='myposts-container'>
            <div className='myposts-container'>
            <NavigationDropdown handleNavigation={handleNavigation} handleLogout={handleLogout} />
            <h2>My Posts</h2>
            <button onClick={handleAddNewPost} className='add-new-post-button'>Add New Post</button>
            <div className='posts-list'>
                {myPosts.length > 0 ? myPosts.map(post => (
                    <div key={post._id} className='post-item'>
                        {editingId === post._id ? (
                            <div>
                                {/* Label and input field for title */}
                                <div className="edit-field">
                                    <label htmlFor="title">Title:</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={editedPost.title}
                                        onChange={handleEditChange}
                                    />
                                </div>

                                {/* Label and textarea for content */}
                                <div className="edit-field">
                                    <label htmlFor="description">Description:</label>
                                    <textarea
                                        name="description"
                                        value={editedPost.description}
                                        onChange={handleEditChange}
                                    />
                                </div>

                                <button onClick={() => handleUpdate(post._id)}>Save Changes</button>
                                <button onClick={() => setEditingId(null)}>Cancel</button>
                            </div>
                        ) : (
                            <>
                                <h3>{post.title}</h3>
                                <p>{post.description}</p>
                                <button onClick={() => startEditing(post)}>Edit</button>
                                <button onClick={() => handleDelete(post._id)}>Delete</button>
                            </>
                        )}
                    </div>
                )) : (
                    <p>You have not made any posts yet.</p>
                )}
            </div>
        </div>
        </div>
    );
}

export default MyPosts;