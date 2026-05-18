import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../context/ThemeContext';
import { StyledButtonContainer } from './StyledWebsite';

const BotaoDark = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDarkMode = theme.mode === 'dark';

  return (
    <StyledButtonContainer
      aria-label={isDarkMode ? 'Ativar tema claro' : 'Ativar tema escuro'}
      onClick={toggleTheme}
      title={isDarkMode ? 'Tema claro' : 'Tema escuro'}
    >
      <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
    </StyledButtonContainer>
  );
};

export default BotaoDark;
