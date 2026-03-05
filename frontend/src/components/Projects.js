import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { FiCode, FiGlobe } from 'react-icons/fi';
import { staticProjects } from '../data/staticProjects';
import './style.css';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw7pZDPcySChkhXVPwKoSqYh05G37-ejg",
  authDomain: "votocracy-b43a0.firebaseapp.com",
  projectId: "votocracy-b43a0",
  storageBucket: "votocracy-b43a0.appspot.com",
  messagingSenderId: "883726884668",
  appId: "1:883726884668:web:ea6e47e729c591dfb4c839"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/** Get images for a project: use `images` array if present, else single `image`, else empty. */
function getProjectImages(project) {
  if (Array.isArray(project.images) && project.images.length > 0) return project.images;
  if (project.image) return [project.image];
  return [];
}

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedIds, setExpandedIds] = useState(() => new Set());
  const [imageIndices, setImageIndices] = useState(() => ({}));
  const [lightbox, setLightbox] = useState(null); // { projectId, imageIndex }

  const openLightbox = (projectId, imageIndex) => setLightbox({ projectId, imageIndex });
  const closeLightbox = () => setLightbox(null);

  const goToLightboxImage = (delta) => {
    if (!lightbox) return;
    const project = projects.find((p) => p.id === lightbox.projectId);
    if (!project) return;
    const images = getProjectImages(project);
    if (images.length === 0) return;
    setLightbox((prev) => {
      const next = (prev.imageIndex + delta + images.length) % images.length;
      return { ...prev, imageIndex: next };
    });
  };

  const toggleDescription = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const goToPrevImage = (projectId, total) => {
    setImageIndices((prev) => {
      const current = prev[projectId] ?? 0;
      return { ...prev, [projectId]: current === 0 ? total - 1 : current - 1 };
    });
  };

  const goToNextImage = (projectId, total) => {
    setImageIndices((prev) => {
      const current = prev[projectId] ?? 0;
      return { ...prev, [projectId]: (current + 1) % total };
    });
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'projects'));
        const firebaseProjects = [];
        querySnapshot.forEach((doc) => {
          firebaseProjects.push({ id: doc.id, ...doc.data() });
        });
        const staticIds = new Set(staticProjects.map((p) => p.id));
        const fromFirebase = firebaseProjects.filter((p) => !staticIds.has(p.id));
        const merged = [...staticProjects, ...fromFirebase];
        merged.sort((a, b) => (b.featured || false) - (a.featured || false));
        setProjects(merged);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        const merged = [...staticProjects];
        merged.sort((a, b) => (b.featured || false) - (a.featured || false));
        setProjects(merged);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    if (lightbox) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Some of the projects I've worked on!
          </p>
        </motion.div>

        {/* Projects Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm h-full animate-pulse">
                <div className="h-48 bg-gray-200 rounded-t-xl"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3 mb-6"></div>
                  <div className="h-8 bg-gray-200 rounded w-full"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.length > 0 ? (
              projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.5,
                        ease: "easeOut"
                      }
                    }
                  }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden h-full flex flex-col"
                >
                  {/* Project image(s) gallery */}
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    {(() => {
                      const images = getProjectImages(project);
                      const total = images.length;
                      const currentIndex = total > 0 ? ((imageIndices[project.id] ?? 0) % total) : 0;
                      const src = images[currentIndex];

                      if (!src) {
                        return (
                          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                            No image
                          </div>
                        );
                      }

                      return (
                        <>
                          <button
                            type="button"
                            onClick={() => openLightbox(project.id, currentIndex)}
                            className="absolute inset-0 w-full h-full block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                            aria-label={`View ${project.name} image ${currentIndex + 1} of ${total} larger`}
                          >
                            <img
                              key={src}
                              src={src}
                              alt={`${project.name} - image ${currentIndex + 1} of ${total}`}
                              className="w-full h-full object-cover transition-opacity duration-300 cursor-zoom-in hover:opacity-95"
                            />
                          </button>
                          {total > 1 && (
                            <>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  goToPrevImage(project.id, total);
                                }}
                                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                                aria-label="Previous image"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                              </button>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  goToNextImage(project.id, total);
                                }}
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                                aria-label="Next image"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                              </button>
                              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded-full bg-black/60 text-white text-xs font-medium">
                                {currentIndex + 1} / {total}
                              </div>
                            </>
                          )}
                        </>
                      );
                    })()}
                    {project.type && (
                      <div className="absolute bottom-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                        {project.type}
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                    {project.description && (
                      <>
                        <p
                          className={`text-gray-600 mb-1 ${expandedIds.has(project.id) ? '' : 'line-clamp-3'}`}
                        >
                          {project.description}
                        </p>
                        <button
                          type="button"
                          onClick={() => toggleDescription(project.id)}
                          className="text-blue-600 hover:text-blue-700 text-sm font-medium mb-4 self-start focus:outline-none focus:underline"
                        >
                          {expandedIds.has(project.id) ? 'Show less' : 'Read more'}
                        </button>
                      </>
                    )}
                    {!project.description && <div className="mb-4" />}
                    
                    {/* Tech Stack */}
                    {Array.isArray(project.stack) && project.stack.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.stack.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Role */}
                    {project.role && (
                      <p className="text-sm text-gray-500 mb-6 italic">"{project.role}"</p>
                    )}

                    {/* Buttons */}
                    <div className="mt-auto flex flex-wrap gap-3">
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                        >
                          <FiGlobe />
                          {project.appStoreLink
                            ? 'Google Play'
                            : project.demoLink.includes('play.google.com')
                              ? 'Google Play'
                              : 'View Demo'}
                        </a>
                      )}
                      {project.appStoreLink && (
                        <a
                          href={project.appStoreLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm font-medium"
                        >
                          <FiGlobe />
                          App Store
                        </a>
                      )}
                      {project.githubRepo && (
                        <a
                          href={project.githubRepo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm font-medium"
                        >
                          <FiCode />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">No projects to show yet.</p>
              </div>
            )}
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (() => {
        const project = projects.find((p) => p.id === lightbox.projectId);
        if (!project) return null;
        const images = getProjectImages(project);
        const src = images[lightbox.imageIndex];
        const total = images.length;
        if (!src) return null;
        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.name} image ${lightbox.imageIndex + 1} of ${total}`}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); goToLightboxImage(-1); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); goToLightboxImage(1); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-3 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium">
                  {lightbox.imageIndex + 1} / {total}
                </div>
              </>
            )}
            <img
              src={src}
              alt={`${project.name} - image ${lightbox.imageIndex + 1} of ${total}`}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        );
      })()}
    </section>
  );
};

export default Projects;