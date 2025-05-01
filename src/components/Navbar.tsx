import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useThemeStore } from '../store/themeStore';
import { Settings } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const { currentTheme, themes } = useThemeStore();
  const theme = themes[currentTheme];

  return (
    <nav 
      className="sticky top-0 w-full z-10 px-4 py-3 flex items-center justify-between shadow-sm"
      style={{ backgroundColor: theme.primaryColor }}
    >
      <div className="flex items-center">
        <Link to="/" className="text-white text-xl font-bold">
          GoGetWell.ai
        </Link>
      </div>
      
      <div className="flex items-center space-x-6">
        <Link 
          to="/" 
          className={`text-white hover:text-opacity-80 ${location.pathname === '/' ? 'font-semibold' : ''}`}
        >
          Home
        </Link>
        <Link 
          to="/themes" 
          className={`text-white hover:text-opacity-80 ${location.pathname === '/themes' ? 'font-semibold' : ''}`}
        >
          Themes
        </Link>
      </div>
      
      <div className="flex items-center">
        <Link to="/themes" className="text-white p-2 rounded-full hover:bg-white/10">
          <Settings size={20} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;