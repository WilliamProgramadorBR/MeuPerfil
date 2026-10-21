import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaDownload, FaExternalLinkAlt, FaFileAlt, FaImages, FaLock } from 'react-icons/fa';
import Layout from '../../Componentes/menu-lateral/Layout';
import Footer from '../../Componentes/rodape/rodape';
import GalleryModal from '../../Componentes/Gallery';
import ProjectVideos from '../../Componentes/Videos';
import ProjectVerticals from '../../Componentes/Verticais';
import { mercadoIa, profile, rotinaAi } from '../../data/portfolio';
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
import mercadoIaImage from '../../Fotos/mercado-ia-capa.jpg';
import mercadoIaIcon from '../../Fotos/mercado-ia-icone.png';
import mercadoIaCentral from '../../Fotos/mercado-ia-central.png';
import mercadoIaVigia from '../../Fotos/mercado-ia-vigia.png';
import mercadoIaJogar from '../../Fotos/mercado-ia-jogar.png';
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

const mercadoIaVideos = `${process.env.PUBLIC_URL}/videos/mercado-ia`;

const projectData = {
  6: {
    title: 'Mercado IA para PES 2021',
    kicker: 'IA aplicada, engenharia reversa e games',
    image: mercadoIaImage,
    description:
      'Motor externo que dá uma nova vida à Master Liga do eFootball PES 2021: cada clube ganha um diretor de futebol com identidade, um técnico que estuda o adversário e o próprio usuário, e a carreira vira um simulador com imprensa, vestiário, diretoria e redes sociais.',
    technologies: [mercadoIaIcon, mercadoIaCentral, mercadoIaVigia, mercadoIaJogar],
    repository: mercadoIa.repository,
    downloadUrl: mercadoIa.releaseUrl,
    downloadLabel: `Baixar v${mercadoIa.version}`,
    highlights: [
      { label: 'Versão', value: `${mercadoIa.version} · código aberto (MIT)` },
      { label: 'Stack', value: 'Python, PySide6, Lua (Sider) e SQLite' },
      { label: 'IA', value: 'Regras, rede neural e amostragem de Thompson' },
      { label: 'Escala', value: 'Cerca de 24 mil jogadores lidos da memória do jogo' },
    ],
    videosTitle: 'O projeto em vídeo',
    videos: [
      {
        title: 'Como a rede neural corrigiu a minha Master Liga',
        description:
          'Os três problemas que encontrei no código do PES 2021 (escalação por sorteio, tática sem fundamento e o índice de 0 a 22) e como resolvi cada um, com melhores momentos de City × United.',
        duration: '32 min',
        youtubeId: 'KgIAcsMVEs0',
        destaque: true,
      },
      {
        title: 'Por que e como criei o Mercado IA',
        description:
          'A motivação, o mercado com diretores de futebol, a rede neural tática e o duelo entre estatística e rede neural, explicados por mim.',
        duration: '39 min',
        youtubeId: 'rNcWj8jKM3c',
      },
      {
        title: 'Gameplay: a Master Liga contra a rede neural',
        description:
          'Uma partida completa com a IA adversária ajustando a tática ao vivo, seguida de um tour pela Central do Técnico.',
        duration: '42 min',
        youtubeId: 'CQbSIiwKGvY',
      },
      {
        title: 'A IA adversária em campo',
        description:
          'Crystal Palace x Manchester United: a IA marca o Bruno Fernandes, recua quando precisa e muda do lançamento para o toque.',
        preview: `${mercadoIaVideos}/partida.mp4`,
        poster: `${mercadoIaVideos}/partida.jpg`,
      },
      {
        title: 'Central do Técnico',
        description:
          'Coletivas com consequência, análise do adversário, disciplina, calendário de treino, WhatsApp dos jogadores, diretoria e histórico.',
        preview: `${mercadoIaVideos}/central.mp4`,
        poster: `${mercadoIaVideos}/central.jpg`,
      },
      {
        title: 'Imprensa, mesa redonda e redes sociais',
        description:
          'Três jornais com tons diferentes, pré e pós-jogo, a mesa redonda com voz e torcedores comentando cada decisão.',
        preview: `${mercadoIaVideos}/imprensa.mp4`,
        poster: `${mercadoIaVideos}/imprensa.jpg`,
      },
      {
        title: 'Estatística x rede neural',
        description:
          'Os dois modelos dão palpites antes de cada jogo; quem acerta mais define o plano do próximo adversário.',
        preview: `${mercadoIaVideos}/rede-neural.mp4`,
        poster: `${mercadoIaVideos}/rede-neural.jpg`,
      },
    ],
    stories: [
      'Eu cansei de ganhar no PES',
      'Problema 1: escalação no sorteio',
      'Por trás do código',
      'A IA que estuda você',
      'Na prática: City × United',
      'Imprensa, redes e vestiário',
    ].map((title, i) => ({
      title,
      src: `${mercadoIaVideos}/stories/story-${i + 1}.mp4`,
      poster: `${mercadoIaVideos}/stories/story-${i + 1}.jpg`,
    })),
    reels: [
      'O PES 2021 escalava os times no sorteio',
      'A IA estudou o meu time',
      'Esse centroavante é meu irmão',
      'Foi bola!',
    ].map((title, i) => ({
      title,
      src: `${mercadoIaVideos}/reels/reel-${i + 1}.mp4`,
      poster: `${mercadoIaVideos}/reels/reel-${i + 1}.jpg`,
    })),
    details: [
      'O projeto nasceu de uma dor de jogador. Depois de seis anos e doze temporadas de Master Liga, o PES 2021 tinha deixado de desafiar: cinco Premier Leagues seguidas, invicto, no modo lenda. Os jogos de futebol atuais focam no online e perderam a sensação de simulador, e a comunidade continua modificando títulos antigos. Usei as férias para resolver isso com código.',
      'O primeiro problema era o mercado. O jogo repunha peças de forma aleatória, sem olhar nível, estilo ou idade, e com o tempo a Master Liga se desequilibrava: clubes ricos contratavam mal e times sem tradição chegavam à final da Champions. O Mercado IA dá a cada clube um diretor de futebol com perfil (elite, formador, vendedor, reconstrução, modesto ou equilibrado), objetivo de temporada, orçamento e livro-caixa que atravessa as temporadas.',
      'Cada contratação combina ganho tático na formação real do clube, posição natural, estilo de jogo, idade, preço e sinergia do elenco. Um time de toque não contrata um especialista em lançamento só pelo overall; clubes formadores apostam em jovens para revender, enquanto os grandes compram para resolver lacunas.',
      'A IA tática do jogo montava planos sem fundamento. Agora cada clube tem um técnico: um olheiro lê o plano de jogo do usuário, os artilheiros e a velocidade do ataque, e o técnico monta estilo, pressão, linha, compactação e instruções avançadas, como marcação individual, sem tocar em atributos. O aprendizado usa o saldo acima do esperado como recompensa e amostragem de Thompson para escolher entre planos, preservando a identidade de cada clube.',
      'Dois modelos preveem cada partida: um estatístico e uma rede neural. A estatística acerta mais com poucos dados; a rede neural ajusta os pesos e tende a superá-la conforme as partidas se acumulam. Quem vence o duelo dita o plano do jogo seguinte. As estatísticas que o jogo descartava a cada temporada passaram a ser guardadas em SQLite para alimentar o aprendizado.',
      'Toda a integração foi feita por engenharia reversa. Um módulo Lua carregado pelo Sider fotografa a memória do PES2021.exe, onde cada ficha de jogador ocupa 380 bytes. O save da Master Liga é descriptografado numa cópia, editado, recriptografado e comparado byte a byte antes de substituir o original, sempre com backup.',
      'A Central do Técnico é uma página local que transforma a carreira em vida de técnico: vestiário, coletivas com consequências, três jornais com tons diferentes, mesa redonda com voz, redes sociais, diretoria com metas e confiança, calendário de treino, WhatsApp dos jogadores e histórico com gráficos. Os textos podem ser reescritos pelo Gemini com a chave do próprio usuário; sem chave, tudo funciona com textos próprios.',
      'O projeto é distribuído como produto: um Painel em Qt6 (PySide6) controla tudo, o instalador leva o Python embutido, há versão portátil, atualização automática e uma verificação que confere Sider, pastas e ferramentas antes de jogar.',
    ],
  },
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
                {project.downloadUrl && (
                  <LinkButton
                    $variant="primary"
                    href={project.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.downloadLabel || 'Download'} <FaDownload />
                  </LinkButton>
                )}
                {project.repository ? (
                  <LinkButton
                    $variant={project.caseUrl || project.downloadUrl ? undefined : 'primary'}
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

          {project.videos && <ProjectVideos title={project.videosTitle || 'Vídeos'} videos={project.videos} />}

          {(project.stories || project.reels) && <ProjectVerticals stories={project.stories} reels={project.reels} />}

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
