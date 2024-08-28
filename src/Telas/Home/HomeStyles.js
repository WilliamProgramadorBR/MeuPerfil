// src/Telas/Home/HomeStyles.js
import styled from 'styled-components';

// Container principal
export const Container = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  max-width: 100vw; /* Garante que o container não ultrapasse a largura da tela */
  box-sizing: border-box; /* Inclui padding e bordas na largura total */
`;

// Main section
export const Main = styled.main`
  padding: 20px;
  box-sizing: border-box; /* Inclui padding na largura total */
`;


// Sections
export const Section = styled.section`
  margin-bottom: 40px;
  box-sizing: border-box; /* Inclui margens na largura total */
`;

// Imagem do perfil
export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 10px 0;
  object-fit: cover; /* Garante que a imagem se ajuste ao tamanho sem distorcer */

  @media (max-width: 768px) {
    width: 100px; /* Reduz o tamanho da imagem em telas pequenas */
    height: 100px;
    margin-left: center;
  
  }
`;

// Container de imagens de tecnologias

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px; /* Espaço entre as imagens */
`;

export const TechImage = styled.img`
  width: 100px; /* Largura padrão */
  height: 100px; /* Altura padrão */
  object-fit: contain; /* Mantém a proporção e evita cortes */
  border-radius: 8px; /* Bordas arredondadas */
  background-color: #f0f0f0; /* Cor de fundo para imagens menores */
`;

// Elementos escondidos com animação
export const HiddenElement = styled.div`
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  &.visible {
    opacity: 1;
  }
`;
//fonts
export const StyledH2 = styled.h2`
  font-size: 2rem; /* Tamanho da fonte maior para destaque */
  font-weight: bold; /* Negrito para ênfase */
  color: ${({ theme }) => theme.primaryColor}; /* Cor do texto */
  margin-bottom: 20px; /* Espaço abaixo do título */
  border-bottom: 2px solid ${({ theme }) => theme.primaryColor}; /* Linha abaixo do título */
  padding-bottom: 10px; /* Espaço abaixo da linha */
  font-family: 'Geneva', sans-serif; /* Fonte Geneva */
`;


export const StyledP = styled.p`
  font-size: 1rem; /* Tamanho da fonte padrão */
  color: ${({ theme }) => theme.textColor}; /* Cor do texto */
  margin-bottom: 20px; /* Espaço abaixo do parágrafo */
  line-height: 1.8; /* Maior espaçamento entre linhas para melhor legibilidade */
`;

// Grid de projetos
export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Ajusta o tamanho das colunas em telas pequenas */
  }
`;

// Estilos dos projetos
export const Project = styled.div`
  background: ${({ theme }) => theme.projectBackground};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.borderColor};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px ${({ theme }) => theme.borderColor};
  cursor: pointer;
  box-sizing: border-box; /* Inclui padding e bordas na largura total */
  position: relative; /* Necessário para posicionar o Tooltip */

  &:hover {
    background: ${({ theme }) => theme.hoverBackground};
  }

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
    transform: translateY(-10px); /* Efeito de subida */
  }
`;

export const Tooltip = styled.span`
  visibility: hidden;
  width: 180px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%; /* Posição acima do elemento */
  left: 50%;
  margin-left: -90px;
  opacity: 0;
  transform: translateY(0);
  transition: opacity 0.3s, transform 0.3s;

  &::after {
    content: '';
    position: absolute;
    top: 100%; /* Parte inferior do tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
`;
