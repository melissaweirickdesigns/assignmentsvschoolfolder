import { useState } from "react";

export default function QuestionThree() {
    const [people, setPeople] = useState([
        {
            id: 1,
            firstName: "John",
            lastName: "Smith"
        }
    ]);

    const addPerson = () => {
        const newPerson = {
            id: 2,
            firstName: 'Alice',
            lastName: 'Johnson'
        };
        const existingPerson = people.find((person) => person.id === newPerson.id);
        if(!existingPerson) {
            setPeople([...people, newPerson]);
        }
    };    

    return (
        <div className='question-three'>
            <h6>Question 3:</h6>
            <div className="answerParagraph">
                <p>Add a new person object to the above people array in state.</p>
                <div>
                    <ol>
                        {people.map((person) => (
                            <li key={person.id}>
                                {person.firstName} {person.lastName}
                            </li>
                        ))}
                    </ol>
                    <button onClick={addPerson}>Add Person</button>
                </div>
            </div>            
        </div>
    );
}