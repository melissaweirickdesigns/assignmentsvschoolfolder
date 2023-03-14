import React from "react";
import starRating from "../photos/star-rating.png"

export default function CardComponent(props) {
    let badgeText
    if (props.openSpots === 0) {
        // or as an example of the alternative prop.item.openSpots
        badgeText = "SOLD OUT"
    } else if (props.country === "Online") {
        badgeText = "ONLINE"
    }

    return (
       <div className="card-container-2"> 
            <div className="card">
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img src={props.profilePicture} alt="profile photo" className="card--image"/>
                <div className="card--stats">
                    <img src={starRating} alt="star rating photo" className="card--star margin side-margin"/>
                    <span className="review-rating gray margin side-margin">{props.reviewRating}</span>
                    <span className="number-of-reviews gray margin side-margin"><span>(</span>{props.numberOfReviews}<span>)</span></span>
                    <span className="bullet-point margin side-margin">•</span>
                    <span className="country margin side-margin">{props.country}</span>
                </div>
                <p className="description margin">{props.descrip}</p>
                <p className="price margin"><span className="bold">From $<span className="price-amount">{props.pricePerPerson}</span></span> / person</p>
            </div>
        </div>
    )
}