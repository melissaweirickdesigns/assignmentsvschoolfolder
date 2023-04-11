import { useState } from "react";

export default function QuestionOne() {
  const [color, setColor] = useState("pink")

  return (
      <div className='question-one'>
        <h6>Question 1:</h6>
        <div className="answerParagraph">
          <p>Pass in a new color of your choosing in place of the old one.</p>
          <button style={{backgroundColor: `${color}`}} onClick={() => setColor("green")
          }>Change Background Color</button>
        </div>         
      </div>
  );
}