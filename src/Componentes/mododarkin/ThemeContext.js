import { createContext, useContext, useState } from 'react';

const ProjetosThemeContext = createContext();

export const ProjetosThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ProjetosThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ProjetosThemeContext.Provider>
  );
};

export const useProjetosTheme = () => {
  return useContext(ProjetosThemeContext);
};
