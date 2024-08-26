// src/Telas/Projeto/Projetostyle.js
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: calc(100vh - 100px); /* Ajusta a altura mínima para considerar o footer */
  box-sizing: border-box; /* Inclui o padding na altura total */
  font-family: 'Roboto', sans-serif; /* Fonte principal para o conteúdo */
`;
export const GalleryButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Main = styled.main`
  padding: 20px;
`;

export const ProjectDetailsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto; /* Centraliza o conteúdo */
`;

export const ProjectTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.primaryColor};
  font-family: 'Montserrat', sans-serif; /* Fonte para títulos */
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif; /* Fonte para parágrafos */
`;

export const ProjectImage = styled.img`
  width: 20%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const ProjectTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

export const TechImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;
`;

export const ProjectLinks = styled.div`
  margin-top: 20px;

  a {
    color: ${({ theme }) => theme.primaryColor};
    text-decoration: none;
    font-weight: bold;
    margin-right: 15px;
    transition: color 0.3s;
    font-family: 'Roboto', sans-serif; /* Fonte para links */

    &:hover {
      color: ${({ theme }) => theme.primaryColorHover};
    }
  }
`;
