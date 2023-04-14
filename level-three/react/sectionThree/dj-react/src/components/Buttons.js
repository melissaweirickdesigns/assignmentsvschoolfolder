import { useState } from "react";
import Button from "./Button";

export default function Buttons({onClick}) {
    const [buttonLevels, setButtonLevels] = useState([
        { id: 1, names: "Small time DJ"},
        { id: 2, names: "Party DJ"},
        { id: 3, names: "Professional DJ Left"},
        { id: 4, names: "Professional DJ Right"},
        { id: 5, names: "Big Time DJ 1"},
        { id: 6, names: "Big Time DJ 2"},
        { id: 7, names: "Big Time DJ 3"},
        { id: 8, names: "Big Time DJ 4"},
    ])

    return (
        <div>
            {buttonLevels.map(({id, names}) => (
                <Button 
                    key={id}
                    names={names}
                    onClick={() => {
                        onClick(id);
                    }}
                />
            ))}
            
        </div>
    )
}