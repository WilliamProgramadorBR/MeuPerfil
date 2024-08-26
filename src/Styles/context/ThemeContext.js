// src/context/ThemeContext.js
import React, { createContext, useState, useMemo } from 'react';
import { theme as themeConfig } from '../Config_modo_tema/StyledWebsite';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = () => {
    setCurrentTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = useMemo(() => ({
    theme: themeConfig[currentTheme],
    toggleTheme,
  }), [currentTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
