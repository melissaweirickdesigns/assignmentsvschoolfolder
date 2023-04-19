import './App.css';
import RandomColor from './components/RandomColor';
import Button from './components/Button';
import React, { useState } from 'react';

export default function App() {
  const [color, setColor] = useState('#FFFFFF');

  return (
    <div className='app'>
      <RandomColor color={color} />
      <Button setColor={setColor} />
    </div>
  );
}
