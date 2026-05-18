import styled from 'styled-components';

export const theme = {
  light: {
    mode: 'light',
    background: '#f6f7fb',
    surface: '#ffffff',
    surfaceAlt: '#eef1f6',
    text: '#111827',
    textMuted: '#536170',
    textColor: '#111827',
    primaryColor: '#126b63',
    primaryColorHover: '#0f5a53',
    accentColor: '#b45309',
    accentSoft: '#fff4df',
    dangerColor: '#b91c1c',
    inputBackground: '#ffffff',
    containerBackground: '#ffffff',
    projectBackground: '#ffffff',
    hoverBackground: '#e8f4f1',
    borderColor: '#dce3eb',
    footerBackground: '#101820',
    headerBackground: 'rgba(246, 247, 251, 0.88)',
    shadow: '0 18px 48px rgba(16, 24, 40, 0.1)',
    heroOverlay: 'rgba(6, 12, 20, 0.84)',
    panelBackground: 'rgba(255, 255, 255, 0.78)',
  },
  dark: {
    mode: 'dark',
    background: '#0d1117',
    surface: '#151b23',
    surfaceAlt: '#101820',
    text: '#f5f7fb',
    textMuted: '#b5c0ce',
    textColor: '#f5f7fb',
    primaryColor: '#2dd4bf',
    primaryColorHover: '#5eead4',
    accentColor: '#f6ad55',
    accentSoft: 'rgba(246, 173, 85, 0.16)',
    dangerColor: '#f87171',
    inputBackground: '#1b2430',
    containerBackground: '#151b23',
    projectBackground: '#151b23',
    hoverBackground: '#183531',
    borderColor: '#2b3544',
    footerBackground: '#090d12',
    headerBackground: 'rgba(13, 17, 23, 0.88)',
    shadow: '0 18px 50px rgba(0, 0, 0, 0.34)',
    heroOverlay: 'rgba(6, 12, 20, 0.88)',
    panelBackground: 'rgba(21, 27, 35, 0.74)',
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
  width: 44px;
  height: 44px;
  padding: 0;
  background-color: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primaryColor};
    transform: translateY(-2px);
  }

  svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 768px) {
    top: 0.75rem;
    right: 0.75rem;
    width: 40px;
    height: 40px;
  }

  @media (max-width: 480px) {
    top: auto;
    right: 0.85rem;
    bottom: 0.85rem;
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
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow};
`;
