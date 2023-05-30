import logo from "../assets/pixel-cross-1639315.png"
import { useState } from "react"
import { NavLink } from 'react-router-dom'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header(props) {
    const [isActive, setIsActive] = useState(false);

    function cusNav() {
        setIsActive(!isActive);
    }

    return (
        <>
            <div>
                <div className={`header-logo dark-mode`}>
                        <img src={logo} alt="Logo"/>
                </div>
                <div className={`nav ${isActive ? "responsive" : ""}`} id="menu">
                    <NavLink
                        exact="true"
                        to="/"
                        onClick={() => setIsActive(false)}
                    >
                        Submit Image
                    </NavLink>
                    <NavLink
                        to="/history"
                        onClick={() => setIsActive(false)}
                    >
                        History
                    </NavLink>
                    <button className="icon" onClick={cusNav}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>
            
        </>
    )
}