import React, { useState, createContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext({
    user: {},
    userToken: "",
    issues: [],
    signup: () => {},
    login: () => {},
    addNewIssue: () => {},
    fetchIssues: () => {},
    deletePost: () => {},
    updateUserState: () => {},
    handleLogout: () => {},
    resetAuthErr: () => {},
  });

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
        issues: []
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

    const addNewIssue = async (issueData) => {
        try {
            const response = await userAxios.post('http://localhost:9000/api/addnewissue/', issueData);            
            updateUserState(prevState => ({
                ...prevState,
                issues: [...prevState.issues, response.data]
            }));
    
            return true;
        } catch (error) {
            console.error('Error adding new issue:', error); // Optional: Keep for debugging
            const errorMessage = error.response && error.response.data && error.response.data.message ? error.response.data.message : "An error occurred. Please try again later.";
            handleAuthErr(errorMessage); // Use handleAuthErr for error handling
            return false;
        }
    };

    const fetchIssues = async () => {
        try {
            const response = await userAxios.get(`http://localhost:9000/api/currentissues`);
            const sortedIssues = response.data.sort((a, b) => b.upvotesCount - a.upvotesCount);
            return { success: true, issues: sortedIssues };
        } catch (error) {
            console.error('Error fetching issues:', error); // Optional: Keep for debugging
            const errorMessage = error.response && error.response.data && error.response.data.message ? error.response.data.message : "An error occurred while fetching issues.";
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
                issues: [] 
            }
        );
    };

    return (
        <UserContext.Provider value={{ ...userState, signup, login, addNewIssue, fetchIssues, deletePost, updateUserState, handleLogout, resetAuthErr }}>
            {children}
        </UserContext.Provider>
    );
}
