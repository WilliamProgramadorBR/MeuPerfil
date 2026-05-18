import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Sidebar from './Sidebar';
import { profile } from '../../data/portfolio';

const navItems = [
  { label: 'Início', href: '/#inicio' },
  { label: 'História', href: '/#historia' },
  { label: 'Carreira', href: '/#carreira' },
  { label: 'Rotina AI', href: '/#rotina-ai' },
  { label: 'Projetos', href: '/#projetos' },
  { label: 'Apps', href: '/#apps' },
  { label: 'Contato', href: '/#contato' },
];

const Shell = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.headerBackground};
  backdrop-filter: blur(18px);
`;

const HeaderInner = styled.div`
  width: min(1180px, calc(100% - 32px));
  min-height: 72px;
  margin: 0 auto;
  padding-right: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 860px) {
    min-height: 64px;
    padding-right: 54px;
  }
`;

const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
`;

const BrandMark = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  object-fit: cover;
  object-position: center;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.22);
  flex: 0 0 40px;
`;

const BrandText = styled.span`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`;

const BrandName = styled.strong`
  font-size: 0.98rem;
`;

const BrandRole = styled.span`
  color: ${({ theme }) => theme.textMuted};
  font-size: 0.78rem;

  @media (max-width: 520px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (max-width: 860px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.textMuted};
  font-size: 0.92rem;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 1040px) {
    display: none;
  }
`;

const IconLink = styled.a`
  width: 38px;
  height: 38px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.surface};
  text-decoration: none;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.primaryColor};
  }
`;

const MenuButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.surface};
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 860px) {
    display: inline-flex;
  }
`;

const ContentContainer = styled.div`
  min-height: calc(100vh - 72px);
`;

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Shell>
      <Header>
        <HeaderInner>
          <Brand to="/">
            <BrandMark src={profile.photo} alt="" aria-hidden="true" />
            <BrandText>
              <BrandName>{profile.name}</BrandName>
              <BrandRole>{profile.role}</BrandRole>
            </BrandText>
          </Brand>

          <Nav aria-label="Navegacao principal">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
            <NavLink as={Link} to="/certificados">
              Certificados
            </NavLink>
          </Nav>

          <Actions>
            <IconLink href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </IconLink>
            <IconLink href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </IconLink>
            <IconLink href={`mailto:${profile.email}`} aria-label="Enviar email">
              <FaEnvelope />
            </IconLink>
          </Actions>

          <MenuButton
            type="button"
            onClick={() => setSidebarOpen(true)}
            aria-label="Abrir menu"
          >
            <FaBars />
          </MenuButton>
        </HeaderInner>
      </Header>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <ContentContainer>{children}</ContentContainer>
    </Shell>
  );
};

export default Layout;
