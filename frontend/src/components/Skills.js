import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaDatabase,
  FaMobileAlt,
  FaGitAlt,
  FaFigma,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaServer,
  FaBolt,
  FaRoute,
  FaMapMarkedAlt,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiTypescript,
  SiFlutter,
  SiMysql,
  SiFirebase,
  SiDotnet,
  SiPostman,
  SiVisualstudiocode,
  SiStripe,
  SiPaypal,
  SiMicrosoftazure,
  SiSupabase,
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
  const capabilityClusters = [
    {
      title: 'Frontend',
      icon: <FaReact className="text-blue-500" />,
      description:
        'React-based web applications with reusable component systems. Responsive UI with Tailwind. API-driven frontends and dashboard-style interfaces.',
      skills: [
        { name: 'React', icon: <FaReact className="text-blue-500" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-400" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
      ],
    },
    {
      title: 'Mobile',
      icon: <FaMobileAlt className="text-purple-500" />,
      description:
        'Cross-platform mobile apps with Flutter and React Native. Real-world features: location, maps, forms, auth.',
      skills: [
        { name: 'Flutter', icon: <SiFlutter className="text-blue-400" /> },
        { name: 'React Native', icon: <FaReact className="text-blue-500" /> },
      ],
    },
    {
      title: 'Backend & APIs',
      icon: <FaServer className="text-green-500" />,
      description:
        'ASP.NET backend services. REST APIs for web and mobile. Data modeling, auth, RBAC. Payment integrations.',
      skills: [
        { name: 'ASP.NET', icon: <SiDotnet className="text-purple-600" /> },
        { name: 'REST APIs', icon: <FaServer className="text-indigo-500" /> },
        { name: 'SQL Server', icon: <FaDatabase className="text-red-500" /> },
        { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
        { name: 'Supabase', icon: <SiSupabase className="text-green-600" /> },
        { name: 'Stripe', icon: <SiStripe className="text-indigo-500" /> },
        { name: 'PayPal', icon: <SiPaypal className="text-blue-600" /> },
      ],
    },
    {
      title: 'Real-time, optimization & infrastructure',
      icon: <FaRoute className="text-amber-600" />,
      description:
        'Real-time features with SignalR. Route optimization and scheduling with Google OR-Tools. Google Maps for geospatial workflows. Deployment on IIS, Windows Server, and Azure.',
      skills: [
        { name: 'SignalR', icon: <FaBolt className="text-amber-500" /> },
        { name: 'Google OR-Tools', icon: <FaRoute className="text-amber-600" /> },
        { name: 'Google Maps', icon: <FaMapMarkedAlt className="text-red-500" /> },
        { name: 'Azure', icon: <SiMicrosoftazure className="text-blue-600" /> },
        { name: 'IIS', icon: <FaServer className="text-gray-600" /> },
        { name: 'Windows Server', icon: <FaServer className="text-gray-600" /> },
      ],
    },
    {
      title: 'Engineering practices',
      icon: <FaGitAlt className="text-orange-600" />,
      description:
        'Git-based workflows. API testing with Postman. Clean, maintainable, production-focused code.',
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
        { name: 'VS Code', icon: <SiVisualstudiocode className="text-blue-500" /> },
        { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
        { name: 'Figma', icon: <FaFigma className="text-purple-500" /> },
        { name: 'n8n', icon: <N8nIcon /> },
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
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
            How I <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">Build</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Production-capable across the stack - from frontend ownership to backend services, optimization, and deployment.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {capabilityClusters.map((cluster, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
            >
              <div className="p-6 flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    {cluster.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 leading-tight">
                    {cluster.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {cluster.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cluster.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ y: -2, transition: { duration: 0.2 } }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium"
                    >
                      <span className="text-lg">{skill.icon}</span>
                      {skill.name}
                    </motion.span>
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
            This is the stack I use to ship and maintain real systems. Logistics, SaaS, comms platforms, and internal tools.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
