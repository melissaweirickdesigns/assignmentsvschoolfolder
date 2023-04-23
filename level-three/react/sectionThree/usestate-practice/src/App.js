import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';
import MemeHistory from './components/MemeHistory';
import React from 'react';

export default function App() {
  const [memeHistory, setMemeHistory] = React.useState([]);
  const [currentMeme, setCurrentMeme] = React.useState(null);

  function addMemeToHistory(newMeme) {
    setMemeHistory(prevMemes => [...prevMemes, newMeme]);
  }

  function removeMemesFromHistory(selected) {
    setMemeHistory(prevMemes => prevMemes.filter((_, index) => !selected.includes(index)));
  }

  function saveNewTextInHistory(selected, topText, bottomText) {
    setMemeHistory(prevMemes => prevMemes.map((meme, index) => {
      if (selected.includes(index)) {
        return {
          ...meme,
          topText,
          bottomText
        };
      }
      return meme;
    }));
  }
  

  return (
    <div>
      <Header />
      <Meme setCurrentMeme={setCurrentMeme} addMemeToHistory={addMemeToHistory} />
      <MemeHistory memeHistory={memeHistory} onRemove={removeMemesFromHistory} onSave={saveNewTextInHistory} />

    </div>
  );
}
