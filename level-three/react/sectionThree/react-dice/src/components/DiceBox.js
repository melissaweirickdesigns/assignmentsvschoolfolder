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

    const [rolls, setRolls] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    function saveDie(id) {
        const newDice = state.map((die) =>
          die.id === id ? { ...die, selected: !die.selected } : die
        );
        setState(newDice);
      }    

    function rollAllDice() {
        if (rolls === 4) {
            resetDice();
            return;
        }

        const newDice = state.map((die) => ({
            ...die,

            number: die.selected || !hasStarted ? die.number : Math.floor(Math.random() * 6) + 1

        }));
        
        setState(newDice);
        setRolls((prevRolls) => prevRolls + 1);

        if (!hasStarted) {
            setHasStarted(true);
        }
    }

    console.log({rolls});

    function resetDice() {
        const newDice = state.map((die) => {
            if (die.selected) {
                return { ...die, number: 0, selected: false };
            } else {
                return { ...die, number: 0 };
            }
        });

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
            
            <button className="dice rollAllButton" onClick={rollAllDice}>
                Roll All Dice
            </button>
        </div>
    )
}