import React, { useContext } from 'react';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import CurrentSops from './pages/CurrentSops';
import MyPosts from './pages/MyPosts';
import AllSops from './pages/AllSops';
import SignUp from './pages/SignUp';
import AddNewSop from './pages/AddNewSop';
import Navbar from "./pages/Navigation";
import { UserContext } from './context/UserContext'; // Import UserContext
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  const { userToken, handleLogout } = useContext(UserContext); // Use userToken from UserContext
  const isLoggedIn = !!userToken; // Determine if the user is logged in based on the token

  const handleSuccess = () => {
    console.log("Submit success!"); // You can customize this function as needed
    // Additional logic after successful submission can be added here
  };
  
  return (
    <Router>
      { userToken && <Navbar handleLogout={handleLogout} />}
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path="/currentsops" element={<ProtectedRoute userToken={userToken}><CurrentSops /></ProtectedRoute>} />
          <Route path="/allsops" element={<ProtectedRoute userToken={userToken}><AllSops /></ProtectedRoute>} />
          <Route path="/myposts" element={<ProtectedRoute userToken={userToken}><MyPosts /></ProtectedRoute>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/addnewsop" element={<ProtectedRoute userToken={userToken}><AddNewSop onSubmitSuccess={handleSuccess} /></ProtectedRoute>} />
        </Routes>
    </Router>
  );
}

export default App;
