import React from 'react';
import { Container, Main, Section, Project, Footer,StyledP, ImageContainer, FooterContent, TechImage, ProfileImage, HiddenElement, ProjectsGrid, StyledH2, Tooltip } from './HomeStyles';
import suaFoto from '../../Fotos/1694574063587.jpeg';
import Js from '../../Fotos/gifJs.gif';
import Node from '../../Fotos/GifNode.gif';
import Reactgif from '../../Fotos/GifReact.gif';
import C from '../../Fotos/gifdoC.gif';
import mongo from '../../Fotos/gifMongo.gif';
import mysql from '../../Fotos/Mysql.png';
import Layout from '../../Componentes/menu-lateral/Layout';
import Electron from '../../Fotos/electronimg.png';
import kanbanize from '../../Fotos/kanbanize.png';
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

  let idade = 2024 - 1998;

  return (
    <Layout>
      <Container>
        <Main>
          <Section id="sobre" ref={sobreRef}>
            <StyledH2>Sobre Mim</StyledH2>
            <ProfileImage src={suaFoto} alt="Sua Foto" />
            <StyledP>
              Olá, meu nome é William Oliveira, nasci em 20/08/1998 atualmente tenho {idade}, naturalidade do Rio de Janeiro. Sou desenvolvedor Fullstack, com ênfase em back-end. Abaixo, você encontrará alguns dos meus projetos em destaque no GitHub. Sou formado em Análise e Desenvolvimento de Sistemas pela Estácio de Sá e possuo certificados em desenvolvimento back-end e front-end. Tenho experiência no desenvolvimento de aplicações para desktop utilizando Electron.js e domino duas tecnologias e suas documentações: Experiente em JavaScript, Typescript e C#.
            </StyledP>
          </Section>
          <Section id="tecnologias" ref={tecnologiasRef}>
            <h2>Tecnologias</h2>
            <ImageContainer>
              <TechImage src={Js} alt="JavaScript" />
              <TechImage src={Reactgif} alt="React" />
              <TechImage src={C} alt="C" />
              <TechImage src={mongo} alt="MongoDB" />
              <TechImage src={mysql} alt="MySQL" />
              <TechImage src={Node} alt="Node.js" />
              <TechImage src={Electron} alt="Electron.js" />
              <TechImage src={kanbanize} alt="Kanbanize" />
            </ImageContainer>
          </Section>
          <HiddenElement ref={projetosRef} className={projetosInView ? 'visible' : ''}>
            <Section id="projetos">
              <StyledH2>Projetos e experiências</StyledH2>
              <ProjectsGrid>
                      <Project onClick={() => handleProjectClick(1)}>
          <StyledH2>Plataforma Geniuz</StyledH2>
          <StyledP>Plataforma de estudo online.</StyledP>
          <Tooltip className="tooltip">Clique para ver mais informação da Geniuz</Tooltip>
          </Project>
          <Project onClick={() => handleProjectClick(2)}>
            <StyledH2>Aplicativo de finanças</StyledH2>
            <StyledP>Plataforma feita para computadores, Linux, MacOs e Windows.</StyledP>
            <Tooltip className="tooltip">Clique para ver mais informações do aplicativo </Tooltip>
          </Project>
          <Project onClick={() => handleProjectClick(3)}>
            <StyledH2>HelpDesk</StyledH2>
            <StyledP>Experiência como suporte técnico HelpDesk.</StyledP>
            <Tooltip className="tooltip">Clique para ver mais área de atuação como suporte técnico</Tooltip>
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
