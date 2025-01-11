import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './style.css';
import { Link } from 'react-router-dom';
import image from '../assets/hero.svg';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

function Hero() {
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    setSlideIn(true);
  }, []);

  return (
    <div className={`hero-container ${slideIn ? 'slide-in' : ''} py-16`} id="hero">
      <Link to="/" className="logo">Noah.</Link>
      <Link to="https://yellow-cory-85.tiiny.site" target="_blank" className="resume-button">CV</Link>
      <div className="content-container">
        <div className="left-content">
          <p className="welcome-message">Hello there, welcome to my site!</p>
          <h2 className="name">I'm Maledimo Emanuel</h2>
          <h1 className="role">A Full-Stack Software Developer</h1>
          <ul className="social-links">
            <li><a href="https://github.com/maledimoemanuel" target="_blank"><FaGithub className="link-icons" /></a></li>
            <li><a href="https://linkedin.com/in/emanuel-maledimo-13770b200" target="_blank"><FaLinkedin className="link-icons" /></a></li>
            <li><a href="mailto: maledimoemanuel@gmail.com" target="_blank"><FaEnvelope className="link-icons" /></a></li>
            <li><a href="tel: +27790378046" target="_blank"><FaPhone className="link-icons" /></a></li>
          </ul>
        </div>
        <div className="right-content">
          <img src={image} alt="Right Illustration" />
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Hero;
