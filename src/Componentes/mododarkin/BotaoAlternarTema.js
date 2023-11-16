import React from 'react';
import { useTheme } from '../mododarkin/ThemeContext';

const BotaoAlternarTema = () => {
  const { toggleDarkMode, isDarkMode } = useTheme();

  return (
    <button onClick={toggleDarkMode}>
      Alternar para {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
    </button>
  );
};

export default BotaoAlternarTema;