import React from 'react';
import Login from './pages/Login'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import MainPage from './pages/MainPage';
import AdminPanel from './pages/AdminPanel'
import AddEmployee from './pages/AddEmployee';
import UserManage from './pages/UserManage';


function App() {
  return (
    <Router>
            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/add" element={<AddEmployee />} />
                <Route path="/userlist" element={<UserManage />} />
                
            </Routes>
        </Router>
  );
}

export default App;
