import React from "react";
import milk from "../assets/images/desktop/image-gallery-milkbottles.jpg";
import cone from "../assets/images/desktop/image-gallery-cone.jpg";
import orange from "../assets/images/desktop/image-gallery-orange.jpg";
import sugar from "../assets/images/desktop/image-gallery-sugarcubes.jpg";
import "./ImageSec.css";

const ImageSec = () => {
  return (
    <div className="ImageSec">
      <img src={milk} alt="Milk Bottles" />
      <img src={orange} alt="Orange" />
      <img src={cone} alt="Cone" />
      <img src={sugar} alt="Sugar Cubes" />
    </div>
  );
};

export default ImageSec;
