import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import profileImage from '../assets/me.jpg';
import './style.css';

function About() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Set fadeIn to true after the component has mounted
    setFadeIn(true);
  }, []);

  return (
    <div className={`about-container ${fadeIn ? 'fade-in' : ''} py-16`} id='about'>
      <p className='text-6xl text-gray-700 font-bold'>About me</p>
      <div className='flex pt-20 content'>
        <div className="left-content">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="right-content max-w-4xl mx-auto">
          <h1 className="about-title">Hello World! 👋 I'm Maledimo Emanuel.</h1>
          <p className="about-description">
            I'm a passionate <strong>full-stack software developer</strong> with a BSc in Mathematics and Computer Science. My expertise lies in building robust, user-friendly applications using the <strong>MERN stack</strong> (MongoDB, Express.js, React, and Node.js). 🚀  
            <br></br>
            <br></br>
            My academic foundation in mathematics and computer science has equipped me with exceptional analytical and problem-solving skills. I specialize in developing scalable, efficient systems while creating seamless and engaging user experiences. Whether designing dynamic frontends or optimizing backend processes, I approach every challenge with precision and creativity.  
            <br></br>
            <br></br>
            I’m a lifelong learner with a commitment to staying ahead in the ever-evolving world of technology. My experience with the MERN stack and other cutting-edge tools allows me to adapt quickly to new environments and contribute to innovative, impactful solutions. Let’s connect and build something extraordinary together! 🌟
          </p>
        </div>

      </div>
      <Navbar />
    </div>
  );
}

export default About;
