import React, { useEffect } from 'react';
import { useThemeStore } from '../store/themeStore';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { currentTheme, themes } = useThemeStore();
  const theme = themes[currentTheme];

  useEffect(() => {
    // Apply theme colors to CSS variables
    document.documentElement.style.setProperty('--primary', theme.primaryColor);
    document.documentElement.style.setProperty('--secondary', theme.secondaryColor);
    document.documentElement.style.setProperty('--accent', theme.accentColor);
    document.documentElement.style.setProperty('--gradient-start', theme.gradientStart);
    document.documentElement.style.setProperty('--gradient-end', theme.gradientEnd);
    
    // Add theme class to body
    document.body.className = `theme-${currentTheme}`;
  }, [currentTheme, theme]);

  return <>{children}</>;
};

export default ThemeProvider;