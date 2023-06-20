import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeContextProvider } from './ThemeContext';
import Home from './Pages/Home';
import CalendarPage from './Pages/CalendarPage';
import TasksPage from './Pages/TasksPage';
import MessageCenter from './Pages/MessageCenter';

function App(props) {
  return (
    <ThemeContextProvider>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Calendar" element={<CalendarPage />} />
          <Route path="/Tasks" element={<TasksPage />} />
          <Route path="/MessageCenter" element={<MessageCenter />} />
        </Routes>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
