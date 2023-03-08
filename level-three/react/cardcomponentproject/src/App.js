import React from 'react';
import Header from "./components/Header";
import PhotoCollage from './components/PhotoCollage';
import OnlineExperiences from './components/OnlineExperiences';
import CardComponent from './components/CardComponent';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <PhotoCollage />
      <OnlineExperiences />
      <CardComponent 
        profilePicture={require("./photos/profile-photo.png")}
        reviewRating="5.0"
        numberOfReviews="6"
        country="USA"
        descrip="Life lessons with Katie Zaferes"
        pricePerPerson="$136"
      />
      <CardComponent 
        profilePicture={require("./photos/wedding-photography-1.png")}
        reviewRating="5.0"
        numberOfReviews="30"
        country="USA"
        descrip="Learn Wedding Photography"
        pricePerPerson="$125"
      />
      <CardComponent 
        profilePicture={require("./photos/mountain-bike-1.png")}
        reviewRating="4.8"
        numberOfReviews="2"
        country="USA"
        descrip="Group Mountain Biking"
        pricePerPerson="$50"
      />
    </div>
  );
}

export default App;

