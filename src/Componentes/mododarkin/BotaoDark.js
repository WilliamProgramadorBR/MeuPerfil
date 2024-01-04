// BotaoDark.js
import React from 'react';
import { StyledDiv, StyledButtonContainer } from './StyledWebsite';
import darkModeIcon from '../../Fotos/luagif.gif'; // Substitua pelo caminho real da sua imagem do modo escuro
import lightModeIcon from '../../Fotos/solgif.gif'; // Substitua pelo caminho real da sua imagem do modo claro

// ...
const BotaoDark = ({ toggleTheme, currentTheme }) => {
    const iconSrc = currentTheme === 'light' ? darkModeIcon : lightModeIcon;
    const iconAlt = currentTheme === 'light' ? 'Ícone do Modo Escuro' : 'Ícone do Modo Claro';
  
    const handleClick = () => {
      if (toggleTheme) {
        toggleTheme(); // Chame a função toggleTheme se estiver definida
      }
    };
  
    return (
        <StyledDiv>
        <StyledButtonContainer theme={currentTheme} onClick={handleClick}>
          <img src={iconSrc} alt={iconAlt} style={{ marginRight: '5px', width: '20px', height: '20px' }} />
          Alternar Modo: {currentTheme === 'light' ? 'Claro' : 'Escuro'}
        </StyledButtonContainer>
      </StyledDiv>
      
    );
  };
  
  export default BotaoDark;
  
  
