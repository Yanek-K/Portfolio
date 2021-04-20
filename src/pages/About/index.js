import React from "react";
import "./index.css";
import geometry from "./../../Assets/About/geometry.png";

const About = () => {
  return (
    <div className="about" id="About">
      <div className="about__left">
        <h2>A Little Bit About Myself</h2>
        <p>
          Born in Toronto, I grew up in Southern Africa and travelled around the
          world for most of my life.
          <br />
          <br />
          When I am not sitting at my desk writing code, you can find me walking
          the streets of Toronto with my camera or in a darkroom making black
          and white prints.
          <br />
          <br />I am very good with people and work well on a team. I enjoy
          taking the lead on projects as well as learning new things.{" "}
        </p>
      </div>
      <div className="about__right">
        <h2>Contact Me</h2>
        <p>Email Address: yanek.dev@gmail.com</p>
        <p>Phone: +1 647 473 1535</p>
        <p>Location: Downtown Toronto, Ontario</p>
      </div>
    </div>
  );
};

export default About;
