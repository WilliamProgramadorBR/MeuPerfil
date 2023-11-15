// Layout.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import menuIcon from '../../Fotos/menu.png'; // Importe o caminho da sua imagem aqui

const MainContainer = styled.div`
  display: flex;
  position: relative;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 1;
  cursor: pointer; // Adicione isso para indicar que é clicável
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  position: relative; /* Adicione isso para garantir que a posição do conteúdo seja relativa ao ContentContainer */
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: fixed;
  top: 10px; /* Ajuste a distância do topo conforme necessário */
  left: 10px; /* Ajuste a distância da esquerda conforme necessário */
  z-index: 2;
`;

const MenuIcon = styled.img`
  width: 30px; // Ajuste o tamanho conforme necessário
  height: 30px; // Ajuste o tamanho conforme necessário
`;

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleOverlayClick = () => {
    setSidebarOpen(false);
  };

  return (
    <MainContainer>
      <Sidebar isOpen={isSidebarOpen} onClose={handleToggleSidebar} />
      <Overlay isOpen={isSidebarOpen} onClick={handleOverlayClick} />
      <ContentContainer>
        {/* Botão para abrir o menu lateral */}
        <MenuButton onClick={handleToggleSidebar}>
          <MenuIcon src={menuIcon} alt="Menu" />
        </MenuButton>
        {/* Conteúdo principal do seu site */}
        {children}
      </ContentContainer>
    </MainContainer>
  );
};

export default Layout;
