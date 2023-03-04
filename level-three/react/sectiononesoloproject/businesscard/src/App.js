import React from 'react';
import ReactDOM from 'react-dom/client';
import Bio from "./components/Bio"
import Photo from "./components/Photo"
import SocialLinks from './components/SocialLinks';
import 'boxicons'
import "./index.css"

export default function App() {
  return (
    <div className="container">
        <Photo />
        <Bio />
        <SocialLinks />
    </div>
  )
}