import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_img from "../../images/profile_img4.png";
import Resume from '../../assets/Resume.pdf'

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>
          <p>I'm Mrunal Tambe,</p>
        </span>{" "}
        frontend developer crafting interactive and responsive web experiences.
      </h1>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={Resume}>My resume</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
