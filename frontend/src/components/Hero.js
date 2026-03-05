import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { Link as ScrollLink } from 'react-scroll'; 
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import './style.css';

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
            aria-label="Noah home"
            className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-gray-300 bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
              N
            </span>
          </Link>
        </motion.div>

        {/* Hero Title - full width */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          I build{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
            production systems
          </span>{" "}
          that solve real operational problems.
        </motion.h1>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            className="lg:w-1/2"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2
              className="text-xl md:text-2xl font-medium text-gray-600 mb-6"
              variants={itemVariants}
            >
              Full-stack software developer focused on backend architecture, scalable APIs, real-time systems, and clean, usable interfaces.
            </motion.h2>

            <motion.div
              className="text-lg text-gray-600 leading-relaxed mb-10 max-w-lg space-y-4"
              variants={itemVariants}
            >
              <p>
                I design and build software that businesses rely on - APIs, dashboards, and mobile applications that support live operations, payments, and data-driven decision-making.
              </p>
              <p>
                Currently working remotely with international clients, shipping systems that handle real users, real transactions, and real constraints.
              </p>
            </motion.div>

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
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-full max-w-sm">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                <p className="text-[11px] font-semibold text-blue-600 uppercase tracking-[0.2em] mb-4">
                  System overview
                </p>
                <div className="space-y-2 text-sm text-gray-800 font-mono">
                  <p>Client Apps</p>
                  <p className="text-gray-400 text-xs">↓</p>
                  <p>Web &amp; Mobile Interfaces</p>
                  <p className="text-gray-400 text-xs">↓</p>
                  <p>REST APIs / SignalR</p>
                  <p className="text-gray-400 text-xs">↓</p>
                  <p>Core Services &amp; Business Logic</p>
                  <p className="text-gray-400 text-xs">↓</p>
                  <p>SQL Server / Optimization Engine</p>
                  <p className="text-gray-400 text-xs">↓</p>
                  <p>Payments • Maps • Messaging</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
}

export default Hero;