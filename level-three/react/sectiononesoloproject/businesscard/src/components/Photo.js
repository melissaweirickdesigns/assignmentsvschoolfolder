import React from 'react';
import "../index.css"

export default function Photo() {
    return (
        <img src={require("../photos/melissaweirick.jpg")} alt="Melissa Weirick" className='photo'/>      
    )
}