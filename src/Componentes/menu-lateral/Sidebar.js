// Sidebar.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-300px')};
  width: 300px;
  height: 100%;
  background-color: black;
  padding-top: 60px;
  transition: left 0.3s ease;
  color: #fff;
  z-index: 3; /* Ajuste o z-index conforme necessário */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  color: #fff;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
`;

const MenuItem = styled(Link)`
  display: block;
  padding: 10px;
  margin: 0;
  font-size: 18px;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="/tecnologias">Tecnologias</MenuItem>
      <MenuItem to="/projetos">Projetos</MenuItem>
      <MenuItem to="https://github.com/WilliamProgramadorBR/Hello_django" target="_blank">Projeto Django 👨🏿‍💻</MenuItem>
      <MenuItem to="https://github.com/WilliamProgramadorBR/Sistema-Help-desk" target="_blank">Projeto HelpDesk C# 👨🏿‍💻</MenuItem>
      <MenuItem to="https://github.com/Rennan-Pessanha/Site-Helpdesk" target="_blank">Todos os Devs e amigos,Projeto HD </MenuItem>

      {/* Adicione mais links conforme necessário */}
    </SidebarContainer>
  );
};

export default Sidebar;
