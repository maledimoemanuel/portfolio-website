import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobile, FaBrain } from 'react-icons/fa';
import profilePhoto from '../assets/Me.PNG'; 

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Who I Am, What I Do, and <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">Why I Do It</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src={profilePhoto} 
                alt="Maledimo Emanuel (Noah)" 
                className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
              />
              <div className="absolute -inset-4 border-2 border-blue-400 rounded-2xl opacity-20 pointer-events-none"></div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              I'm Maledimo Emanuel, but most people call me Noah. I'm a Software Developer with a background in Mathematics and Computer Science, focused on building production-ready systems that solve operational problems - from logistics and communication platforms to internal tools used by real teams.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              I've worked on web and mobile applications for startups, non-profits, and operational businesses, translating complex requirements into reliable, maintainable software.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                  <FaCode className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Full-stack delivery</h4>
                  <p className="text-gray-600 text-sm">I design APIs, data models, and frontends that work together cleanly.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600">
                  <FaServer className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Production-minded</h4>
                  <p className="text-gray-600 text-sm">I write code that's maintainable, documented, and built to survive real usage.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-50 rounded-lg text-purple-600">
                  <FaMobile className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">User-driven</h4>
                  <p className="text-gray-600 text-sm">I prioritise usability and clarity over flashy UI.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-pink-50 rounded-lg text-pink-600">
                  <FaBrain className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Problem-first</h4>
                  <p className="text-gray-600 text-sm">I focus on solving the underlying business problem, not just "building features".</p>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              I currently work remotely as a Software Developer at BIGSMS (Melbourne, Australia), where I build communication platforms used by businesses to engage customers at scale.
              Alongside my professional work, I'm building <em>Resafe</em>, a mobile app aimed at tackling gender-based violence in South Africa through technology-driven reporting and awareness.
            </p>

            <div className="border-l-4 border-blue-500 pl-4">
              <p className="text-gray-800 italic font-medium">
          “Everything should be made as simple as possible. But to do that you have to master complexity.”              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;