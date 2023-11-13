import React from 'react';
import Navbar from './Navbar';

function Hero() {
  return (
    <div className='w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 flex flex-col justify-center items-center'>
      <div className='flex justify-between w-full mb-8'>
        <div className='text-white font-bold text-6xl'>left</div>
        <div className='text-white font-bold text-6xl'>right</div>
      </div>
      <Navbar />
    </div>
  );
}

export default Hero;
