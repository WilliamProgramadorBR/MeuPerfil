// src/Telas/Home/MeuCurriculo.js

import React from 'react';
import { Container, Main, Section, Project, Footer,StyledP, ImageContainer, FooterContent, TechImage, ProfileImage, HiddenElement, ProjectsGrid, StyledH2 } from './HomeStyles';
import suaFoto from '../../Fotos/1694574063587.jpeg';
import Js from '../../Fotos/gifJs.gif';
import Node from '../../Fotos/GifNode.gif';
import Reactgif from '../../Fotos/GifReact.gif';
import C from '../../Fotos/gifdoC.gif';
import mongo from '../../Fotos/gifMongo.gif';
import mysql from '../../Fotos/Mysql.png';
import Layout from '../../Componentes/menu-lateral/Layout';
import { useInView } from 'react-intersection-observer';
import FooterComponent from '../../Componentes/rodape/rodape.js'; 
import { useNavigate } from 'react-router-dom';

const MeuCurriculo = () => {
  const { ref: sobreRef, inView: sobreInView } = useInView({ triggerOnce: true });
  const { ref: tecnologiasRef, inView: tecnologiasInView } = useInView({ triggerOnce: true });
  const { ref: projetosRef, inView: projetosInView } = useInView({ triggerOnce: true });

  const navigate = useNavigate();

  const handleProjectClick = (id) => {
    navigate(`/projeto/${id}`);
  };



  return (
    <Layout>
      <Container>
        <Main>
          {/* Seções de conteúdo */}
          <Section id="sobre" ref={sobreRef}>
            <StyledH2>Sobre Mim</StyledH2>
            <ProfileImage src={suaFoto} alt="Sua Foto" />
            <StyledP>
            Olá, meu nome é William Oliveira. Sou desenvolvedor Fullstack, com ênfase em back-end. Abaixo, você encontrará alguns dos meus projetos em destaque no GitHub. Sou formado em Análise e Desenvolvimento de Sistemas pela Estácio de Sá e possuo certificados em desenvolvimento back-end e front-end. Tenho experiência no desenvolvimento de aplicações para desktop utilizando Electron.js e domino duas tecnologias e suas documentações: JavaScript e C#.
      </StyledP>          </Section>
          <Section id="tecnologias" ref={tecnologiasRef}>
            <h2>Tecnologias</h2>
            <ImageContainer>
              <TechImage src={Js} alt="JavaScript" />
              <TechImage src={Reactgif} alt="React" />
              <TechImage src={C} alt="C" />
              <TechImage src={mongo} alt="MongoDB" />
              <TechImage src={mysql} alt="MySQL" />
              <TechImage src={Node} alt="Node.js" />
            </ImageContainer>
          </Section>
          <HiddenElement ref={projetosRef} className={projetosInView ? 'visible' : ''}>
            <Section id="projetos">
              <StyledH2>Projetos e experiências</StyledH2>
              <ProjectsGrid>
                <Project onClick={() => handleProjectClick(1)}>
                  <StyledH2>Plataforma Geniuz</StyledH2>
                  <StyledP>Plataforma de estudo online.</StyledP>
                </Project>
                <Project onClick={() => handleProjectClick(2)}>
                  <StyledH2>Aplicativo de finanças</StyledH2>
                  <StyledP>Plataforma feita para computadores, Linux, MacOs e Windows .</StyledP>
                </Project>
                <Project onClick={() => handleProjectClick(3)}>
                  <StyledH2>HelpDesk</StyledH2>
                  <StyledP>Experiência como suporte técnico HelpDesk </StyledP>
                </Project>
              </ProjectsGrid>
            </Section>
            
          </HiddenElement>
        </Main>
      
      </Container>
      <FooterComponent/>
    </Layout>
    
  );
};

export default MeuCurriculo;
