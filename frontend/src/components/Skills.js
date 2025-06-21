import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaMobileAlt,
  FaGitAlt,
  FaFigma,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaServer
} from 'react-icons/fa';
import { 
  SiTailwindcss,
  SiFlutter,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiDotnet,
  SiPostman,
  SiVisualstudiocode
} from 'react-icons/si';

const N8nIcon = () => (
  <svg viewBox="0 0 24 24" className="text-green-500 w-6 h-6">
    <path 
      fill="currentColor" 
      d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm0 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10zm-2-14h4v2h-4zm0 4h4v2h-4zm0 4h4v2h-4z"
    />
  </svg>
);

const Skills = () => {
  // Skill categories data
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact className="text-blue-500" />,
      skills: [
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> }
      ]
    },
    {
      title: "Mobile",
      icon: <FaMobileAlt className="text-purple-500" />,
      skills: [
        { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
        { name: "React Native", icon: <FaReact className="text-blue-500" /> }
      ]
    },
    {
      title: "Backend",
      icon: <FaNodeJs className="text-green-500" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-800" /> },
        { name: "ASP.NET", icon: <SiDotnet className="text-purple-600" /> },
        { name: "REST APIs", icon: <FaServer className="text-indigo-500" /> }
      ]
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-yellow-500" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "SQL Server", icon: <FaDatabase className="text-red-500" /> }
      ]
    },
    {
      title: "Tools",
      icon: <FaGitAlt className="text-orange-600" />,
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "VS Code", icon: <SiVisualstudiocode className="text-blue-500" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "Figma", icon: <FaFigma className="text-purple-500" /> },
        { name: "n8n", icon: <N8nIcon />  }
      ]
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
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
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">Toolbox</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies I use to build, ship, and solve problems effectively
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50"
                    >
                      <div className="text-2xl">
                        {skill.icon}
                      </div>
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            I focus on mastering tools that deliver real value. This stack represents my current workflow for building production-ready applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;