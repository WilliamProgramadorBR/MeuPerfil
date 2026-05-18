import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    width: 100%;
    min-height: 100%;
    background: ${({ theme }) => theme.background};
  }

  body {
    width: 100%;
    min-height: 100%;
    margin: 0;
    overflow-x: hidden;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: "Plus Jakarta Sans", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3 {
    font-family: "Sora", "Plus Jakarta Sans", Inter, ui-sans-serif, system-ui, sans-serif;
    font-weight: 800;
  }

  button, input, textarea, select {
    font: inherit;
  }

  button {
    color: inherit;
  }

  a {
    color: inherit;
  }

  img, video {
    max-width: 100%;
  }

  #root {
    min-height: 100vh;
  }

  ::selection {
    background: ${({ theme }) => theme.primaryColor};
    color: #ffffff;
  }
`;

export default GlobalStyles;
