import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa'; // For links to project repositories or live sites

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of project 1. Showcasing skills and technologies used.',
    image: 'https://via.placeholder.com/400x250', // Replace with actual project images
    repo: 'https://github.com/your-repo/project1',
    demo: 'https://project1-demo.com'
  },
  {
    title: 'Project 2',
    description: 'A brief description of project 2. Highlighting features and benefits.',
    image: 'https://via.placeholder.com/400x250', // Replace with actual project images
    repo: 'https://github.com/your-repo/project2',
    demo: 'https://project2-demo.com'
  },
  {
    title: 'Project 3',
    description: 'A brief description of project 3. Demonstrating the impact and results.',
    image: 'https://via.placeholder.com/400x250', // Replace with actual project images
    repo: 'https://github.com/your-repo/project3',
    demo: 'https://project3-demo.com'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-gray-800 text-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-purple-300 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-200 mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 flex items-center gap-1">
                    <FaGithub className="text-xl" />
                    <span>Repo</span>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 flex items-center gap-1">
                    <FaLink className="text-xl" />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
