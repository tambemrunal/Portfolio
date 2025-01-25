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




const About = () => {
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
                <p>Hi! I'm Mrunal Tambe, a passionate 3rd-year Computer Science student with a strong interest in web development. I have hands-on experience with frontend technologies like HTML, CSS, JavaScript, and React.js. I’m also actively enhancing my problem-solving skills by practicing Data Structures and Algorithms (DSA) in Java.</p>
                <p>
                I'm dedicated to building interactive, user-friendly websites and constantly exploring new ways to improve my coding abilities. My goal is to grow as a developer and contribute to impactful projects that make a difference.
                </p>
                <p>Let’s build something great together!</p>
            </div>

        </div>
      </div>
      <div className="logo-main">
              <img className='box' src={html_logo} alt="" />
              <img className='box' src={javascript} alt="" />
              <img className='box' src={react} alt="" />
              <img className='box' src={css} alt="" />
              <img className='box' src={java} alt="" />
              <img className='box' src={cpp} alt="" />
              <img className='box' src={mysql} alt="" /> 
              <img className='box DSA' src={DSA} alt="" /> 
      </div>
    </div>
  )
}

export default About

{/* <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div> */}
