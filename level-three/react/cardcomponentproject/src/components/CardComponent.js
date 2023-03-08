import React from "react";

export default function CardComponent(props) {
    return (
       <div className="card--container"> 
            <div class="card--row">
                <div className="card">
                    <img src={props.profilePicture} alt="profile photo" className="card--image"/>
                    <div className="card--stats">
                        <img src={require("../photos/star-rating.png")} alt="star rating photo" className="card--star margin side-margin"/>
                        <span className="review-rating gray margin side-margin">{props.reviewRating}</span>
                        <span className="number-of-reviews gray margin side-margin"><span>(</span>{props.numberOfReviews}<span>)</span></span>
                        <span className="bullet-point margin side-margin">•</span>
                        <span className="country margin side-margin">{props.country}</span>
                    </div>
                    <p className="description margin">{props.descrip}</p>
                    <p className="price margin"><span className="bold">From <span className="price-amount">{props.pricePerPerson}</span></span> / person</p>
                </div>
            </div>
        </div>
    )
}