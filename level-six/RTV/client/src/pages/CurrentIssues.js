import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavigationDropdown from './Navigation';

function CurrentIssues() {
    const [issues, setIssues] = useState([]);
    const [visibleCommentsIssueId, setVisibleCommentsIssueId] = useState(null);
    const [comments, setComments] = useState({});
    const [showCommentForm, setShowCommentForm] = useState({});
    const [newComment, setNewComment] = useState({}); 
    const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await axios.get('http://localhost:9002/api/currentissues', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setIssues(response.data.sort((a, b) => (b.upvotesCount - b.downvotesCount) - (a.upvotesCount - a.downvotesCount)));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);    

    const handleVote = async (issueId, voteType) => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post(`http://localhost:9002/api/votes/vote`, {
                issueId, 
                voteType
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
    
            setIssues(prevIssues => {
                return prevIssues.map(issue => 
                    issue._id === issueId ? { ...issue, ...response.data } : issue
                )
                .sort((a, b) => (b.upvotesCount - b.downvotesCount) - (a.upvotesCount - a.downvotesCount));
            });
        } catch (error) {
            console.error('Error updating vote:', error);
        }
    };
    

    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleLogout = () => {
        navigate('/login'); 
    };

    const toggleComments = async (issueId) => {
        if (visibleCommentsIssueId === issueId) {
            // Hide comments if already visible
            setVisibleCommentsIssueId(null);
        } else {
            // Show comments
            setVisibleCommentsIssueId(issueId);
    
            // Check if comments for this issue are already loaded
            if (!comments[issueId]) {
                // Fetch comments since they are not loaded
                try {
                    const token = localStorage.getItem('token');
                    const response = await axios.get(`http://localhost:9002/api/comments/${issueId}`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
    
                    // Update the comments state with the new comments
                    setComments(prevComments => ({
                        ...prevComments, 
                        [issueId]: response.data
                    }));
                } catch (error) {
                    console.error('Error fetching comments:', error);
                }
            }
        }
    };

    const handleAddComment = (issueId) => {
        setShowCommentForm(prevShow => ({...prevShow, [issueId]: !prevShow[issueId]}));
    };

    const submitComment = async (issueId, commentText) => {
        if (!commentText.trim()) {
            console.log("Comment text is empty");
            return;
        }
    
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`http://localhost:9002/api/comments/${issueId}`, {
                content: commentText
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
    
            setComments(prevComments => ({
                ...prevComments,
                [issueId]: [...(prevComments[issueId] || []), response.data]
            }));
    
            // Update the issues state to reflect the new comment count
            setIssues(prevIssues => prevIssues.map(issue => 
                issue._id === issueId ? { ...issue, commentsCount: issue.commentsCount + 1 } : issue
            ));
    
            setShowCommentForm(prevShow => ({ ...prevShow, [issueId]: false }));
            setNewComment(prevComment => ({ ...prevComment, [issueId]: '' }));
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
    };
    
    
    

    return (
        <div className="issues-container">
            <NavigationDropdown handleNavigation={handleNavigation} handleLogout={handleLogout} />
            <h1>Current Issues</h1>
            <ul>
                {issues.map(issue => (
                    <li key={issue._id}>
                        <h2>{issue.title}</h2>
                        <p>{issue.description}</p>
                        <button onClick={() => handleVote(issue._id, 'upvote')}>Upvote</button>
                        <button onClick={() => handleVote(issue._id, 'downvote')}>Downvote</button>
                        <p>Votes: {issue.upvotesCount - issue.downvotesCount}</p>
                        <p style={{cursor: 'pointer'}} onClick={() => toggleComments(issue._id)}>
                            Comments: {issue.commentsCount}
                        </p>
                        {visibleCommentsIssueId === issue._id && (
                            <>
                                <ul>
                                    {comments[issue._id] && comments[issue._id].map(comment => (
                                        <li key={comment._id}>{comment.content}</li>
                                    ))}
                                </ul>
                                <button onClick={() => handleAddComment(issue._id)}>Add Comment</button>
                                {showCommentForm[issue._id] && (
                                    <div>
                                        <textarea
                                            value={newComment[issue._id] || ''}
                                            onChange={(e) => setNewComment({...newComment, [issue._id]: e.target.value})}
                                        />
                                        <button onClick={() => submitComment(issue._id, newComment[issue._id])}>Submit</button>
                                    </div>
                                )}
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CurrentIssues;