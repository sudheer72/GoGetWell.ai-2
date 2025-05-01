import React from 'react';
import { useThemeStore } from '../store/themeStore';
import { ThemeType } from '../types/theme';

const ThemesPage: React.FC = () => {
  const { currentTheme, themes, setTheme } = useThemeStore();
  
  const handleThemeChange = (themeId: ThemeType) => {
    setTheme(themeId);
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Theme Selection</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.values(themes).map((theme) => (
          <div 
            key={theme.id} 
            className={`
              p-6 rounded-lg shadow-md cursor-pointer transform transition-all duration-300 hover:shadow-xl
              ${currentTheme === theme.id ? 'ring-4 ring-offset-2' : ''}
            `}
            style={{ 
              backgroundColor: theme.primaryColor,
              borderColor: theme.accentColor,
              boxShadow: currentTheme === theme.id ? `0 0 0 2px ${theme.accentColor}` : '',
            }}
            onClick={() => handleThemeChange(theme.id)}
          >
            <div className="h-32 rounded-md mb-4" style={{
              background: `linear-gradient(135deg, ${theme.gradientStart} 0%, ${theme.gradientEnd} 100%)`
            }}>
              <div className="flex justify-center items-center h-full text-white text-2xl font-semibold">
                {theme.name}
              </div>
            </div>
            
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">{theme.name}</h3>
              <p className="mb-4">{theme.description}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center">
                  <span className="h-3 w-3 rounded-full mr-1" style={{ backgroundColor: theme.primaryColor }}></span>
                  <span className="h-3 w-3 rounded-full mr-1" style={{ backgroundColor: theme.secondaryColor }}></span>
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: theme.accentColor }}></span>
                </div>
                
                <div>
                  {currentTheme === theme.id ? (
                    <span className="bg-white text-xs font-medium text-gray-800 px-2.5 py-0.5 rounded">Active</span>
                  ) : (
                    <span className="bg-gray-200 bg-opacity-30 text-xs font-medium text-white px-2.5 py-0.5 rounded">Select</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Theme Preview</h2>
        
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-2">Colors</h3>
          <div className="flex space-x-4">
            <div className="text-center">
              <div className="h-12 w-12 rounded-md mb-1" style={{ backgroundColor: themes[currentTheme].primaryColor }}></div>
              <span className="text-xs">Primary</span>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-md mb-1" style={{ backgroundColor: themes[currentTheme].secondaryColor }}></div>
              <span className="text-xs">Secondary</span>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-md mb-1" style={{ backgroundColor: themes[currentTheme].accentColor }}></div>
              <span className="text-xs">Accent</span>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-2">Buttons</h3>
          <div className="flex space-x-4">
            <button 
              className="px-4 py-2 rounded-md text-white" 
              style={{ backgroundColor: themes[currentTheme].primaryColor }}
            >
              Primary Button
            </button>
            <button 
              className="px-4 py-2 rounded-md text-white" 
              style={{ backgroundColor: themes[currentTheme].secondaryColor }}
            >
              Secondary Button
            </button>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Gradient</h3>
          <div 
            className="h-24 rounded-md flex items-center justify-center text-white font-medium"
            style={{ 
              background: `linear-gradient(135deg, ${themes[currentTheme].gradientStart} 0%, ${themes[currentTheme].gradientEnd} 100%)`
            }}
          >
            Hero Section Background
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemesPage;