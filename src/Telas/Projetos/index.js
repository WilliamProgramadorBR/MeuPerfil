import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaExternalLinkAlt, FaFileAlt, FaImages, FaLock } from 'react-icons/fa';
import Layout from '../../Componentes/menu-lateral/Layout';
import Footer from '../../Componentes/rodape/rodape';
import GalleryModal from '../../Componentes/Gallery';
import { profile, rotinaAi } from '../../data/portfolio';
import { textofinanca, detailsfinancas } from '../../Textos_projetos/projeto_financas';
import { textosuporte, suporteimg, details_suporte } from '../../Textos_projetos/projeto_helpdesk';
import { detailsgeniuz, geniuzlogo, descriptionGeniuz } from '../../Textos_projetos/projeto_geniuz';
import Node from '../../Fotos/GifNode.gif';
import ReactIcon from '../../Fotos/GifReact.gif';
import suporte from '../../Fotos/suporte.jpg';
import Electron from '../../Fotos/electron.png';
import Docker from '../../Fotos/Docker.png';
import financas from '../../Fotos/image.png';
import rotinaImage from '../../Fotos/Fotocapa.png';
import medgrupoAuditImage from '../../Fotos/medgrupo-auditoria-ia.svg';
import kanbanize from '../../Fotos/kanbanize.png';
import jenkins from '../../Fotos/jenkins.png';
import mysql from '../../Fotos/Mysql.png';
import planilha from '../../Fotos/planilha.png';
import TypeScrpt from '../../Fotos/typescript.png';
import scrum from '../../Fotos/scrum.png';
import imagemnotfound from '../../Fotos/imagemnot.png';
import viewFinance from '../../Views/Aplicativo de finanças 2024-08-11 23-45-18.mp4';
import {
  BackLink,
  Container,
  DetailGrid,
  GalleryButton,
  LinkButton,
  Main,
  ProjectDescription,
  ProjectDetailsContainer,
  ProjectHero,
  ProjectHighlight,
  ProjectHighlights,
  ProjectImage,
  ProjectImagePanel,
  ProjectKicker,
  ProjectLinks,
  ProjectTechnologies,
  ProjectTitle,
  StyledParagraph,
  TechImage,
} from './Projetostyle';

