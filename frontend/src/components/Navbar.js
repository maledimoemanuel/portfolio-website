import React, {useState} from 'react';
import {FaHome, FaInfo, FaTools,FaClipboardList, FaEnvelope} from 'react-icons/fa'
import { Link as ScrollLink } from 'react-scroll';
import './style.css'

function Navbar() {
  const [activeComponent, setActiveComponent] = useState('hero');
  

  return (
    <nav className="bg-gradient-to-r from-blue-700 via-purple-800 to-pink-800 rounded-lg p-4 fixed bottom-5 flex justify-center md:w-auto animate-pulse">
      <div className="container mx-auto">
        <div className="flex space-x-4 md:items-center md:justify-between icons">
            <ScrollLink to='hero' activeClass='active' spy={true} smooth={true} offset={-70} duration={500} onClick={() => setActiveComponent('hero')} className='icon' data-hover-text="Home"><FaHome className='mr-3'/></ScrollLink>
            <ScrollLink to='about' activeClass='active' spy={true} smooth={true} offset={-70} duration={500} onClick={() => setActiveComponent('about')} className='icon' data-hover-text="About"><FaInfo className='mr-3'/></ScrollLink>
            <ScrollLink to='skills' activeClass='active' spy={true} smooth={true} offset={-70} duration={500} onClick={() => setActiveComponent('skills')} className='icon' data-hover-text="Skills"><FaTools className='mr-3'/></ScrollLink>
            <ScrollLink to='projects' activeClass='active' spy={true} smooth={true} offset={-70} duration={500} onClick={() => setActiveComponent('projects')} className='icon' data-hover-text="Projects"><FaClipboardList className='mr-3'/></ScrollLink>
            <ScrollLink to='contact' activeClass='active' spy={true} smooth={true} offset={-70} duration={500} onClick={() => setActiveComponent('contact')} className='icon' data-hover-text="Contact"><FaEnvelope /></ScrollLink>
        </div>
      </div>
    </nav>
  );
}



export default Navbar;
