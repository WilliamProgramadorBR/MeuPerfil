// StyledWebsite.js
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Arial', sans-serif;
    min-height: 100vh;
  }
`;

export const theme = {
  light: {
    background: 'white',
    text: 'black',
    textStyles: {
      fontWeight: 'bold',
      color: 'black',
      fontFamily: "'Agbalumo', 'Archivo Black', sans-serif",
    },
  },
  dark: {
    background: '#333',
    text: '#fff',
    textStyles: {
      fontWeight: 'bold',
      color: 'white',
      fontFamily: "'Agbalumo', 'Archivo Black', sans-serif",
    },
  },
};


export const StyledDiv = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

export const StyledWebsite = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

export const ContentContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  font-family: 'Archivo Black', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.text}; /* Adicione esta linha para ajustar a cor do texto */
`;

export const StyledButtonContainer = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px; /* Defina a largura desejada para tornar o botão uma bola */
  height: 30px; /* Defina a altura desejada para tornar o botão uma bola */
  border-radius: 50%; /* Faz o botão redondo */
  background-color: ${({ theme }) => (theme === 'dark' ? 'white' : 'black')};
  color: ${({ theme }) => (theme === 'dark' ? 'black' : 'white')};
  cursor: pointer; /* Adicione um cursor ao botão para indicar que é clicável */
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease; /* Adicione efeito de transição */
  
  &:hover {
    background-color: ${({ theme }) => (theme === 'dark' ? '#f0f0f0' : '#333')}; /* Cor de fundo no hover */
    transform: scale(1.1); /* Adicione um leve efeito de escala no hover */
  }
`;


