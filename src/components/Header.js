import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  let activeStyle = {
    textDecoration: "underline",
  };
  return (
    <div className="header-container">
      <h2 className="heading-top">CSE SOCIETY</h2>
      <header className="header">
        <ul>
          <NavLink
            className="navlink"
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            className="navlink"
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li>About Us</li>
          </NavLink>
          <NavLink
            className="navlink"
            to="/events"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li>Events</li>
          </NavLink>
          {/* <NavLink
            className="navlink"
            to="/alumni"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li>Alumni</li>
          </NavLink> */}
        </ul>
      </header>
    </div>
  );
};

export default Header;
