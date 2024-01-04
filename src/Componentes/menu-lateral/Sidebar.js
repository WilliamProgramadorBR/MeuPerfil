// Sidebar.js


import { Link } from 'react-router-dom';
import { useState } from 'react';

import styled  from 'styled-components';

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
const MenuItemWithSubMenu = styled(MenuItem)`
  position: relative;

  &:hover {
    background-color: #555;

    ul {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }
  }
`;

const SubMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #333;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  opacity: 0;
  pointer-events: auto; /* Corrigir para 'auto' */
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
`;


const SubMenuItem = styled.li`
  padding: 10px;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;



const StyledLink = styled(Link)`
  display: block;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const StyledExternalLink = styled.a`
  display: block;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

// ...

<SubMenuItem>
  <StyledLink to="caminho/do/perfil/william">William Oliveira - Fullstack Node.js Banco de dados</StyledLink>
</SubMenuItem>


const Sidebar = ({ isOpen, onClose, toggleTheme, currentTheme }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleSubMenuToggle = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };
  return (
    
    <SidebarContainer isOpen={isOpen}>
       
      <toggleTheme/>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <MenuItem to="https://github.com/WilliamProgramadorBR/Hello_django" target="_blank">Projeto Django 👨🏿‍💻</MenuItem>
      <MenuItem to="https://github.com/WilliamProgramadorBR/CursoC-Estudos" target="_blank">Meus conhecimentos em C# 👨🏿‍💻</MenuItem>
      <MenuItem to="https://github.com/WilliamProgramadorBR/Sistema-Help-desk" target="_blank">Projeto HelpDesk C# 👨🏿‍💻</MenuItem>
      <MenuItem to="https://github.com/Rennan-Pessanha/Site-Helpdesk/graphs/contributors" target="_blank">Todos os Devs e amigos,Projeto HD </MenuItem>
      <MenuItemWithSubMenu onClick={handleSubMenuToggle}>
        Navegação pelo site
        <SubMenu>
  
  <SubMenuItem>
    <StyledLink to="/">Página inicial</StyledLink>
  </SubMenuItem>
  <SubMenuItem>
    <StyledLink to="/tecnologias">Sobre tecnlogias e campo de atuação</StyledLink>
  </SubMenuItem>
  <SubMenuItem>
    <StyledLink to="/Projetos">Meus projetos</StyledLink>
  </SubMenuItem>
  <SubMenuItem>
    <StyledLink to="/Certificados">Meus certificados</StyledLink>
  </SubMenuItem>
  
</SubMenu>
      </MenuItemWithSubMenu>
      
      {/* Adicione mais links conforme necessário */}
    </SidebarContainer>
   
  );
};

export default Sidebar;
