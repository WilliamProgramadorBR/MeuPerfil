// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  // Outros estilos...

  body {
    background-color: ${(props) => (props.theme === 'light' ? '#fff' : '#333')};
    color: ${(props) => (props.theme === 'light' ? '#333' : '#fff')};
  }

  // Mais estilos...
`;

export default GlobalStyles;
