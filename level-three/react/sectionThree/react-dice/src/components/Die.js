import React from "react";
import { useState } from "react";

export default function Die({ number, selected, onClick }) {
 const [hovered, setHoverd] = useState(false);

 const holdDiceStyle = {
    backgroundColor: selected ? "lightblue" : hovered ? "rgb(71, 184, 146)" : "white"
 };

 //this checks if the dice is selected, if it is selected then the background color is blue, if it is not selected but the mouse is hovered then it is the rgb color, if it is not selected or hovered then the background is white.

  return (
    <button 
        className="dice" 
        style={holdDiceStyle} 
        onClick={onClick}

        //this allows for the onclick function call on Dicebox to work properly, without it, the onClick={() => saveDie(id)} would not run properly to save the dies number for future rolls

        onMouseEnter={() => setHoverd(true)}
        onMouseLeave={() => setHoverd(false)}
    >
        {number}
    </button>
  );
}