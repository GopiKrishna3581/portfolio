// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer'; // Import the Footer component

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#09031C] to-[#1F0425]">
      <div className="flex flex-grow">
        <div className="fixed top-1/2 left-5 transform -translate-y-1/2 w-16 p-4 z-10 bg-transparent">
          <Sidebar />
        </div>
        <div className="flex-grow p-4">
          {/* Outlet will render the current route's component */}
          <Outlet />
        </div>
      </div>
     
    </div>
  );
};

export default Layout;
