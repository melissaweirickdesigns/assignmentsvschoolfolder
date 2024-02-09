import React, { useState, createContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider({ children }) {
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        userToken: localStorage.getItem("token") || "",
        sops: []
    };

    const [userState, setUserState] = useState(initState);

    const updateUserState = (newState) => {
        setUserState(prevState => ({ ...prevState, ...newState }));
    };

    function handleAuthErr(errMsg){
        setUserState(prevState => ({
            ...prevState, errMsg
        }))
    }

    function resetAuthErr(){
        setUserState(prevState => ({
            ...prevState, errMsg: ""
        }))
    }

    const signup = async (credentials) => {
        try {
            const response = await userAxios.post('http://localhost:9000/auth/signup', credentials);
            updateUserState({
                user: response.data.user,
                userToken: response.data.token
            });
            return true;
        } catch (error) {
            const errorMessage = error.response && error.response.data && error.response.data.message ? error.response.data.message : "An error occurred. Please try again later.";
            handleAuthErr(errorMessage);
            return false;
        }
    };
    

    const login = async (credentials) => {
        try {
            const response = await userAxios.post('http://localhost:9000/auth/login', credentials);
            const { token, user } = response.data;
            updateUserState({
                user,
                userToken: token
            });
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            return true;
        } catch (error) {
            const errorMessage = error.response && error.response.data && error.response.data.errMsg ? error.response.data.errMsg : "Username or Password are Incorrect. Please Try Again.";
            handleAuthErr(errorMessage);
            return false;
        }
    };

    const addNewSop = async (sopData, previousSopId) => {
        try {
            const response = await userAxios.post('http://localhost:9000/api/addnewsop/', sopData);
            if (response.data && previousSopId) {
                await userAxios.put(`http://localhost:9000/api/myposts/${previousSopId}`, {
                    archivedDate: new Date(),
                    replacedById: response.data._id,
                });
            }
            updateUserState(prevState => ({
                ...prevState,
                sops: [...prevState.sops, response.data]
            }));
            return true;
        } catch (error) {
            console.error('Error in addNewSop:', error);
            handleAuthErr('Failed to add or update SOP');
            return false;
        }
    };
    

    const fetchSops = async () => {
        try {
            // Fetch the list of SOPs from the server
            const response = await userAxios.get(`http://localhost:9000/api/currentsops`);
            
            // Assuming no sorting is needed, just return the fetched SOPs
            return { success: true, sops: response.data };
        } catch (error) {
            console.error('Error fetching sops:', error); // Optional: Keep for debugging
            
            // Extract the error message for detailed error handling
            const errorMessage = error.response && error.response.data && error.response.data.message 
                                 ? error.response.data.message 
                                 : "An error occurred while fetching sops.";
            
            // Handle the error using a dedicated error handler function
            handleAuthErr(errorMessage); 
            
            // Return failure status with the error message
            return { success: false, message: errorMessage };
        }
    };
    
    const fetchMyPosts = async (userId) => {
        try {
            const { userToken } = userState; // Access userToken from userState
            const response = await userAxios.get(`http://localhost:9000/api/myposts/posts/${userId}`, {
                headers: { Authorization: `Bearer ${userToken}` }
            });
            return response.data;
        } catch (err) {
            console.error('Error fetching my posts:', err);
            handleAuthErr('Failed to fetch posts. Please try again later.'); // Use handleAuthErr
            return null;
        }
    };

    const updatePost = async (postId, postData) => {
        try {
            const response = await userAxios.put(`http://localhost:9000/api/myposts/${postId}`, postData);
            return { success: true, updatedPost: response.data };
        } catch (error) {
            console.error('Error updating post:', error); // Optional: Keep for debugging
            const errorMessage = error.response && error.response.data && error.response.data.message ? error.response.data.message : "An error occurred. Please try again later.";
            handleAuthErr(errorMessage); // Use handleAuthErr for error handling
            return { success: false, message: errorMessage };
        }
    };
    
    
    

    const deletePost = async (postId) => {
        try {
            await userAxios.delete(`http://localhost:9000/api/myposts/${postId}`);
            return { success: true };
        } catch (error) {
            console.error('Error deleting post:', error); // Optional: Keep for debugging
            const errorMessage = error.response && error.response.data && error.response.data.message ? error.response.data.message : "An error occurred. Please try again later.";
            handleAuthErr(errorMessage); // Use handleAuthErr for error handling
            return { success: false, message: errorMessage };
        }
    };
    
    

    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        updateUserState(
            { 
                user: {}, 
                userToken: "", 
                sops: [] 
            }
        );
    };

    return (
        <UserContext.Provider value={{ ...userState, signup, login, addNewSop, fetchSops, updatePost, deletePost, updateUserState, handleLogout, resetAuthErr, fetchMyPosts }}>
            {children}
        </UserContext.Provider>
    );
}
