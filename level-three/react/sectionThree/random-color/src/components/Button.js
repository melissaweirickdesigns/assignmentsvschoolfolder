import React from "react";
import { getRandomColor } from "../components/RandomColor";

export default function Button({ setColor }) {

    const handleClick = () => {
        getRandomColor().then((color) => {
            setColor(color);
        });
    };
      

    return (
        <button 
            type="submit"
            name="submit"
            value="Submit"
            onClick={handleClick}
        >Get Random Color</button>
    )
}
