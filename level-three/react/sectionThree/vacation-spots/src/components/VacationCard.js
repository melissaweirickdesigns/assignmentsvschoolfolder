import React from "react";

export default function VacationCard (props) {
    let timeToGoBG
    if (props.timeToGo === "Spring") {
        timeToGoBG = "springStyle timeToGoback"
    } else if (props.timeToGo === "Summer") {
        timeToGoBG = "summerStyle timeToGoback"
    } else if (props.timeToGo === "Fall") {
        timeToGoBG = "fall-Style timeToGoback"
    } else if (props.timeToGo === "Winter") {
        timeToGoBG = "winter-Style timeToGoback"
    }

    let dollarSign
    if (props.price < 500) {
        dollarSign = "$"
    } else if (props.price > 1000) {
        dollarSign = "$$$"
    } else {
        dollarSign = "$$"
    }

    return (
        <div className="vacation-card-background">
            <div className="vacation-information">
                <div className="printed-photo">
                    <img src={props.vimg} className="vacimg"/>
                </div>
                <div className="v-info-group">
                    <div className="vplace">{props.place}</div>
                    <div className="vprice">{dollarSign}{props.price}</div>
                    {timeToGoBG && <div className={timeToGoBG}>
                        <div className="vtime">{props.timeToGo}</div>
                    </div>}                   
                </div>                
            </div>
        </div>
    )
}