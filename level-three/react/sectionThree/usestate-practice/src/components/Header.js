import React from "react"
import logo from "../images/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} className="logoJpg"/>
                <h2 className="title">Meme Generator</h2>
            </div>            
            <h4 className="courseTitle">React Course - Project 3</h4>
        </header>
    )
}