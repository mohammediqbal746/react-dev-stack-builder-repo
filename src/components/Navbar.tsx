import React from 'react';
import logo from '../assets/logo-text.png';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Mobile Hamburger */}
        <div className="md:hidden flex-1 flex items-center">
          <button className="text-gray-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </button>
        </div>

        {/* Center/Left: Logo */}
        <div className="flex-1 md:flex-none flex justify-center md:justify-start items-center cursor-pointer">
          <img src={logo} alt="Dev Stack Logo" className="h-8 md:h-10 object-contain" />
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-orange-500 transition-colors">Home</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Technologies</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Projects</a>
          <a href="#" className="hover:text-orange-500 transition-colors">About</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Contact</a>
        </div>

        {/* Right: Buttons */}
        <div className="flex-1 md:flex-none flex justify-end items-center gap-2 md:gap-4">
          <button className="font-bold text-gray-700 hover:text-orange-500 transition-colors px-2 md:px-4 py-2 text-sm md:text-base">
            Sign In
          </button>
          <button className="brand-gradient-bg rounded-full text-white px-4 md:px-6 py-2 font-medium hover:opacity-90 text-sm md:text-base">
            Sign Up
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;