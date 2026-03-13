import React from 'react';
import { motion } from 'framer-motion';
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
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              I build software that actually works in the real world-where real teams, real users, and real problems exist.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm Maledimo Emanuel (most people call me Noah). Software Developer with a background in Mathematics and Computer Science. I build production-ready systems that solve operational problems: logistics, communication platforms, internal tools used by real teams. I've shipped web and mobile apps for startups, non-profits, and operational businesses-complex requirements turned into software that ships and stays in production.
            </p>

            <p className="text-gray-600 font-medium mb-2">How I work:</p>
            <ul className="text-gray-600 text-sm mb-8 space-y-1">
              <li><strong>Full-stack delivery</strong> - APIs, data models, and frontends that ship together.</li>
              <li><strong>Problem-first</strong> - Solve the business problem.</li>
              <li><strong>User-driven</strong> - Usability and clarity.</li>
            </ul>

            <p className="text-gray-600 mb-6 leading-relaxed">
              By day I build communication platforms at <strong>BIGSMS</strong> (Melbourne, Australia), used by businesses to engage customers at scale. Outside work, I build tech-driven projects aimed at solving real-world problems, including <em>Resafe</em>-a mobile app tackling gender-based violence in South Africa.
            </p>

            <div className="border-l-4 border-blue-500 pl-4">
              <p className="text-gray-800 italic font-medium">
                "Everything should be made as simple as possible. But to do that you have to master complexity."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
