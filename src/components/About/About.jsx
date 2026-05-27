import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
// import profile_img from "../../assets/about_profile.svg"
import img from '../../images/img1.jpg';
import html_logo from '../../images/html.png';
import cpp from '../../images/c++.png';
import java from '../../images/java.png';
import javascript from '../../images/javascript.png';
import css from '../../images/css.png';
import react from '../../images/react.png';
import mysql from '../../images/mysql.png';
import DSA from '../../assets/DSA_logo.jpg'
import portfolioData from '../../assets/portfolio.json';




const About = () => {
  const { about_section, personal_info } = portfolioData;
  const skillLogos = {
    'HTML5': html_logo,
    'CSS3': css,
    'JavaScript (ES6+)': javascript,
    'React.js': react,
    'Java': java,
    'C++': cpp,
    'MySQL': mysql,
    'Data Structures & Algorithms': DSA
  };
  return (
    <div id="about" className='about'>
      <div className='about-title'>
         <h1>About me</h1>
         <img src={theme_pattern} alt="" />
      </div>
      <div className='about-sections'>
        <div className='about-left'>
            <img src={img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>{about_section.summary}</p>
            </div>

        </div>
      </div>
      <div className="logo-main">
              {Object.entries(skillLogos).map(([ skill, logo ], idx) => (
                <img key={idx} className={skill === 'Data Structures & Algorithms' ? 'box DSA' : 'box'} src={logo} alt={skill} title={skill} />
              ))}
      </div>
    </div>
  )
}

export default About

