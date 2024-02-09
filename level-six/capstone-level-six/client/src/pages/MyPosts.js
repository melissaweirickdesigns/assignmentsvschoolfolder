import React, { useState, useEffect, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import PostItem from './PostItem';
import AddNewSop from './AddNewSop';

function MyPosts() {
    const [myPosts, setMyPosts] = useState([]);
    const [isCreatingNewVersion, setIsCreatingNewVersion] = useState(false);
    const [editingPostId, setEditingPostId] = useState(null);
    const navigate = useNavigate();
    const { user, userToken, handleAuthErr, fetchMyPosts } = useContext(UserContext);
    const [selectedTab, setSelectedTab] = useState('active');

    const memoizedFetchMyPosts = useMemo(() => fetchMyPosts, [fetchMyPosts]);

    const startEditingPost = (postId) => {
        setIsCreatingNewVersion(true);
        setEditingPostId(postId);
    };

    const cancelEditingPost = () => {
        setIsCreatingNewVersion(false);
        setEditingPostId(null);
    };

    useEffect(() => {
        if (user && user._id) {
            memoizedFetchMyPosts(user._id).then(posts => {
                if (posts) {
                    setMyPosts(posts);
                }
            });
        }
    }, [user, memoizedFetchMyPosts]);
  
    return (
        <div className='myposts-container'>
            <div>
                <h1>My Posts</h1>
                <div>
                    <button onClick={() => setSelectedTab('active')}>Active SOPs</button>
                    <button onClick={() => setSelectedTab('archived')}>Archived SOPs</button>
                </div>
                <div>
                    {selectedTab === 'active' ? (
                        <ul>
                            {myPosts.filter(post => !post.archivedDate).map(post => (
                                (editingPostId === null || editingPostId === post._id) && // Only render SOP if not being edited
                                <PostItem 
                                    key={post._id}
                                    post={post}
                                    editing={editingPostId === post._id}
                                    showEditButton={true}
                                    startEditingPost={() => startEditingPost(post._id)}
                                    cancelEditingPost={cancelEditingPost}
                                    fetchMyPosts={fetchMyPosts}
                                    userToken={userToken}
                                />
                            ))}
                        </ul>
                    ) : (
                        <ul>
                            {myPosts.filter(post => post.archivedDate).map(post => (
                                <PostItem 
                                    key={post._id}
                                    post={post}
                                    showEditButton={false}
                                    fetchMyPosts={fetchMyPosts}
                                />
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            {isCreatingNewVersion && (
                <AddNewSop 
                    previousSopId={editingPostId} 
                    onSubmitSuccess={() => {
                        setIsCreatingNewVersion(false);
                        setEditingPostId(null); 
                        fetchMyPosts(user._id);
                        
                    }} 
                />
            )}
        </div>
    );
}

export default MyPosts;
