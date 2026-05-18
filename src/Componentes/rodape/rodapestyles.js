import styled from 'styled-components';

export const Footer = styled.footer`
  background: ${({ theme }) => theme.footerBackground};
  color: rgba(255, 255, 255, 0.78);
  padding: 22px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

export const FooterContent = styled.div`
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  flex-wrap: wrap;

  p {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.5;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    color: #ffffff;
  }
`;

export const FooterIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  a {
    width: 38px;
    height: 38px;
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.18);
    transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      border-color: rgba(255, 255, 255, 0.42);
      background: rgba(255, 255, 255, 0.08);
    }
  }
`;
