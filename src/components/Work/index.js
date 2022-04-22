import React from "react";
import runBuddy from "../../assets/images/run buddy.png";
import brewHaus from "../../assets/images/project-beer.png";
import robotGladiators from "../../assets/images/robot-gladiators.jfif";
import taskMasterPro from "../../assets/images/taskmaster-pro.png";
import seeVee from "../../assets/images/SeeVee.gif";
import dedly from "../../assets/images/dedly.png";

function Work() {
  return (
    <section id="work">
      <div className="section-title">
        <h2>Work</h2>
      </div>
      <div className="work-collection">
        <div className="section-content work-samples work-samples-hero">
          <a
            href="https://project-ded.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={dedly} />
          </a>
          <div className="work-text">
            <span>
              Dedly: A react single page application that gives users a rough
              sense of how much longer they have left to live.
            </span>
          </div>
        </div>
        <div className="section-content work-samples">
          <a
            href="https://kevinjwilkerson.github.io/Run-Buddy-Project/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={runBuddy} />
          </a>
          <div className="work-text">
            <span>
              Run Buddy: An HTML and CSS project to redesign the site for a
              fictional personal training service.
            </span>
          </div>
        </div>
        <div className="section-content work-samples">
          <a
            href="https://kevinjwilkerson.github.io/project_beer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={brewHaus} />
          </a>
          <div className="work-text">
            <span>
              Brewhaus: A site that makes beer recommendations based on the
              current weather.
            </span>
          </div>
        </div>
        <div className="section-content work-samples">
          <a>
            <img src={robotGladiators} />
          </a>
          <div className="work-text">
            <span>
              Robot Gladiators: A simple turn-based combat game built with
              javascript.
            </span>
          </div>
        </div>
        <div className="section-content work-samples">
          <img src={taskMasterPro} />
          <div className="work-text">
            <span>
              Taskmaster Pro: A productivity tool to track the status of user
              created tasks built using JQuery and BootStrap.
            </span>
          </div>
        </div>
        <div className="section-content work-samples">
          <img src={seeVee} />
          <div className="work-text">
            <span>
              SeeVee: A full stack group project to help members of our bootcamp
              share resources and find a job as a developer.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
