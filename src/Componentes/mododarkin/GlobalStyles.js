import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.background}; /* Adicione isso para definir a cor de fundo do corpo */
    color: ${({ theme }) => theme.text};
    font-family: 'Arial', sans-serif;
  }
`;

export default GlobalStyles;
