// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Footer />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
