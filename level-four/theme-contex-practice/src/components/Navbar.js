import logo from "../assets/logo.png"
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
                <div className={`header-logo ${value.value}-mode`}>
                    <a href="https://www.vectorstock.com/royalty-free-vector/tree-branch-with-leaf-logo-design-vector-27402295">
                        <img src={logo} alt="Logo"/>
                        <p classname="attribute">Vector image by VectorStock / buqancreative</p>
                    </a>
                </div>
                <div className={`nav ${isActive ? "responsive" : ""}`} id="menu">
                    <NavLink
                        exact
                        to="/"
                        activeClassName="active"
                        onClick={() => setIsActive(false)}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/dashboard"
                        activeClassName="active"
                        onClick={() => setIsActive(false)}
                    >
                        Dashboard
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