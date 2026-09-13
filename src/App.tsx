import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

const App = () => {
  return (
    <div className="min-h-screen bg-base-100 font-sans">
    
      <Navbar/>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Banner */}
        <Banner />

        <div className="flex flex-col md:flex-row gap-6">
          
          <div className="w-full md:w-2/3 bg-green-100 p-4 h-64 flex items-center justify-center rounded-xl">
            Cards Grid Placeholder
          </div>

          {/* Your Stack Sidebar */}
          <div className="w-full md:w-1/3 bg-purple-100 p-4 h-64 flex items-center justify-center rounded-xl">
            Your Stack Placeholder
          </div>

        </div>
      </main>

      <footer className="p-4 bg-gray-800 text-white text-center mt-12">Footer Placeholder</footer>
      
    </div>
  );
};

export default App;