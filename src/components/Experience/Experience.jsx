import React from "react";
import "./Experience.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Experience = () => {
  return (
    <div id="Experience" className="Experience">
      <div className="Experience-title">
        <h1>Experience</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="Experience-container">
        <div className="Experience-format">
          <h2>Codtech Technologies</h2>
          <p className="role">
            Frontend Developer <br />
            Jan 2025 -Feb 2025
          </p>
          <p className="description">
            As a Software Development Intern at Codetech, I contributed to
            multiple projects, including developing a Live Chat Application and
            an E-learning Platform using React.js, as well as building a dynamic
            Quiz App with JavaScript.{" "}
          </p>
        </div>

        <div className="Experience-format">
          <h2>Hackathon Club</h2>
          <p className="role">
            Club Member <br />
            Since Oct 2023
          </p>
          <p className="description">
            As an active team member of the Hackathon Club, I contributed to
            various web development projects and played a key role in hosting
            workshops and organizing tech sessions like WebWizzards, a web
            development hackathon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
