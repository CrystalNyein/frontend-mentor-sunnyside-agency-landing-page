import React, { Component } from "react";
import "./HeroSec.css";
import NavBar from "./NavBar.js";
import arrow from "../assets/images/icon-arrow-down.svg";

class HeroSec extends Component {
  render() {
    return (
      <div className="HeroSec" role="banner">
        <NavBar />
        <h1 className="hero-text fraunces-font">We are creatives</h1>
        <img className="arrow" src={arrow} alt="" />
      </div>
    );
  }
}
export default HeroSec;
