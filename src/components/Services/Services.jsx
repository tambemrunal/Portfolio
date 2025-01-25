import React from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
// import Services_Data from '../../assets/services_data'
// import arrow_icon from '../../assets/arrow_icon.svg'
import resume_builder from "../../images/resume_builder.png";
import news_app from "../../images/news_app.png";
import pig_game from "../../images/pig_game.png";
import parallax_website from "../../images/parallax_website.png";
import travel_website from "../../images/travel_website.png";
import weather_app from "../../images/weather_app.png";



const Services = () => {
  return (
    <div id="services" className="services">
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

        {/* <div className="services-format">
          <img id="img4" src={weather_app} alt="" />
          <h2>Weather App</h2>
          <p>
          My Weather App provides real-time weather updates using a Weather API. By entering a city name, users can view its temperature, moisture, and humidity details.
          </p>
          <p>Technologies used: <br /> HTML CSS Javascript </p>
          <div className="btns">
            <button className="demo-btn">View Demo</button>
          </div>
        </div>

        <div className="services-format">
          <img id="img5" src={travel_website} alt="" />
          <h2>Travel Website</h2>
          <p>
          This website is a responsive clone designed using HTML and CSS to showcase a company's travel policies. It offers a clean layout and user-friendly interface for easy access to travel guidelines.
          </p>
          <p>Technologies used: <br /> HTML CSS </p>
          <div className="btns">
            <button className="demo-btn">View Demo</button>
          </div>
        </div>

        <div className="services-format">
          <img id="img6" src={parallax_website} alt="" />
          <h2>Parallax Website</h2>
          <p>
          This is a responsive parallax website built using HTML and CSS, featuring a dynamic design where background elements move at different speeds. It offers an engaging and modern user experience with smooth scrolling effects.
          </p>
          <p>Technologies used: <br /> HTML CSS </p>
          <div className="btns">
            <button className="demo-btn">View Demo</button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Services;
