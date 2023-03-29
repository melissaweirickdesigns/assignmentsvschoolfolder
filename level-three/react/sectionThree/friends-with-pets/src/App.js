import './App.css';
import React from 'react';
import FriendList from './components/FriendList';

export default function App() {
    return (
    <div className='main-div'>
      <h1 className='title'>Friends With Pets</h1>
      <FriendList />
    </div>
  );
}
