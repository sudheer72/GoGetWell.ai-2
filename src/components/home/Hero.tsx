import React from 'react';
import { useThemeStore } from '../../store/themeStore';

const Hero: React.FC = () => {
  const { currentTheme, themes } = useThemeStore();
  const theme = themes[currentTheme];
  
  return (
    <div 
      className="hero-gradient py-16 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${theme.gradientStart} 0%, ${theme.gradientEnd} 100%)`
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            We Handle Everything. 
            <span className="text-pink-300 block mt-2">You Focus on Healing</span>
          </h1>
          
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Upload Your Medical Reports to Explore the Best and Most Cost-Effective Treatments in Your Language
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Upload now
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-6 py-3 rounded-md font-medium transition-colors">
              Get Started
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-6 mt-10 mx-auto max-w-2xl transform translate-y-0">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex items-center text-gray-700">
                <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                <div>
                  <span className="block text-sm text-gray-500">Location:</span>
                  <span className="block"></span>
                </div>
              </div>
              
              <div className="flex items-center text-gray-700">
                <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                  </svg>
                </span>
                <div>
                  <span className="block text-sm text-gray-500">Language:</span>
                  <span className="block"></span>
                </div>
              </div>
              
              <div className="flex items-center text-gray-700">
                <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </span>
                <div>
                  <span className="block text-sm text-gray-500">Age: N/A years</span>
                </div>
              </div>
              
              <div className="flex items-center text-gray-700">
                <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </span>
                <div>
                  <span className="block text-sm text-gray-500">Gender: N/A</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="w-full relative">
                <input 
                  type="text" 
                  placeholder="Search Your Treatment" 
                  className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </button>
              </div>
              
              <span className="text-gray-400 mx-2">Or</span>
              
              <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
                Upload Your Medical Report
              </button>
            </div>
            
            <button className="mt-4 text-blue-500 hover:text-blue-700 flex items-center justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
              </svg>
              <span>Contact me</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;