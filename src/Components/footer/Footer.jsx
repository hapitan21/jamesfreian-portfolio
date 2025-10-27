import React from "react";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer__logo">JAMES</div>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.instagram.com/freeyiannn/" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
        <a href="https://github.com/hapitan21" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/james-freian-hapitan-7357a2370/" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; James Freian Hapitan | All Rights Reserved | 2024</small>
      </div>
    </footer>
  );
};

export default Footer;
