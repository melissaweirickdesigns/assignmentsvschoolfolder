import React, { useContext } from 'react';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import CurrentIssues from './pages/CurrentIssues';
import MyPosts from './pages/MyPosts';
import SignUp from './pages/SignUp';
import AddNewIssue from './pages/AddNewIssue';
import Navbar from "./pages/Navigation";
import { UserContext } from './context/UserContext'; // Import UserContext
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  const { userToken, handleLogout } = useContext(UserContext); // Use userToken from UserContext
  const isLoggedIn = !!userToken; // Determine if the user is logged in based on the token

  return (
    <Router>
      { userToken && <Navbar handleLogout={handleLogout} />}
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path="/currentissues" element={<ProtectedRoute userToken={userToken}><CurrentIssues /></ProtectedRoute>} />
          <Route path="/myposts" element={<ProtectedRoute userToken={userToken}><MyPosts /></ProtectedRoute>} />
          <Route path="/signup" element={<ProtectedRoute userToken={userToken}><SignUp /></ProtectedRoute>} />
          <Route path="/addnewissue" element={<ProtectedRoute userToken={userToken}><AddNewIssue /></ProtectedRoute>} />
        </Routes>
    </Router>
  );
}

export default App;
