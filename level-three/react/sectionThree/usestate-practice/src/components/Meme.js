import React from "react";

export default function Meme({setCurrentMeme, addMemeToHistory}) { 
  const [memeImage, setMemeImage] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });
  const [allMemeImages, setAllMemeImages] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(memeObject => setAllMemeImages(memeObject.data.memes))
  }, []);

  function stopRefresh(event) {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    const newMeme = {
      topText: memeImage.topText,
      bottomText: memeImage.bottomText,
      randomImage: url
    };
    setCurrentMeme({...newMeme}); 
    setMemeImage(prevMeme => ({
      ...prevMeme,
      randomImage: url 
    }));
  }
  

  function handleChange(event) {
    const {name, value} = event.target
    setMemeImage(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  function handleAddToHistory(event) {
    event.preventDefault();
    const { topText, bottomText, randomImage } = memeImage;
    const newMeme = { topText, bottomText, randomImage };
    addMemeToHistory(newMeme);
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
      <div className="center-cont">
        <div className="preview-header">Preview of your Meme:</div>  
        <div className="imgTextCont">      
          <img src={memeImage.randomImage} className="meme--image" alt="Randomly Generated"/>
          <div className="meme--text">
            <h2 className="top memeText">{memeImage.topText}</h2>
            <h2 className="bottom memeText">{memeImage.bottomText}</h2>
          </div>
        </div>
      </div>
      <div className="add-to-history">
        <button className="add-to-history-button" onClick={handleAddToHistory}>Add to History</button>
      </div>
    </main>
  );
}
