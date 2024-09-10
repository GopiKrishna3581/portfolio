import React from 'react';
import { FaCuttlefish, FaPython, FaHtml5, FaCss3Alt, FaReact, FaDatabase, FaGitAlt, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss, SiCplusplus } from 'react-icons/si'; // Make sure these are available

const skills = [
  { name: 'C', icon: <FaCuttlefish className="text-4xl text-purple-200" /> }, // Use correct icon
  { name: 'C++', icon: <SiCplusplus className="text-4xl text-purple-200" /> },
  { name: 'Python', icon: <FaPython className="text-4xl text-purple-200" /> },
  { name: 'HTML', icon: <FaHtml5 className="text-4xl text-purple-200" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-4xl text-purple-200" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-purple-200" /> },
  { name: 'React.js', icon: <FaReact className="text-4xl text-purple-200" /> },
  { name: 'SQL', icon: <FaDatabase className="text-4xl text-purple-200" /> },
  { name: 'Git', icon: <FaGitAlt className="text-4xl text-purple-200" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-4xl text-purple-200" /> },
];

const Skills = () => {
  return (
    <section className="py-12 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-purple-300">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-gray-700 shadow-lg rounded-lg p-6 flex items-center gap-4">
              <div className="text-center">
                {skill.icon}
                <h3 className="text-xl font-semibold text-purple-200 mt-2">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
