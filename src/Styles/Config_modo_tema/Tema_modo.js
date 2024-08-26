// src/Componentes/mododarkin/BotaoDark.js
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { StyledDiv, StyledButtonContainer } from './StyledWebsite';

const BotaoDark = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDarkMode = theme.background === '#000000'; // Verifique o valor correto para o modo escuro

  return (
  
      <StyledButtonContainer
        theme={theme}
        onClick={toggleTheme}
        style={{ position: 'fixed', top: '20px', right: '20px', zIndex: '1000' }}
      >
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="2x" />
        {isDarkMode ? ' Claro' : ' Escuro'}
      </StyledButtonContainer>

  );
};

export default BotaoDark;
