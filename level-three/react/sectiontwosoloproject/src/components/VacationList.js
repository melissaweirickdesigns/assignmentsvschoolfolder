import React from "react";
import 'boxicons';

export default function VacationList (props) {
    return (
        <div className="container--two">
            <div className="card">
                <img src={props.imageUrl} className="card--imgageURL"/>
                <div className="card-summaryinfo">
                    <div className="card--locinfo">
                        <i class='bx bx-location-plus card--locationicon'></i>
                        <p className="card--location">{props.location}</p>
                        <a href={props.googleMapsUrl} className="card--googleMapsUrl">View on GOOGLE Maps</a>
                    </div>
                    <h1 className="card--title">{props.title}</h1>
                    <div className="card-dateinfo">
                        <date className="card--startDate">{props.startDate}</date>
                        <p>-</p>
                        <date className="card--endDate">{props.endDate}</date>
                    </div>            
                    <p className="card-description">{props.description}</p>
                </div>
            </div>
        </div>
    )
}