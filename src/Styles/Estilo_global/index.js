// GlobalStyles.js ou GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset global de margin e padding */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    overflow-x: hidden; /* Evita rolagem horizontal */
    width: 100%;
    height: 100%;
    font-size: 16px; /* Tamanho base da fonte */
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Arial', sans-serif; /* Fonte padrão */
    display: flex;
    flex-direction: column; /* Flex para permitir layout fluido */
  }

  #root {
    flex: 1; /* Garante que o root ocupe o espaço restante */
    display: flex;
    flex-direction: column; /* Flex para permitir layout fluido */
  }

  input, textarea {
    background: ${({ theme }) => theme.inputBackground};
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 5px; /* Adiciona borda arredondada */
    padding: 10px; /* Adiciona padding */
    width: 100%; /* Faz com que os campos de entrada se ajustem à largura do contêiner */
    box-sizing: border-box; /* Garante que padding e borda não afetem a largura total */
  }

  .container {
    background: ${({ theme }) => theme.containerBackground};
    color: ${({ theme }) => theme.text};
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px ${({ theme }) => theme.borderColor};
    max-width: 100%; /* Garante que o container não ultrapasse a largura da tela */
    box-sizing: border-box; /* Garante que padding e borda não afetem a largura total */
  }

  @media (max-width: 768px) {
    html {
      font-size: 14px; /* Ajusta o tamanho da fonte para telas pequenas */
    }

    .container {
      padding: 10px; /* Ajusta o padding para telas pequenas */
    }
  }
`;

export default GlobalStyles;
