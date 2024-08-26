
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
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin: 20px;
  margin-top: -2%;
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
