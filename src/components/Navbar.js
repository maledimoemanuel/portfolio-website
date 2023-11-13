import React from 'react';
import {FaHome, FaInfo, FaTools,FaClipboardList, FaLink} from 'react-icons/fa'
import './style.css'

function Navbar() {
  const NavLink = ({ to, label }) => {
    return (
      <a
        href={to}
        className="text-white hover:text-gray-300 transition duration-300"
      >
        {label}
      </a>
    );
  };

  return (
    <nav className="bg-gradient-to-r from-blue-700 via-purple-800 to-pink-800 rounded-lg p-4 fixed bottom-5 flex justify-center md:w-auto animate-pulse">
      <div className="container mx-auto">
        <div className="flex space-x-4 flex-col md:flex-row md:items-center md:justify-between">
          <NavLink to="/" label={<FaHome className='mr-3'/>}/>
          <NavLink to="/about" label={<FaInfo className='mr-3'/>} />
          <NavLink to="/skills" label={<FaTools className='mr-3'/>} />
          <NavLink to="/projects" label={<FaClipboardList className='mr-3'/>}/>
          <NavLink to="/contact" label={<FaLink />}/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
