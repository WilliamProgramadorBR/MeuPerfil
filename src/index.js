import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import Routes from './Rotas/Routes';
import BotaoDark from './Styles/Config_modo_tema/Tema_modo';
import GlobalStyles from './Styles/Estilo_global';
import { ThemeContext, ThemeProvider as CustomThemeProvider } from './Styles/context/ThemeContext';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
      <BotaoDark />
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  </React.StrictMode>
);
