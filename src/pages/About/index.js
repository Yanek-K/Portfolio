import React from "react";
import "./index.css";

const About = () => {
  return (
    <div className="about" id="About">
      <div className="about__wrap">
        <h2>A Little Bit About Myself</h2>
        <div className="about__info">
          <p>
            <strong className="about__strong">B</strong>orn in Toronto, I grew
            up in Southern Africa and travelled around the world for most of my
            teenage life.
            <br />
            <br />
            <strong className="about__strong">I</strong> have had the opportunity to learn about different cultures, try many, many activites and learn a few languages along the way.
            <br />
            <br />
            <strong className="about__strong">W</strong>hen I am not sitting at
            my desk writing code, you can find me walking the streets of Toronto
            with my camera, in a darkroom making black and white prints, or rock climbing indoors.
            <br />
            <br />
            <strong className="about__strong">I</strong> believe in life-long learning and thus far, it has served me very well.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
