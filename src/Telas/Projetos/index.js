// src/Telas/Projeto/ProjectDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Correção aqui
import { Container, Main, ProjectTitle, ProjectDescription, ProjectDetailsContainer, ProjectImage, ProjectTechnologies, TechImage, ProjectLinks, GalleryButton, StyledParagraph } from './Projetostyle.js';
import Layout from '../../Componentes/menu-lateral/Layout';
import Footer from '../../Componentes/rodape/rodape'; 
import { textofinanca, detailsfinancas } from '../../Textos_projetos/projeto_financas.js';
import { textosuporte, suporteimg, details_suporte } from '../../Textos_projetos/projeto_helpdesk.js';
import Node from '../../Fotos/GifNode.gif';
import suporte from '../../Fotos/suporte.jpg';
import Electron from '../../Fotos/electron.png';
import Docker from '../../Fotos/Docker.png';
import financas from '../../Fotos/image.png';
import kanbanize from '../../Fotos/kanbanize.png';
import jenkins from '../../Fotos/jenkins.png';
import TypeScrpt from '../../Fotos/typescript.png';
import scrum from '../../Fotos/scrum.png';
import imagemnotfound from '../../Fotos/imagemnot.png';
import GalleryModal from '../../Componentes/Gallery'; 
import viewFinance from '../../Views/Aplicativo de finanças 2024-08-11 23-45-18.mp4';
import { detailsgeniuz, geniuzlogo, descriptionGeniuz } from '../../Textos_projetos/projeto_geniuz.js';

const projectData = {
  1: {
    title: 'Geniuz',
    image: geniuzlogo,
    description: descriptionGeniuz,
    technologies: [scrum, kanbanize, Docker, Node, jenkins, TypeScrpt],
    repository: '/repositório-restrito',
    details: detailsgeniuz,
    gallery: [imagemnotfound]
  },
  2: {
    title: 'Aplicativo de finanças',
    image: financas,
    description: textofinanca,
    technologies: [jenkins, Node, Electron, Docker],
    repository: 'https://github.com/WilliamProgramadorBR/Gerenciador-financeiro',
    details: detailsfinancas,
    gallery: [jenkins, Node, viewFinance, Docker]
  },
  3: {
    title: 'Suporte técnico MedGrupo',
    image: suporte,
    description: textosuporte,
    technologies: [kanbanize, scrum, suporteimg, Node],
    repository: 'https://github.com/Rennan-Pessanha/Site-Helpdesk',
    details: details_suporte,
    gallery: [imagemnotfound]
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!project) {
      // Redireciona para a página de "not found"
      navigate('/notfound'); // Substitua '/notfound' pela rota real da sua página de not found
    }
  }, [project, navigate]);

  if (!project) {
    return null; // Não renderiza nada enquanto redireciona
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

            {project.details.map((detail, index) => (
              <StyledParagraph key={index}>{detail}</StyledParagraph>
            ))}

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
