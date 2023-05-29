import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import {ThemeContextProvider} from './ThemeContext';

export default function App(props) {
  
  return (
    <ThemeContextProvider>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </Router>
    </ThemeContextProvider>
  );
}
