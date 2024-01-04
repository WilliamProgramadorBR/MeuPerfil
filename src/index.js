import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Routes from './Rotas/Routes';
import { StyledWebsite, theme } from './Componentes/mododarkin/StyledWebsite';
import BotaoDark from './Componentes/mododarkin/BotaoDark';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Arial', sans-serif;
  }
`;

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <StyledWebsite>
        <GlobalStyles />
        <React.StrictMode>
          <Routes />
        </React.StrictMode>
        
        <BotaoDark toggleTheme={toggleTheme} currentTheme={currentTheme} />
      </StyledWebsite>
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(<App />);
