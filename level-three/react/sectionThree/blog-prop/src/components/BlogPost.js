import React from "react";

export default function BlogPost (props) {
    return (
            <div className="blog-container">
                <div className="blog-card">
                    <a href="#" className="blog-title-link">
                        <h2 className="blog-title blog-margin">{props.title}</h2>
                        <h4 className="blog-subTitle blog-margin">{props.subTitle}</h4>
                    </a>
                    <p className="blog-data blog-margin">
                        Posted by <a href="#" className="blog-author-link">{props.author}</a> on {props.date}
                    </p>
                </div>
            </div>
    )
}