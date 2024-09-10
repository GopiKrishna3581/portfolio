// src/components/Sidebar.jsx
import React from 'react';
import { FaHome, FaProjectDiagram, FaTools, FaEnvelope } from 'react-icons/fa'; // Importing icons for Home, Projects, Skills, and Contact
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  const handleProjects = () => {
    navigate("/projects");
  };

  const handleSkills = () => {
    navigate("/skills");
  };

  const handleContact = () => {
    navigate("/contact");
  };

  const items = [
    { icon: <FaHome className="text-4xl" />, action: handleHome, name: "Home" },
    { icon: <FaProjectDiagram className="text-4xl" />, action: handleProjects, name: "Projects" },
    { icon: <FaTools className="text-4xl" />, action: handleSkills, name: "Skills" },
    { icon: <FaEnvelope className="text-4xl" />, action: handleContact, name: "Contact" }, // Added Contact section
  ];

  return (
    <motion.div
      className="sidebar fixed left-0 top-1/2 transform -translate-y-1/2 z-10 text-violet-400 flex items-center bg-transparent justify-center border-zinc-700 rounded-2xl w-[80px] transition-all duration-500"
      initial={{ width: "50px", opacity: 0.3 }}
      whileHover={{ width: "50px", opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="icons flex flex-col gap-8 items-center justify-center w-full mt-10">
        {items.map(({ icon, action, name }, index) => (
          <motion.div
            key={index}
            className="relative flex items-center cursor-pointer group"
            onClick={action}
            whileHover={{ scale: 1.5, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {icon}
            <span className="absolute left-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-violet-400">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Sidebar;
