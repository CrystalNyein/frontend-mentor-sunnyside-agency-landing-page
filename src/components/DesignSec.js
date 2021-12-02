import React from "react";
import "./DesignSec.css";

const DesignSec = (props) => {
  return (
    <div
      className="DesignSec"
      style={{ backgroundImage: "url(" + props.src + ")" }}
    >
      <div className="design-text">
        <h3 className="title fraunces-font" style={{ color: props.color }}>
          {props.title}
        </h3>
        <p className="barlow-font" style={{ color: props.color }}>
          {props.para}
        </p>
      </div>
    </div>
  );
};

export default DesignSec;