const projectData = {
  5: {
    title: 'Auditoria IA MEDGRUPO',
    kicker: 'IA corporativa, dados e governança',
    image: medgrupoAuditImage,
    description:
      'Sistema corporativo de auditoria assistida por IA para transformar conversas de atendimento em indicadores, alertas, filas de validação e ações de melhoria com decisão humana preservada.',
    technologies: [medgrupoAuditImage, planilha, kanbanize, scrum, TypeScrpt],
    repository: null,
    caseUrl: `${process.env.PUBLIC_URL}/downloads/Auditoria_IA_MEDGRUPO_Case_Portfolio_William_Oliveira.pdf`,
    highlights: [
      { label: 'Papel', value: 'Analista de Controladoria e Planejamento' },
      { label: 'Foco', value: 'Monitoria, qualidade e possíveis NCGs' },
      { label: 'Stack', value: 'Gemini, Apps Script, Sheets e JavaScript' },
      { label: 'Governança', value: 'IA sinaliza, Controladoria valida' },
    ],
    details: [
      'O projeto nasceu de uma necessidade real do MEDGRUPO: ampliar a leitura da qualidade dos atendimentos sem transformar a monitoria em uma carga manual inviável para gestores e Controladoria.',
      'A solução combina IA generativa, automação com Google Apps Script, Google Sheets como base operacional, dados de atendimento e um dashboard web em HTML, CSS e JavaScript.',
      'O Gemini analisa conversas com prompt estruturado, saída JSON, controle de tokens e recorte cirúrgico da transcrição para separar bot, roteador, mensagens sistêmicas e atuação humana real.',
      'O dashboard organiza indicadores executivos, cobertura de auditoria, possíveis NCGs, nota média, filtros por período, análise IA, Meu Time, acompanhamento e validação da Controladoria.',
      'A decisão de produto mais importante foi preservar governança: a IA não aplica NCG formal, não substitui feedback humano e não gera impacto direto sobre colaboradores sem revisão humana.',
      'A camada operacional registra divergências, decisões administrativas, validação da Controladoria, tipo de erro da IA e sugestões de ajuste de prompt, criando um ciclo de melhoria contínua.',
      'Além de automatizar análise, o case demonstra arquitetura de solução, prompt engineering, ETL em planilhas, UX corporativa, performance em Apps Script, comunicação com liderança e maturidade de produto.',
    ],
  },
  4: {
    title: 'Rotina AI',
    kicker: 'IA aplicada e produto mobile',
    image: rotinaImage,
    description: rotinaAi.promise,
    technologies: [ReactIcon, TypeScrpt, Node, mysql, Docker],
    repository: profile.github,
    details: [
      'O Rotina AI é um produto autoral criado para transformar rotinas que ficam no papel em planos práticos, acompanhados por IA, alarmes inteligentes e métricas de progresso.',
      'No front-end, a base técnica usa React Native, Expo, Expo Router, TypeScript, Zod, Axios, calendário, captura de tela e componentes nativos para entregar uma experiência mobile moderna.',
      'No back-end, o app foi desenhado com Fastify, Prisma ORM, MySQL/MariaDB, SQLite como fallback, JWT, bcrypt, Nodemailer e rotas REST para autenticação, rotinas, lembretes, IA, colaboração e alarmes.',
      'A camada de IA usa Google Gemini para geração de rotinas, sugestões e reagendamento inteligente, com Ollama como possibilidade de inferência local/offline.',
      'Entre as telas principais estão Meu Dia, Modo Foco, Onboarding em 5 passos, Templates, Revisão Semanal, Diagnóstico de Permissões, Colaboração e criação de lembretes com níveis de alarme.',
      'O diferencial do app está em unir rotina, foco, colaboração, alarmes por urgência e revisão semanal em uma experiência que aprende com o usuário e ajuda a manter constância.',
    ],
    gallery: [imagemnotfound],
  },
  1: {
    title: 'Plataforma GêniuZ',
    kicker: 'Edtech e back-end',
    image: geniuzlogo,
    description: descriptionGeniuz,
    technologies: [scrum, kanbanize, Docker, Node, jenkins, TypeScrpt],
    repository: null,
    details: detailsgeniuz,
    gallery: [imagemnotfound],
  },
  2: {
    title: 'Aplicativo de finanças',
    kicker: 'App desktop',
    image: financas,
    description: textofinanca,
    technologies: [jenkins, Node, Electron, Docker],
    repository: 'https://github.com/WilliamProgramadorBR/Gerenciador-financeiro',
    details: detailsfinancas,
    gallery: [jenkins, Node, viewFinance, Docker],
  },
  3: {
    title: 'HelpDesk, automações e projetos',
    kicker: 'Operações, produto e dados',
    image: suporte,
    description: textosuporte,
    technologies: [kanbanize, scrum, suporteimg, Node],
    repository: 'https://github.com/Rennan-Pessanha/Site-Helpdesk',
    details: details_suporte,
    gallery: [imagemnotfound],
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
      navigate('/notfound', { replace: true });
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  const handleOpenGallery = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  return (
    <Layout>
      <Container>
        <Main>
          <BackLink type="button" onClick={() => navigate('/')}>
            <FaArrowLeft /> Voltar para o portfolio
          </BackLink>

          <ProjectDetailsContainer>
            <ProjectHero>
              <ProjectKicker>{project.kicker}</ProjectKicker>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              {project.highlights && (
                <ProjectHighlights>
                  {project.highlights.map((highlight) => (
                    <ProjectHighlight key={highlight.label}>
                      <span>{highlight.label}</span>
                      <strong>{highlight.value}</strong>
                    </ProjectHighlight>
                  ))}
                </ProjectHighlights>
              )}
              <ProjectLinks>
                {project.caseUrl && (
                  <LinkButton
                    $variant="primary"
                    href={project.caseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Case público <FaFileAlt />
                  </LinkButton>
                )}
                {project.repository ? (
                  <LinkButton
                    $variant={project.caseUrl ? undefined : 'primary'}
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repositório <FaExternalLinkAlt />
                  </LinkButton>
                ) : !project.caseUrl ? (
                  <LinkButton $disabled href="#restrito">
                    Projeto privado <FaLock />
                  </LinkButton>
                ) : null}
                {project.gallery && (
                  <GalleryButton type="button" onClick={() => handleOpenGallery(0)}>
                    Galeria <FaImages />
                  </GalleryButton>
                )}
              </ProjectLinks>
            </ProjectHero>

            <ProjectImagePanel>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectTechnologies>
                {project.technologies.map((tech, index) => (
                  <TechImage key={`${tech}-${index}`} src={tech} alt={`Tecnologia ${index + 1}`} />
                ))}
              </ProjectTechnologies>
            </ProjectImagePanel>
          </ProjectDetailsContainer>

          <DetailGrid>
            {project.details.map((detail, index) => (
              <StyledParagraph key={index}>{detail}</StyledParagraph>
            ))}
          </DetailGrid>

          {modalOpen && (
            <GalleryModal
              items={project.gallery}
              currentIndex={currentIndex}
              onClose={() => setModalOpen(false)}
            />
          )}
        </Main>
      </Container>
      <Footer />
    </Layout>
  );
};

export default ProjectDetails;
