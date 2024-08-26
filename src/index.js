// src/App.js
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Routes from './Rotas/Routes';
import { ThemeContext, ThemeProvider as CustomThemeProvider } from './Styles/context/ThemeContext';
import BotaoDark from './Styles/Config_modo_tema/Tema_modo';
import GlobalStyles from './Styles/Estilo_global';



const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <React.StrictMode>
        <Routes />
      </React.StrictMode>
      <BotaoDark />
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <CustomThemeProvider>
    <App />
  </CustomThemeProvider>
);
