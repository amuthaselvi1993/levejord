import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useLanguage } from "../context/LanguageContext.js";
import Flag from "react-world-flags";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <p>LEVEJORD</p>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/products"
            >
              Products & Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/contact"
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <Flag code="NO" style={{ width: "20px", height: "15px" }} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
