
import styled from 'styled-components';

export const theme = {
  light: {
    background: '#ffffff',
    text: '#000000',
    inputBackground: '#f0f0f0',
    containerBackground: '#ffffff',
    borderColor: '#cccccc',
    footerBackground: '#cccccc', // Cor cinza para o modo claro
  },
  dark: {
    background: '#000000',
    text: '#ffffff',
    inputBackground: '#333333',
    containerBackground: '#444444',
    borderColor: '#666666',
    footerBackground: '#333333', // Cor cinza escuro para o modo escuro
  },
};

export const StyledWebsite = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const StyledButtonContainer = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  /* Responsividade */
  @media (max-width: 768px) {
    top: 0.5rem;
    right: 0.8rem;
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    top: 0.3rem;
    right: 0.8rem; /* Aumentar o espaçamento da borda */
    padding: 0.3rem 0.7rem;
    font-size: 0.8rem;
  }

  @media (max-width: 400px) {
    top: 0.3rem;
    right: 0.8rem; /* Aumentar o espaçamento da borda */
    padding: 0.3rem 0.7rem;
    font-size: 0.8rem;
  }

  @media (max-width: 375px) {
    top: 0.3rem;
    right: 1rem; /* Mais espaço para iPhone SE */
    padding: 0.3rem 0.7rem;
    font-size: 0.75rem; /* Ajuste de tamanho da fonte */
  }
`;

export const Input = styled.input`
  background: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.borderColor};
  padding: 10px;
  border-radius: 5px;
  font-size: 1rem;
  margin: 10px 0;
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.containerBackground};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px ${({ theme }) => theme.borderColor};
`;
