import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from 'react';
import CalendarView from '../components/CalendarView';

export default function Schedule() {

    return (
      <div className="home">
        <Navbar />
        <CalendarView />
        <Footer />
      </div>
    );
  }