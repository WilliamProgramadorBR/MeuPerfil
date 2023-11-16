import React, { createContext, useContext, useState } from 'react';
import GlobalStyles from '../mododarkin/GlobalStyles';


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [bodyColor, setBodyColor] = useState(isDarkMode ? '#333' : '#FFFFE0');

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    setBodyColor((prevColor) => (prevColor === '#FFFFE0' ? '#333' : '#FFFFE0'));
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, bodyColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
