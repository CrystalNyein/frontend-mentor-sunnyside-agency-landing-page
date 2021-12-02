import React from "react";
import Testimonial from "./Testimonial";
import "./TestimonialSec.css";
import emily from "../assets/images/image-emily.jpg";
import thomas from "../assets/images/image-thomas.jpg";
import jennie from "../assets/images/image-jennie.jpg";

const TestimonialSec = () => {
  const para = [
    "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
    "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
  ];
  return (
    <div className="TestimonialSec">
      <h2 className="fraunces-font">Client Testimonials</h2>
      <div className="testimonials">
        <Testimonial
          src={emily}
          name="Emily R."
          position="Marketing Director"
          para={para[0]}
        />

        <Testimonial
          src={thomas}
          name="Thomas S."
          position="Chief Operating Officer"
          para={para[1]}
        />

        <Testimonial
          src={emily}
          name="Jennie F."
          position="Business Owner"
          para={para[2]}
        />
      </div>
    </div>
  );
};

export default TestimonialSec;
