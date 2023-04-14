import { useState } from "react";
import Square from "./Square";

export default function Squares({squareColors}) {
    
    return (
        <div>
            {squareColors.map((color) => (
                <Square backgroundColor={color}/>
            ))}
        </div>
    )
}