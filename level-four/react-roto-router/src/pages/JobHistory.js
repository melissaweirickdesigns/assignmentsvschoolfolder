import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from 'react';
import History from '../components/History';

export default function JobHistory(props) {
  return (
    <div className="dashboard">
      <Navbar />
      <History />
      <Footer />
    </div>
  );
}
