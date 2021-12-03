import React from "react";
import "./LearnMoreSec.css";

const LearnMoreSec = (props) => {
  return (
    <div className="LearnMoreSec">
      <div className={props.sequence + " learn-more-text "}>
        <h2 className="title fraunces-font">{props.title}</h2>
        <p className="barlow-font">{props.para}</p>
        <button className="btn fraunces-font">Learn More</button>
        <hr style={{ backgroundColor: props.color }}></hr>
      </div>
      <div
        className="learn-more-img"
        style={{ backgroundImage: "url(" + props.src + ")" }}
      ></div>
    </div>
  );
};

export default LearnMoreSec;
