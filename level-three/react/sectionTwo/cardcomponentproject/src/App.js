import React from 'react';
import Header from "./components/Header";
import PhotoCollage from './components/PhotoCollage';
import OnlineExperiences from './components/OnlineExperiences';
import CardComponent from './components/CardComponent';
import CardData from './CardData';
import './App.css';

export default function App() {
  const cardElements = CardData.map(cdata => {
    return (
      <CardComponent 
        key={cdata.id}
        {...cdata}
        // or item={cdata}
      />
    )
  })
  return (
    <div className="container">
      <Header />
      <PhotoCollage />
      <OnlineExperiences />
      <div className="card--container">
        {cardElements}
      </div>  
    </div>
  );
}

// profilePicture={cdata.profilePicture}
// reviewRating={cdata.reviewRating}
// numberOfReviews={cdata.numberOfReviews}
// country={cdata.country}
// descrip={cdata.descrip}
// pricePerPerson={cdata.pricePerPerson}
// openSpots={cdata.openSpots}