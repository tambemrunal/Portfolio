import React from "react";
import "./Projects.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import resume_builder from "../../images/resume_builder.png";
import news_app from "../../images/news_app.png";
import pig_game from "../../images/pig_game.png";


const Projects = () => {
  return (
    <>
    <div id="Projects" className="services">
      <div className="services-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        <div className="services-format">
          <img id="img1" src={resume_builder} alt="" />
          <h2>Resume Builder Website</h2>
          <p>
            My Resume Builder site is an interactive platform designed to help
            users create professional resumes effortlessly.
          </p>
          <p>Technologies used: <br /> HTML CSS Javascript </p>
          <div className="btns">
            {/* <button className="src-btn">Source</button> */}
            <button className="demo-btn"><a href="https://tambemrunal.github.io/Resume-Builder-Website/">View Demo</a></button>
            
          </div>
        </div>

        <div className="services-format">
          <img id="img2" src={pig_game} alt="" />
          <h2>Dice Game</h2>
          <p>
          The Dice Game is an interactive two-player game with fully implemented JavaScript logic, offering a fun and engaging experience. 
          </p>
          <p>Technologies used: <br /> HTML CSS Javascript </p>
          
          <div className="btns">
            {/* <button className="src-btn">Source</button> */}
            <button className="demo-btn">View Demo</button>
          </div>
        </div>

        <div className="services-format">
          <img id="img3" src={news_app} alt="" />
          <h2>News App</h2>
          <p>
          My News App is an interactive website that displays real-time news using an API, offering various categories like Education, Business, and more.
          </p>
          <p>Technologies used: <br /> HTML CSS ReactJS </p>
          <div className="btns">
            {/* <button className="src-btn">Source</button> */}
            <button className="demo-btn">View Demo</button>
          </div>
        </div>
        
        
      </div>
    </div>
    </>
  );
};

export default Projects;
