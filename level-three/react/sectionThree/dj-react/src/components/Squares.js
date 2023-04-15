import Square from "./Square";

export default function Squares({squareColors}) {
    
    return (
        <div className="squares-container">
            {squareColors.map((color) => (
                <Square backgroundColor={color}/>
            ))}
        </div>
    )
}