import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="relative bg-gray-900 text-gray-100 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://via.placeholder.com/1500x800)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 text-center px-4 py-12 max-w-3xl mx-auto">
        <motion.h1
          className="text-6xl font-extrabold mb-6 text-purple-300"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Gopi Krishna
        </motion.h1>
        <motion.p
          className="text-xl mb-8 text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I’m a passionate developer specializing in creating exceptional digital experiences. 
          Explore my projects and skills to learn more about what I can do.
        </motion.p>
        <a
          href="/projects"
          className="inline-block px-8 py-4 bg-purple-600 text-gray-100 font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          Explore My Work
        </a>
      </div>
    </section>
  );
};

export default Home;
