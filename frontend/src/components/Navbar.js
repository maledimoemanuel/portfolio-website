import React from 'react';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-sm rounded-full p-2 shadow-md">
        <NavItem to="hero" icon={<FaHome size={18} />} text="Home" />
        <NavItem to="about" icon={<FaUser size={18} />} text="About" />
        <NavItem to="skills" icon={<FaCode size={18} />} text="Skills" />
        <NavItem to="projects" icon={<FaProjectDiagram size={18} />} text="Work" />
        <NavItem to="contact" icon={<FaEnvelope size={18} />} text="Contact" />
      </div>
    </nav>
  );
}

const NavItem = ({ to, icon, text }) => (
  <ScrollLink
    to={to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    activeClass="text-blue-600"
    className="flex flex-col items-center px-4 py-2 text-gray-600 hover:text-blue-500 transition-colors cursor-pointer"
  >
    {icon}
    <span className="text-xs mt-1">{text}</span>
  </ScrollLink>
);

export default Navbar;