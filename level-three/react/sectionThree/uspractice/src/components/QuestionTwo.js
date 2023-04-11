import { useState } from "react";

export default function QuestionTwo() {
  const [color, setColor] = useState('pink');

  const toggleColor = () => {
    setColor(color === 'pink' ? 'blue' : 'pink');
  };

  return (
      <div className='question-two'>
        <h6>Question 2:</h6>
        <div className="answerParagraph">
          <p>Toggle between the colors pink and blue. If the current color is pink, we want to set it to blue. If it’s currently blue, set it back to pink.</p>
          <button style={{backgroundColor: `${color}`}} onClick={toggleColor}>Change Background Color</button> 
        </div>        
      </div>
  )
}