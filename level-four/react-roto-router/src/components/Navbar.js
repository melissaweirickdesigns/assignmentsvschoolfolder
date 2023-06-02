import logo from "../assets/AdobeStock_557385183.png"
import { useState } from "react"
import { NavLink } from 'react-router-dom'
import React, {useContext} from 'react';
import {ThemeContext} from '../ThemeContext';

export default function Navbar(props) {
    const [isActive, setIsActive] = useState(false);
    const value = useContext(ThemeContext);

    function cusNav() {
        setIsActive(!isActive);
    }

    return (
        <>
            <div>
                <div className={`header-logo`}>
                    <img src={logo} alt="Logo"/>
                </div>
                <div className={`nav ${isActive ? "responsive" : ""}`} id="menu">
                    <NavLink
                        exact
                        to="/"
                        activeClassName="active"
                        onClick={() => setIsActive(false)}
                    >
                        Schedule
                    </NavLink>
                    <NavLink
                        to="/jobhistory"
                        activeClassName="active"
                        onClick={() => setIsActive(false)}
                    >
                        Job History
                    </NavLink>
                    <NavLink
                        to="/tasks"
                        activeClassName="active"
                        onClick={() => setIsActive(false)}
                    >
                        Tasks
                    </NavLink>
                    <a href="javascript:void(0)" className="icon" onClick={cusNav}>
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
            </div>
            
        </>
    )
}