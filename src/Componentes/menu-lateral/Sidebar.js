import { Link } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

// Contêiner da barra lateral
const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-320px')};
  width: 320px;
  height: 100%;
  background: rgba(0, 123, 255, 0.5); /* Azul mais intenso com opacidade */
  color: #ffffff; /* Texto branco para contraste */
  padding-top: 60px;
  transition: left 0.4s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: ${({ isOpen }) => (isOpen ? '0 4px 12px rgba(0, 0, 0, 0.3)' : 'none')};
  backdrop-filter: blur(10px); /* Efeito de vidro */
  -webkit-backdrop-filter: blur(10px); /* Efeito de vidro para WebKit */
  z-index: 3;
  overflow-y: auto; /* Adiciona rolagem vertical se necessário */
  
  /* Animação e responsividade */
  @media (max-width: 768px) {
    width: 250px;
  }

  @media (max-width: 480px) {
    width: 200px;
  }
`;

// Botão de fechar
const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  color: #ffffff; /* Texto branco */
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    color: #cccccc; /* Cor clara ao passar o mouse */
    transform: rotate(90deg);
  }
`;

// Item do menu
const MenuItem = styled(Link)`
  display: block;
  padding: 15px;
  margin: 0;
  font-size: 18px;
  color: #ffffff; /* Texto branco */
  text-decoration: none;
  border-left: 5px solid transparent;
  transition: background-color 0.3s ease, padding-left 0.3s ease, border-left 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Azul mais escuro ao passar o mouse */
    padding-left: 25px;
    border-left: 5px solid #003d7a; /* Azul mais escuro para a borda */
  }
`;

// Item do menu com submenu
const MenuItemWithSubMenu = styled.div`
  position: relative;
  cursor: pointer;
  padding: 15px;
  font-size: 18px;
  color: #ffffff; /* Texto branco */
  transition: background-color 0.3s ease, padding-left 0.3s ease, border-left 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Azul mais escuro ao passar o mouse */
    padding-left: 25px;
    border-left: 5px solid #003d7a; /* Azul mais escuro para a borda */
  }

  & > span {
    display: inline-block;
    transition: transform 0.3s ease;
    transform: ${({ isSubMenuOpen }) => (isSubMenuOpen ? 'rotate(90deg)' : 'rotate(0)')};
  }
`;

// Submenu
const SubMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: rgba(0, 123, 255, 0.3); /* Azul claro com opacidade para o submenu */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  max-height: ${({ isSubMenuOpen }) => (isSubMenuOpen ? '200px' : '0')};
  overflow: hidden;
  transition: max-height 0.4s ease, opacity 0.3s ease;
  opacity: ${({ isSubMenuOpen }) => (isSubMenuOpen ? '1' : '0')};
`;

// Item do submenu
const SubMenuItem = styled.li`
  padding: 10px 20px;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #003d7a; /* Azul escuro ao passar o mouse */
  }
`;

// Links do submenu e links externos
const StyledLink = styled(Link)`
  display: block;
  padding: 10px;
  font-size: 16px;
  color: #ffffff; /* Texto branco */
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #003d7a; /* Azul escuro ao passar o mouse */
  }
`;

const StyledExternalLink = styled.a`
  display: block;
  padding: 10px;
  font-size: 16px;
  color: #ffffff; /* Texto branco */
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #003d7a; /* Azul escuro ao passar o mouse */
  }
`;

// Componente Sidebar
const Sidebar = ({ isOpen, onClose, toggleTheme, currentTheme }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSubMenuOpenRede, setIsSubMenuOpenRede] = useState(false);

  // Função para alternar o submenu principal
  const handleSubMenuToggle = () => {
    setIsSubMenuOpen(prev => !prev);
  };

  // Função para alternar o submenu de rede social
  const handleSubMenuRedeToggle = () => {
    setIsSubMenuOpenRede(prev => !prev);
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <MenuItem to="https://github.com/WilliamProgramadorBR/Hello_django" target="_blank" rel="noopener noreferrer">
        Projeto Django 👨🏿‍💻
      </MenuItem>
      <MenuItem to="https://github.com/WilliamProgramadorBR/CursoC-Estudos" target="_blank" rel="noopener noreferrer">
        Meus conhecimentos em C# 👨🏿‍💻
      </MenuItem>
      <MenuItem to="https://github.com/WilliamProgramadorBR/Sistema-Help-desk" target="_blank" rel="noopener noreferrer">
        Projeto HelpDesk C# 👨🏿‍💻
      </MenuItem>
      <MenuItem to="https://github.com/Rennan-Pessanha/Site-Helpdesk/graphs/contributors" target="_blank" rel="noopener noreferrer">
        Todos os Devs e amigos, Projeto HD
      </MenuItem>
      
      {/* Submenu principal */}
      <MenuItemWithSubMenu onClick={handleSubMenuToggle} isSubMenuOpen={isSubMenuOpen}>
        <span>&#9654;</span> Navegação pelo site
        <SubMenu isSubMenuOpen={isSubMenuOpen}>
          <SubMenuItem>
            <StyledLink to="/">Página inicial</StyledLink>
          </SubMenuItem>
          <SubMenuItem>
            <StyledLink to="/certificados">Meus certificados</StyledLink>
          </SubMenuItem>
        </SubMenu>
      </MenuItemWithSubMenu>

      {/* Submenu de Rede Social */}
      <MenuItemWithSubMenu onClick={handleSubMenuRedeToggle} isSubMenuOpen={isSubMenuOpenRede}>
        <span>&#9654;</span> Rede social
        <SubMenu isSubMenuOpen={isSubMenuOpenRede}>
          <SubMenuItem>
            <StyledExternalLink href="https://www.linkedin.com/in/william-oliveira-2b944417a/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </StyledExternalLink>
          </SubMenuItem>
          <SubMenuItem>
            <StyledExternalLink href="https://github.com/WilliamProgramadorBR" target="_blank" rel="noopener noreferrer">
              Meu GitHub
            </StyledExternalLink>
          </SubMenuItem>
        </SubMenu>
      </MenuItemWithSubMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
