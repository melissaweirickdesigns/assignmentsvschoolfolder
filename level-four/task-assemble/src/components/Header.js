import logo from "../assets/Logo.png";
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Header(props) {
  const [isActive, setIsActive] = useState(false);

  function toggleNav() {
    setIsActive(!isActive);
  }

  return (
    <>
      <div>
        <div className={`nav ${isActive ? "responsive" : ""}`} id="menu">
          <div className="logo-section">
            <img src={logo} alt="Logo" />
            TaskAssemble
          </div>
          <div className="nav-links">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              onClick={() => setIsActive(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/Calendar"
              activeClassName="active"
              onClick={() => setIsActive(false)}
            >
              Calendar
            </NavLink>
            <NavLink
              to="/Tasks"
              activeClassName="active"
              onClick={() => setIsActive(false)}
            >
              Tasks
            </NavLink>
            <NavLink
              to="/MessageCenter"
              activeClassName="active"
              onClick={() => setIsActive(false)}
            >
              Message Center
            </NavLink>
          </div>
          <a href="javascript:void(0)" className="icon" onClick={toggleNav}>
            <i class="fa-solid fa-bars"></i>
            </a>

        </div>
      </div>
    </>
  );
}
