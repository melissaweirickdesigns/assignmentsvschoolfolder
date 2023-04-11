import React from "react";
import MemeData from "../MemeData.js";

export default function Meme() { 
    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    const [allMemeImages, setAllMemeImages] = React.useState(MemeData)

  function stopRefresh(event) {
        event.preventDefault()
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMemeImage(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))  
        
    }

  return (
    <main className="memeMain">
      <form className="memeForm">
        <input type="text" className="topText" placeholder="Top Text"/>
        <input type="text" className="bottomText" placeholder="Bottom Text"/>
        <button className="submitButton" onClick={stopRefresh}>Get a new meme image 🖼</button>
      </form>
        <img src={memeImage.randomImage} className="meme--image"/>
    </main>
  );
}
