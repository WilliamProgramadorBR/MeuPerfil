// src/context/ThemeContext.js
import React, { createContext, useState, useMemo } from 'react';
import { theme as themeConfig } from '../Config_modo_tema/StyledWebsite';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    return savedTheme && themeConfig[savedTheme] ? savedTheme : 'light';
  });

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => {
      const nextTheme = prevTheme === 'light' ? 'dark' : 'light';
      window.localStorage.setItem('portfolio-theme', nextTheme);
      return nextTheme;
    });
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
