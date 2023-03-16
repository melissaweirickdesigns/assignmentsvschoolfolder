import React from "react";

export default function Header () {
    return (
        <div className="header--container">
            <div className="psudeo-cont">
                <div className="nav--bar">
                    <a href="#" className="brand--name">
                        <h3>START BOOTSTRAP</h3>
                    </a>
                    <ul className="menu--options">
                        <a href="#" className="home--menu text-decoration">
                            <li>HOME</li>
                        </a>
                        <a href="#" className="about--menu text-decoration">
                            <li>ABOUT</li>
                        </a>
                        <a href="#" className="sample--post--menu text-decoration">
                            <li>SAMPLE POST</li>
                        </a>
                        <a href="#" className="contact--menu text-decoration">
                            <li>CONTACT</li>
                        </a>
                    </ul>
                </div>
                <div className="nav-title-container">
                    <h1 className="nav--title">Clean Blog</h1>
                    <h6 className="nav--subtitle">A Blog Theme by Start Bootstrap</h6>
                </div>
            </div>            
        </div>
    )
}