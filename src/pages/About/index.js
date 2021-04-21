import React from "react";
import "./index.css";
import geometry from "./../../Assets/About/geometry.png";

const About = () => {
  return (
    <div className="about" id="About">
      <div className="about__wrap">
        <h2>A Little Bit About Myself</h2>
        <div className="about__info">
          <p>
            <strong className="about__strong">B</strong>orn in Toronto, I grew
            up in Southern Africa and travelled around the world for most of my
            life.
            <br />
            <br />
            <strong className="about__strong">W</strong>hen I am not sitting at
            my desk writing code, you can find me walking the streets of Toronto
            with my camera or in a darkroom making black and white prints.
            <br />
            <br />
            <strong className="about__strong">I</strong> am very good with
            people and work well on a team. I enjoy taking the lead on projects
            and learning new things.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
