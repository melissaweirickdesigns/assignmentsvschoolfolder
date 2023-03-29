import React from "react";

export default function Pet(pprops) {
    return (
      <div className="pets-div">
        <div className="pet-profile">
            <div className="pet-name">
                Pet Name: {pprops.name}
            </div>
            <div className="pet-breed">
                Pet Breed: {pprops.breed}
            </div>
        </div>
      </div>
    );
  }