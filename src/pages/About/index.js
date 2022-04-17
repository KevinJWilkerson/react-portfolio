import React from "react";
import picture from "../../assets/images/kevinW-3374.jpg";

function About() {
  return (
    <section className="" id="about">
      <div className="hero">
        <img src={picture} />
      </div>
      <div class="section-title">
        <h2>About</h2>
      </div>
      <div class="section-content">
        <p>
          Welcome to my portfolio site! I'm an aspiring Full Stack Software
          Developer enrolled in the Coding Boot Camp at UT Austin.
        </p>
        <p>
          I've spent the last decade working in advertising at top-tier agencies
          including Wieden+Kennedy, Droga5, and Huge. My work as a strategist
          has shaped and steered effective campaigns for clients like J.P.
          Morgan Chase, Johnsonville, and ESPN among many others. As my career
          in advertising has progressed, I've grown more interested in building
          experiences, going beyond traditional forms of advertising which led
          me to enroll in a coding boot camp. With the skills I'm developing I
          aim to expand beyond advertising and apply myself to the digital
          interactions between consumers and brands more impactfully.
        </p>
      </div>
    </section>
  );
}

export default About;
