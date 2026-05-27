import React from "react";
import "./Projects.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import portfolioData from "../../assets/portfolio.json";

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <>
    <div id="Projects" className="services">
      <div className="services-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {projects.map((project, idx) => {
          // Get image path from project.image and construct URL from assets/projects
          const imageUrl = new URL(`../../assets/projects/${project.image}`, import.meta.url).href;
          
          return (
            <div key={idx} className="services-format">
              <img id={`img${idx + 1}`} src={imageUrl} alt={project.name} />
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <p>
                Technologies used: <br /> 
                {Array.isArray(project.tech_stack) ? project.tech_stack.slice(0, 3).join(", ") : "N/A"}
              </p>
              <div className="btns">
                {project.deployment && (
                  <button className="demo-btn">
                    <a href={project.deployment} target="_blank" rel="noopener noreferrer">
                      View Demo
                    </a>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default Projects;
