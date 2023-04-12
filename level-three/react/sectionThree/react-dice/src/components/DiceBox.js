import React from "react";
import { useState } from "react";
import Die from "./Die";

export default function DiceBox() {
    const [state, setState] = useState([
        { id: 1, number: 0, selected: false },
        { id: 2, number: 0, selected: false },
        { id: 3, number: 0, selected: false },
        { id: 4, number: 0, selected: false },
        { id: 5, number: 0, selected: false },
    ]);

    //an array of objects referencing the dice

    const [rolls, setRolls] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    //useState variables - sets a variable with a function tied to the useState and the start state

    function saveDie(id) {
        const newDice = state.map((die) =>
          die.id === id ? { ...die, selected: !die.selected } : die
        );
        setState(newDice);
      }    

    //this is pulling the id from the Die component below and doing two tierny functions. first it is saying if the id from the die component matches the id on the state object, pull the properies of state and then only change the selected to no selected or visa versa. If the id of the die compenent map dies not match the id in state then keep the die the same.

    function rollAllDice() {
        if (rolls === 4) {
            resetDice();
            return;
        }

        //after 3 rolls reset the dice - run the resetDice function below

        const newDice = state.map((die) => ({
            ...die,

            //creates a new array of dice objects based on the current state

            number: die.selected || !hasStarted ? die.number : Math.floor(Math.random() * 6) + 1

            // the number property of each die is set to either its current value (die.number) if neither die.selected nor hasStarted is truthy, or to a random integer between 1 and 6 if either die.selected or !hasStarted is truthy.      
        }));
        setState(newDice);

        //replace state with newDice value

        setRolls((prevRolls) => prevRolls + 1);

        //setRolls function passes in the previous state of the rolls useState and then adds one to the the roll

        if (!hasStarted) {
            setHasStarted(true);
        }

        //it then will check if hasStarted equals false. if has started equals false then the state will be set to true
    }

    console.log({rolls});

    //keeping track of the numbers of rolls in the console logbook

    function resetDice() {
        const newDice = state.map((die) => {
            if (die.selected) {
                return { ...die, number: 0, selected: false };
            } else {
                return { ...die, number: 0 };
            }
        });

        //when the dice are resetting after the 3rd roll, then check to see if the die is selected. If it is selected then set the selected to false in addition to resetting the number back to 0, other wise just reset the number to 0

        setState(newDice);
        setRolls(0);
        setHasStarted(false);
    }
      

    return (
        <div className="dice--div">
            {state.map(({ id, number, selected }) => (
                <Die
                    key={id}
                    number={number}
                    selected={selected}
                    onClick={() => saveDie(id)}
                />
            ))}

            {/* This grabs state from above and passes in the props, then assigns the props to the variables then creates a div for each dice to show on the page */}
            
            <button className="dice rollAllButton" onClick={rollAllDice}>
                Roll All Dice
            </button>
        </div>
    )
}