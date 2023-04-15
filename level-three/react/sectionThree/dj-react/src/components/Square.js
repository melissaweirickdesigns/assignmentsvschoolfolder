import React from "react";


export default function Square({backgroundColor}) {
    const lightBoxBGStyle = {
        backgroundColor: backgroundColor
    }

    return (
        <div
            className="lightBoxStyle"
            style={lightBoxBGStyle}
        >
        </div>
    )
}