import React from "react";
import "./Testimonial.css";

const Testimonial = (props) => {
  return (
    <div className="Testimonial">
      <img src={props.src} alt={props.name} />
      <p className="barlow-font">{props.para}</p>
      <div className="name">
        <p className="main fraunces-font">{props.name}</p>
        <p className="sub barlow-font">{props.position}</p>
      </div>
    </div>
  );
};

export default Testimonial;
