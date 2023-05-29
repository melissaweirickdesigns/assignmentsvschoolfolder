import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Main from '../components/Main';
import React from 'react';

export default function Home() {

    return (
      <div className="home">
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }