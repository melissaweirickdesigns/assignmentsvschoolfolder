import './App.css';
import Squares from './components/Squares';
import Buttons from './components/Buttons';
import { useState } from 'react';
import sound3 from "./assets/button3audio.mp3";

export default function App() {

  const [squareColors, setSquareColors] = useState(["white", "white", "white", "white"]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [timerId, setTimerID] = useState(null);
  const audio3 = new Audio(sound3);

    const handleButtonClick = (id) => {
      audio3.play();
      if (id === 1) {
        if (!buttonClicked) {
          const newColors = squareColors.map(() => {
              return Math.random() < 0.5 ? "black" : "white";
          })
          setSquareColors(newColors);
          setButtonClicked(true);

        } else {
          const newColors = squareColors.map((color) => {
              return color === "black" ? "white" : "black";
          });
          setSquareColors(newColors);
        }
      } else if (id === 2) {
        const newColors = [...squareColors];
          if (newColors[0] === "purple" && newColors[1] === "purple") {
            newColors[0] = "white";
            newColors[1] = "white";
          } else {
            newColors[0] = "purple";
            newColors[1] = "purple";
          }
          setSquareColors(newColors);
      } else if (id === 3) {
        const newColors = [...squareColors];
          if (newColors[2] === "blue") {
            newColors[2] = "white";
          } else {
            newColors[2] = "blue";
          }
          setSquareColors(newColors);
      } else if(id === 4) {
        const newColors = [...squareColors];
          if (newColors[3] === "blue") {
            newColors[3] = "white";
          } else {
            newColors[3] = "blue";
          }
          setSquareColors(newColors);
      } else if (id === 5) {
        setSquareColors((prevColors) => {
          const newColors = [...prevColors];
          newColors[0] = newColors[0] === "white" ? {prevColors} : "orange";
          if (timerId !== null) {
            clearTimeout(timerId);
          }
          const newTimerId = setTimeout(() => {
            setSquareColors(prevColors);
          }, 500);
          setTimerID(newTimerId);
          return newColors;
        });
      } else if (id === 6) {
        setSquareColors((prevColors) => {
          const newColors = [...prevColors];
          newColors[1] = newColors[1] === "white" ? {prevColors} : "orange";
          setTimeout(() => {
            setSquareColors(prevColors);
          }, 500);
          return newColors;
        });
      } else if (id === 7) {
        setSquareColors((prevColors) => {
          const newColors = [...prevColors];
          newColors[2] = newColors[2] === "white" ? {prevColors} : "orange";
          setTimeout(() => {
            setSquareColors(prevColors);
          }, 500);
          return newColors;
        });
      } else if (id === 8) {
        setSquareColors((prevColors) => {
          const newColors = [...prevColors];
          newColors[3] = newColors[3] === "white" ? {prevColors} : "orange";
          setTimeout(() => {
            setSquareColors(prevColors);
          }, 500);
          return newColors;
        });
      }
    }
  
  return (
    <div className="App">
      <Squares squareColors={squareColors}/>
      <Buttons onClick={handleButtonClick}/>
    </div>
  );
}
