// src/Telas/Projeto/ProjectDetails.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Main, ProjectTitle, ProjectDescription, ProjectDetailsContainer, ProjectImage, ProjectTechnologies, TechImage, ProjectLinks, GalleryButton } from './Projetostyle.js';
import Layout from '../../Componentes/menu-lateral/Layout';
import Footer from '../../Componentes/rodape/rodape'; 
import { texto, img } from '../../Textos_projetos/projeto_financas';
import Node from '../../Fotos/GifNode.gif';
import Electron from '../../Fotos/electron.png';
import Docker from '../../Fotos/Docker.png';
import financas from '../../Fotos/image.png';
import GalleryModal from '../../Componentes/Gallery'; 
import viewFinance from '../../Views/Aplicativo de finanças 2024-08-11 23-45-18.mp4'

const projectData = {
  1: {
    title: 'Projeto 1',
    image: 'caminho/para/imagem1.jpg',
    description: '',
    technologies: ['caminho/para/tech1.png', 'caminho/para/tech2.png'],
    repository: 'https://github.com/exemplo/projeto1',
    details: '',
    gallery: ['caminho/para/imagem1.jpg', 'caminho/para/video1.mp4']
  },
  2: {
    title: 'Aplicativo de finanças',
    image: financas,
    description: texto,
    technologies: [img, Node, Electron, Docker],
    repository: 'https://github.com/WilliamProgramadorBR/Gerenciador-financeiro',
    details: 'Abaixo faça o seu download',
    gallery: [img, Node, viewFinance, Docker]
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) {
    return <p>Projeto não encontrado.</p>;
  }

  const handleOpenGallery = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  return (
    <Layout>
      <Container>
        <Main>
          <ProjectDetailsContainer>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectDescription>{project.description}</ProjectDescription>
            
            <ProjectTechnologies>
              {project.technologies.map((tech, index) => (
                <TechImage key={index} src={tech} alt={`Tecnologia ${index + 1}`} />
              ))}
            </ProjectTechnologies>
            
            <ProjectLinks>
              <a href={project.repository} target="_blank" rel="noopener noreferrer">Repositório</a>
            </ProjectLinks>

            {/* Botão para abrir a galeria */}
            {project.gallery && (
              <GalleryButton onClick={() => handleOpenGallery(0)}>Ver Galeria</GalleryButton>
            )}
            
            {/* Componente GalleryModal */}
            {modalOpen && (
              <GalleryModal 
                items={project.gallery} 
                currentIndex={currentIndex} 
                onClose={() => setModalOpen(false)} 
              />
            )}
          </ProjectDetailsContainer>
        </Main>
        <Footer /> {/* Adicione o footer aqui */}
      </Container>
    </Layout>
  );
};

export default ProjectDetails;
