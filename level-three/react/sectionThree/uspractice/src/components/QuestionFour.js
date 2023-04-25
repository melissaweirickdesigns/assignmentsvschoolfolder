import { useState } from "react";

export default function QuestionFour() {

  //a.
    //from: 
        // const [colors, setColors] = setState(["pink", "blue"])

        // setColors(prevColors => {
        // 	return [...prevColors, "green"]
        // })
    //to:
        // const [colors, setColors] = setState(["pink", "blue"])
        // setColors(prevColors => [...prevColors, "green"])

//b.
    //from:
    // const [countObject, setCountObject] = setState({
    //     count: 0
    // })
    
    // setCountObject(prevState=> {
    //     return {
    //         count: prevState.count + 1
    //     }
    // })       
    
    //to:
    // const [countObject, setCountObject] = setState({
    //     count: 0
    // })
    
    // setCountObject(prevState => ({
    //     count: prevState.count + 1
    // }))

    

  return (
      <div className='question-four'>
        <h6>Question 4:</h6>
        <div className="answerParagraph">
            <p>Change the state-setting function to use an implicit return</p>
            <p className="bold">See QuestionFour.js for answers</p>
        </div>
        
      </div>
  );
}
