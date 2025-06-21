import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { Link as ScrollLink } from 'react-scroll'; 
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaFileAlt, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import './style.css';
import heroImage from '../assets/hero.svg';

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" id="hero">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-12">
        {/* Header */}
        <motion.div
          className="flex justify-between items-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500"
          >
            N.
          </Link>
          <Link
            to="https://yellow-cory-85.tiiny.site"
            target="_blank"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-500 text-white hover:from-blue-700 hover:to-indigo-600 transition-all shadow-md hover:shadow-lg group"
          >
            <FaFileAlt className="text-sm" />
            <span>View CV</span>
            <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            className="lg:w-1/2"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.p
              className="text-lg font-medium text-gray-500 mb-4"
              variants={itemVariants}
            >
              Hey there, I'm Maledimo Emanuel 👋🏾
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              variants={itemVariants}
            >
              But please, call me <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">Noah</span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl font-medium text-gray-700 mb-8"
              variants={itemVariants}
            >
              I craft <span className="text-blue-600">digital experiences</span> from backend to UI
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 leading-relaxed mb-10 max-w-lg"
              variants={itemVariants}
            >
              I'm a Software Developer with a sharp eye for impactful design, clean code, and real-world solutions.
              Let's build something powerful together.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              variants={itemVariants}
            >
              <ScrollLink
                to="projects" 
                spy={true}
                smooth={true}
                offset={-70} 
                duration={500}
                className="px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-lg hover:from-blue-700 hover:to-indigo-600 transition-all shadow-md hover:shadow-lg text-center font-medium flex items-center justify-center gap-2 cursor-pointer"
              >
                See My Work
                <FaArrowRight className="text-xs" />
              </ScrollLink>
              <ScrollLink
                to="contact" 
                spy={true}
                smooth={true}
                offset={-70} 
                duration={500}
                className="px-7 py-3.5 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all font-medium text-center cursor-pointer"
              >
                Contact Me
              </ScrollLink>
            </motion.div>

            <motion.div
              className="flex gap-5"
              variants={itemVariants}
            >
              <a href="https://github.com/maledimoemanuel" target="_blank" rel="noopener noreferrer" className="social-icon">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-blue-600 hover:shadow-lg transition-all">
                  <FaGithub className="text-xl" />
                </div>
              </a>
              <a href="https://linkedin.com/in/emanuel-maledimo-13770b200" target="_blank" rel="noopener noreferrer" className="social-icon">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-blue-600 hover:shadow-lg transition-all">
                  <FaLinkedin className="text-xl" />
                </div>
              </a>
              <a href="mailto:maledimoemanuel@gmail.com" className="social-icon">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-blue-600 hover:shadow-lg transition-all">
                  <FaEnvelope className="text-xl" />
                </div>
              </a>
              <a href="tel:+27790378046" className="social-icon">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-blue-600 hover:shadow-lg transition-all">
                  <FaPhone className="text-xl" />
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
          </motion.div>
        </div>
      </div>

      <Navbar />
    </div>
  );
}

export default Hero;