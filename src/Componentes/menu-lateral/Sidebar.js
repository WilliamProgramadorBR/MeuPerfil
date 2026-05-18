import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  FaAndroid,
  FaBriefcase,
  FaCertificate,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaHome,
  FaLinkedinIn,
  FaTimes,
} from 'react-icons/fa';
import { profile } from '../../data/portfolio';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 40;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  background: rgba(0, 0, 0, 0.38);
`;

const SidebarContainer = styled.aside`
  position: fixed;
  inset: 0 0 0 auto;
  z-index: 50;
  width: min(360px, 88vw);
  padding: 24px;
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '105%')});
  transition: transform 0.28s ease;
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  border-left: 1px solid ${({ theme }) => theme.borderColor};
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  strong {
    font-size: 1rem;
  }

  span {
    color: ${({ theme }) => theme.textMuted};
    font-size: 0.86rem;
  }
`;

const CloseButton = styled.button`
  width: 38px;
  height: 38px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const NavGroup = styled.nav`
  display: grid;
  gap: 10px;
`;

const DrawerLink = styled.a`
  min-height: 46px;
  padding: 0 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.background};
  font-weight: 700;

  &:hover {
    border-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.primaryColor};
  }
`;

const DrawerRouterLink = styled(Link)`
  min-height: 46px;
  padding: 0 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.background};
  font-weight: 700;

  &:hover {
    border-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.primaryColor};
  }
`;

const SidebarFooter = styled.div`
  margin-top: auto;
  display: grid;
  gap: 10px;
`;

const Sidebar = ({ isOpen, onClose }) => {
  const close = () => onClose?.();

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={close} />
      <SidebarContainer $isOpen={isOpen} aria-hidden={!isOpen}>
        <SidebarHeader>
          <Title>
            <strong>{profile.name}</strong>
            <span>Portfolio e apps</span>
          </Title>
          <CloseButton type="button" onClick={close} aria-label="Fechar menu">
            <FaTimes />
          </CloseButton>
        </SidebarHeader>

        <NavGroup aria-label="Menu mobile">
          <DrawerLink href="/#inicio" onClick={close}>
            <FaHome /> Início
          </DrawerLink>
          <DrawerLink href="/#historia" onClick={close}>
            <FaBriefcase /> História
          </DrawerLink>
          <DrawerLink href="/#carreira" onClick={close}>
            <FaBriefcase /> Carreira
          </DrawerLink>
          <DrawerLink href="/#rotina-ai" onClick={close}>
            <FaAndroid /> Rotina AI
          </DrawerLink>
          <DrawerLink href="/#projetos" onClick={close}>
            <FaGithub /> Projetos
          </DrawerLink>
          <DrawerLink href="/#apps" onClick={close}>
            <FaDownload /> Apps
          </DrawerLink>
          <DrawerRouterLink to="/certificados" onClick={close}>
            <FaCertificate /> Certificados
          </DrawerRouterLink>
          <DrawerLink href="/#contato" onClick={close}>
            <FaEnvelope /> Contato
          </DrawerLink>
        </NavGroup>

        <SidebarFooter>
          <DrawerLink href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn /> LinkedIn
          </DrawerLink>
          <DrawerLink href={profile.github} target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </DrawerLink>
        </SidebarFooter>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
