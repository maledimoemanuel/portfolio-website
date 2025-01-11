import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectCard = ({ project }) => (
  <div className="flex flex-col items-center p-4 shadow-md rounded-lg project-card">
    <img
      src={project.image}
      alt={project.name}
      className="w-full h-48 object-cover rounded-md mb-4 project-image"
    />
    <h3 className="text-xl font-bold mb-2 text-gray-700">{project.name}</h3>
    <p className="text-white text-sm mb-4">{project.description}</p>
    <div className="flex justify-between w-full">
      <a
        href={project.demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 font-medium hover:underline"
      >
        Demo
      </a>
      <a
        href={project.githubRepo}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 font-medium hover:underline"
      >
        GitHub
      </a>
    </div>
  </div>
);

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/projects')
      .then((response) => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching projects: ', error);
        setLoading(false);
      });
  }, []); 

  return (
    <div className="flex flex-col justify-center items-center min-h-screen projects-container" id="projects">
      <h2 className="text-6xl font-bold text-gray-700 mb-6">Projects</h2>
      {loading ? (
        <p>Projects loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
