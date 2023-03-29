import React from "react";
import Pet from "./Pet";

export default function Friend(fprops) {
    const pets = fprops.pets.map(pdata => {
        return (
            <Pet 
            key={pdata.id}
            {...pdata}
            />
        )
    })
    return (
      <div>
        <div className="friend-div">
            <div className="friend-Profile">
                <div className="friend-name">
                    Name: {fprops.name}
                </div>
                <div className="friend-age">
                    Age: {fprops.age}
                </div>
            </div>
            <div className="friend-profile-pets">
                <div className="friend-pets">
                    {pets}
                </div>
            </div>
        </div>
      </div>
    );
  }