import React from 'react';
import logo from '../assets/logo-text.png';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center cursor-pointer">
          <img src={logo} alt="Dev Stack Logo" className="h-8 md:h-10 object-contain" />
        </div>
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-orange-500 transition-colors">Home</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Technologies</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Projects</a>
          <a href="#" className="hover:text-orange-500 transition-colors">About</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Contact</a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button className="font-bold text-gray-700 hover:text-orange-500 transition-colors px-4 py-2">Sign In</button>
          <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white px-6 py-2 font-medium hover:opacity-90">
            Sign Up
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-gray-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;