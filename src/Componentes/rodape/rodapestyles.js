import styled from 'styled-components';

// Container do Footer
export const Footer = styled.footer`
  background: ${({ theme }) => theme.footerBackground};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  border-top: 1px solid ${({ theme }) => theme.borderColor};
  display: flex;
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  align-items: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  box-sizing: border-box; /* Garantir que o padding não afete a largura total */
  left: 0; /* Garantir que o footer comece na borda esquerda */
  right: 0; /* Garantir que o footer vá até a borda direita */

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

// Conteúdo do Footer
export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 100px; /* Espaçamento entre os itens */
  justify-content: center; /* Centraliza o conteúdo horizontalmente */

  @media (max-width: 768px) {
    display: none; /* Ocultar o conteúdo em telas pequenas */
  }

  p {
    display: flex;
    align-items: center;
    margin: 0;

    svg {
      margin-right: 8px;
    }
  }
`;

export const FooterIcons = styled.div`
  display: none; /* Ocultar ícones em telas grandes */

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row; /* Manter ícones em linha na tela pequena */
    align-items: center;
    margin-left: center;
    gap: 35px; /* Espaçamento entre os ícones */
    justify-content: center; /* Centraliza o conteúdo horizontalmente */
    
    svg {
      cursor: pointer;
      font-size: 24px;
    }
  }
`;
