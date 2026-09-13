import React from 'react';

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between py-16 gap-8">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
          Build Your Ideal <br />
          <span className="brand-gradient-text">
            Development Stack
          </span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
          Explore frontend, backend, database, and tooling options. Compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
          <button className="brand-gradient-bg rounded-full text-white px-8 py-3 text-lg font-medium hover:opacity-90 transition-opacity">
            Explore Technologies
          </button>
          <button className="rounded-full px-8 py-3 text-gray-700 border border-gray-300 hover:bg-gray-50 text-lg font-medium transition-colors">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center w-full">
        <img 
          src="/banner-stack.png" 
          alt="dev stack illustration" 
          className="w-full max-w-md md:max-w-lg object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default Banner; 