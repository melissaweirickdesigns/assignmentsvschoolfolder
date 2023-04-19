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

    function handleChange(event) {
      const {name, value} = event.target
      setMemeImage(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
    }

  return (
    <main className="memeMain">
      <form className="memeForm">
        <input 
          type="text" 
          className="topText" 
          placeholder="Top Text"
          name="topText"
          value={memeImage.topText}
          onChange={handleChange}
        />
        <input 
          type="text" 
          className="bottomText" 
          placeholder="Bottom Text"
          name="bottomText"
          value={memeImage.bottomText}
          onChange={handleChange}
        />
        <button className="submitButton" onClick={stopRefresh}>Get a new meme image 🖼</button>
      </form>
      <div className="imgTextCont">        
        <img src={memeImage.randomImage} className="meme--image" />
        <div className="meme--text">
        <h2 className="top">{memeImage.topText}</h2>
        <h2 className="bottom">{memeImage.bottomText}</h2>
        </div>
      </div>
    </main>
  );
}
