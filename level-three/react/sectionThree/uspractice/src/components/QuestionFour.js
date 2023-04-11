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

        //By removing the curly braces and the return keyword, we can use the implicit return syntax. This is possible because the function only has one statement which returns the new state value.//

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

    // By using parentheses around the object being returned, we can use the implicit return syntax and remove the return keyword.
    

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
