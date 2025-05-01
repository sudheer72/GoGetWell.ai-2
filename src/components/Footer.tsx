import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              Copyright © {currentYear} Ecme All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Terms & Conditions
              </a>
              <span className="text-gray-400">|</span>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Privacy & Policy
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;