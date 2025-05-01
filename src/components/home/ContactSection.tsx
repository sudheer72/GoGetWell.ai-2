import React from 'react';
import { MapPin, Mail, Phone, Instagram, Twitter } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';

const ContactSection: React.FC = () => {
  const { currentTheme, themes } = useThemeStore();
  const theme = themes[currentTheme];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Let's get in touch!</h2>
            <p className="text-gray-600 mb-8">
              Got questions about Treatment or Travel? Our team is here to help. Contact us for quick and friendly support.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">N/A</h3>
              
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-gray-500 mr-3 mt-0.5" />
                <span className="text-gray-600">N/A</span>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-gray-500 mr-3 mt-0.5" />
                <span className="text-gray-600">example@gmail.com</span>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-500 mr-3 mt-0.5" />
                <span className="text-gray-600">undefined, undefined, undefined, undefined</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Connect with us</h3>
              
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-100 transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-100 transition-colors"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
            
            <div className="mt-8">
              <button 
                className="px-6 py-3 rounded-md text-white font-medium transition-colors"
                style={{ backgroundColor: theme.primaryColor }}
              >
                Contact Hospital
              </button>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Bio of Hospital</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-gray-600">N/a</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium mb-1">Language</h4>
                    <p className="text-gray-600"></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium mb-1">Gender</h4>
                    <p className="text-gray-600">N/A</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;