// HomeStyles.js


import styled, { createGlobalStyle } from 'styled-components';


export const ButtonContainer = styled.div`
  position: fixed;
  top: 300px; /* Ajuste a distância do topo conforme necessário */
  right: 10px; /* Ajuste a distância da direita conforme necessário */
`;
export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.background}; /* Adicione isso para definir a cor de fundo do corpo */
    color: ${({ theme }) => theme.text};
    font-family: 'Arial', sans-serif;
  }
`;

export const CurriculoContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Titulo = styled.h1`
  font-size: 36px;
  margin: 0;
  font-weight: bold;
  color: red;
  font-family: 'Helvetica', sans-serif;
  margin-top: 200px;
`;

export const FotoRedonda = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;

export const BotoesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

export const BotaoNavegacao1 = styled.button`
  border: none;
  background: none;
  margin-right: 5px;
  cursor: pointer;
  padding: 0;
  outline: none;
`;

export const BotaoNavegacao2 = styled.button`
  border: none;
  background: none;
  margin-right: 5px;
  cursor: pointer;
  padding: 0;
  outline: none;
`;

export const TextoContainer = styled.div`
  max-width: 800px;
  margin-top: 20px;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 15px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 10px;
  }
`;

export const theme = {
  light: {
    background: '#fff',
    text: '#333',
  },
  dark: {
    background: '#333',
    text: '#fff',
  },
};

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ThemeToggle = styled.button`
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  border: none;
  padding: 10px;
  cursor: pointer;
  outline: none;
`;


// Se você estiver usando Styled Components, adicione ao seu arquivo HomeStyles.js

