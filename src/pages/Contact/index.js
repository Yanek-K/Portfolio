import React from "react";
import "./index.css";

//Images
import geometry from "./../../Assets/About/geometry.png";

const Contact = () => {
  return (
    <div className="contact" id="Contact">
      <div className="contact__header">
        <h2>Contact Me</h2>
      </div>
      <div className="contact__info">
        <div className="contact__email">
          <h3 className="contact__info__header">
            <strong>Email Address: </strong>
          </h3>
          <p className="contact__info__info"> yanek.dev@gmail.com</p>
        </div>
        <div className="contact__phone">
          <h3 className="contact__info__header">
            <strong>Phone:</strong>
          </h3>
          <p className="contact__info__info"> +1 647 473 1535</p>
        </div>
        <div className="contact__location">
          <h3 className="contact__info__header">
            <strong>Location: </strong>
          </h3>
          <p className="contact__info__info">Toronto, Canada</p>
        </div>
      </div>
      <div className="contact__img">
        <img src={geometry} alt="geometry" className="geometry" />
      </div>
    </div>
  );
};

export default Contact;
