import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_img from "../../images/profile_img4.png";
import Resume from '../../assets/Resume.pdf'
import portfolioData from "../../assets/portfolio.json";

const Hero = () => {
  const { hero_section, personal_info } = portfolioData;

  return (
    <div id="hero" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>
          <p>I'm {personal_info.name},</p>
        </span>{" "}
        {hero_section.subheadline}
      </h1>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            {hero_section.cta_buttons[2]}
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={Resume}>{hero_section.cta_buttons[1]}</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
