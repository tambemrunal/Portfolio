import React, { useRef, useState } from "react";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  }

  const closeMenu = () => {
    menuRef.current.style.right = '-400px';
  }

  const handleMenuClick = (menuName) => {
    setMenu(menuName);
    if (window.innerWidth <= 768) {
      closeMenu(); // Close menu on item click for mobile view
    }
  }

  return (
    <div className="navbar">
      <img src={menu_open} onClick={openMenu} alt="Open Menu" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />

        <li>
          <AnchorLink className="anchor-link" href="#hero">
            <p onClick={() => handleMenuClick("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => handleMenuClick("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#Projects">
            <p onClick={() => handleMenuClick("projects")}>Projects</p>
          </AnchorLink>
          {menu === "projects" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#Experience">
            <p onClick={() => handleMenuClick("Experience")}>Experience</p>
          </AnchorLink>
          {menu === "Experience" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#certificate">
            <p onClick={() => handleMenuClick("certificate")}>Certificates</p>
          </AnchorLink>
          {menu === "certificate" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => handleMenuClick("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="" />}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
