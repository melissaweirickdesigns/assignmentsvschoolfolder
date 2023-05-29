import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from 'react';

export default function Dashboard(props) {

    return (
      <div className={`dashboard`}>
        <Navbar />
        Dashboard Page
        <Footer />
      </div>
    );
  }