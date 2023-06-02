import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeContextProvider } from './ThemeContext';
import Schedule from './pages/Schedule';
import JobHistory from './pages/JobHistory';
import Tasks from './pages/Tasks';

export default function App(props) {
  return (
    <ThemeContextProvider>
      <Router>
        <Routes>
          <Route index element={<Schedule />} />
          <Route path="/JobHistory" element={<JobHistory />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </Router>
    </ThemeContextProvider>
  );
}

