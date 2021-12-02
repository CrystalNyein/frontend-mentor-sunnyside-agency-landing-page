import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo.svg";
import "./NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navGroup = useRef(null);
  const nav = useRef(null);
  const menuBtn = useRef(null);
  const toggleMenu = () => {
    if (nav.current.classList.contains("active")) {
      nav.current.classList.remove("active");
      setMenuOpen(false);
    } else {
      nav.current.classList.add("active");
      setMenuOpen(true);
    }
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!menuBtn.current.contains(e.target)) {
        if (navGroup.current && !navGroup.current.contains(e.target)) {
          toggleMenu();
        }
      }
    };
    if (menuOpen) window.addEventListener("click", handleClickOutside, true);
    return () => {
      window.removeEventListener("click", handleClickOutside, true);
    };
  });
  return (
    <div className="NavBar">
      <div className="nav-logo">
        <img src={logo} alt="Sunnyside Logo"></img>
      </div>
      <div className="nav" ref={nav}>
        <i
          ref={menuBtn}
          className="fas fa-hamburger nav-icon-mobile"
          onClick={toggleMenu}
        ></i>
        <div className="nav-group" ref={navGroup}>
          <ul>
            <li className="nav-link barlow-font">About</li>
            <li className="nav-link barlow-font">Services</li>
            <li className="nav-link barlow-font">Projects</li>
            <li className="nav-link fraunces-font">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
