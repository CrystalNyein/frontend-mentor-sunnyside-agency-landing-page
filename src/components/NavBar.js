import React, { Component } from "react";
import logo from "../assets/images/logo.svg";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="nav-logo">
          <img src={logo} alt="Sunnyside Logo"></img>
        </div>
        <div className="nav">
          <i className="fas fa-hamburger nav-icon-mobile"></i>
          <div className="nav-group">
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
  }
}

export default NavBar;
