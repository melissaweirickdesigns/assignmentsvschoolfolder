import React, { useState, useEffect, useCallback, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import PostItem from './PostItem';

function MyPosts() {
    const [myPosts, setMyPosts] = useState([]);
    const [editingPost, setEditingPost] = useState(null);
    const navigate = useNavigate();
    const { user, userToken, handleAuthErr } = useContext(UserContext); // Include handleAuthErr
    const { user: { username } } = useContext(UserContext);

    const fetchMyPosts = useCallback(async () => {
        if (!userToken || !user._id) {
            console.error("User not authenticated");
            handleAuthErr('You must be logged in to view your posts.'); // Use handleAuthErr
            return;
        }

        try {
            const response = await axios.get(`http://localhost:9000/api/myposts/posts/${user._id}`, {
                headers: { Authorization: `Bearer ${userToken}` }
            });
            setMyPosts(response.data);
        } catch (err) {
            console.error('Error fetching my posts:', err);
            handleAuthErr('Failed to fetch posts. Please try again later.'); // Use handleAuthErr
        }
    }, [user._id, userToken, handleAuthErr]); 

    useEffect(() => {
        fetchMyPosts();
    }, [fetchMyPosts]);
  
    return (
        <div className='myposts-container'>
            <h2>{username}'s Posts</h2>
            <button onClick={() => navigate('/addnewissue')} className='add-new-post-button'>Add New Post</button>
            <div className='posts-list'>
                {myPosts.length > 0 ? (
                    myPosts.map(post => (
                        <PostItem 
                            key={post._id} 
                            post={post} 
                            editingPost={editingPost} 
                            setEditingPost={setEditingPost} 
                            fetchMyPosts={fetchMyPosts}
                            userToken={userToken}
                        />
                    ))
                ) : (
                    <p>You have not made any posts yet.</p>
                )}
            </div>
        </div>
    );
}

export default MyPosts;
