import { useState } from "react";

export default function QuestionFive() {
    const [people, setPeople] = useState([
        {
            id: 1,
            firstName: "John",
            lastName: "Smith"
        }
    ]);

    const addAge = () => {
        const existingPerson = people.find (person => person.id === person.id);

        setPeople(prevPeople => {
            return prevPeople.map(person => {
                if (person.id === existingPerson.id) {
                    return {...person, age: 30}
                }
                return person;
            })
        })
    };    

    return (
        <div className='question-five'>
            <h6>Question 5:</h6>
                <div className="answerParagraph">
                <p>Update the following state to add an additional property age and set the value to 30, ensuring that the other properties are not overwritten.
                </p>
                <div>
                    <ol>
                        {people.map((person) => (
                            <li key={person.id}>
                                {person.firstName} {person.lastName} Age:  {person.age}
                            </li>
                        ))}
                    </ol>
                    <button onClick={addAge}>Add Age</button>
                </div>
            </div>            
        </div>
    );
}
