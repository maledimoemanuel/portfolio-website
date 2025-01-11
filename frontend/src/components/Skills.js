import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap, FaNodeJs, FaCloud, FaPython, FaGit, FaFigma, FaGithub } from "react-icons/fa";
import { SiApifox, SiCanva, SiExpress, SiFirebase, SiMongodb, SiMysql, SiPostman, SiTailwindcss } from "react-icons/si";
import axios from 'axios';

const skills = [
  { name: 'HTML5', icon: <FaHtml5/> },
  { name: 'CSS3', icon: <FaCss3/> },
  { name: 'JavaScript', icon: <FaJs/> },
  { name: 'ReactJS', icon: <FaReact/> },
  { name: 'Bootstrap', icon: <FaBootstrap/>},
  {name: 'TailwindCSS', icon: <SiTailwindcss/>}
];

const backendSkills = [
  { name: 'Node.js', icon: <FaNodeJs/> },
  { name: 'Express.js', icon: <SiExpress/> },
];

const databases = [
  { name: 'MongoDB', icon: <SiMongodb/> },
  { name: 'MySQL', icon: <SiMysql/> },
  { name: 'Firebase', icon: <SiFirebase/>}
];

const api = [
  { name: `REST APIs`, icon: <FaCloud/> },
  { name: 'Postman', icon: <SiPostman/>}
];

const languages = [
  { name: `JavaScript`, icon: <FaJs/> },
  { name: 'Python', icon: <FaPython/>},
];

const otherSkills = [
  { name: `Git and Github`, icon: <FaGithub/> },
  { name: 'Figma', icon: <FaFigma/>},
  { name: 'Canva', icon: <SiCanva/>},
];

const SkillBadge = ({ skill, icon }) => (
  <div className="flex items-center space-x-2">
    <span className='text-white text-xl'>{icon}</span>
    <span className="font-semibold">{skill}</span>
  </div>
);

function Skills() {
  const [skillsData, setSkillsData] = useState([]);
  
  useEffect(() => {
    // Fetch skills data from the backend API
    axios.get('http://localhost:5000/api/skills')
      .then(response => {
        setSkillsData(response.data);
      })
      .catch(error => {
        console.error('Error fetching skills data:', error);
      });
  }, []);
  
  const skillCategories = skillsData.length > 0 ? skillsData : [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3 /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Bootstrap', icon: <FaBootstrap /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss /> },
  ];
  
  return (
    <div className='flex flex-col justify-center items-center py-16 skills-container' id='skills'>   
      <div className="text-6xl font-bold text-gray-700 mb-8">Skills</div>
      <div className='flex flex-wrap justify-center gap-6 skills-content'>
        
        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 rounded-xl shadow-md skill-category">
          <p className='text-xl font-medium text-gray-700 mb-5'> Languages</p>
          <div className="flex flex-col gap-4">
            {languages.map((skill) => (
              <SkillBadge key={skill.name} skill={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 rounded-xl shadow-md skill-category">
          <p className='text-xl font-medium text-gray-700 mb-5'> Frontend</p>
          <div className="flex flex-col gap-4">
            {skills.map((skill) => (
              <SkillBadge key={skill.name} skill={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 rounded-xl shadow-md skill-category">
          <p className='text-xl font-medium text-gray-700 mb-5'> Backend</p>
          <div className="flex flex-col gap-4">
            {backendSkills.map((skill) => (
              <SkillBadge key={skill.name} skill={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 rounded-xl shadow-md skill-category">
          <p className='text-xl font-medium text-gray-700 mb-5'> Databases</p>
          <div className="flex flex-col gap-4">
            {databases.map((skill) => (
              <SkillBadge key={skill.name} skill={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 rounded-xl shadow-md skill-category">
          <p className='text-xl font-medium text-gray-700 mb-5'> API</p>
          <div className="flex flex-col gap-4">
            {api.map((skill) => (
              <SkillBadge key={skill.name} skill={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 rounded-xl shadow-md skill-category">
          <p className='text-xl font-medium text-gray-700 mb-5'> Other Skills</p>
          <div className="flex flex-col gap-4">
            {otherSkills.map((skill) => (
              <SkillBadge key={skill.name} skill={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Skills;
