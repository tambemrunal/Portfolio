import React from "react";
import "./Experience.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import portfolioData from "../../assets/portfolio.json";

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <div id="Experience" className="Experience">
      <div className="Experience-title">
        <h1>Experience</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="Experience-container">
        {experience.map((exp, idx) => (
          <div key={idx} className="Experience-format">
            <h2>{exp.company}</h2>
            <p className="role">
              {exp.role} <br />
              {exp.duration}
            </p>
            <p className="description">
              {exp.responsibilities.join(" ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
