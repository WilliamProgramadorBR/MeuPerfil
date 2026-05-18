import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaAndroid,
  FaArrowRight,
  FaBell,
  FaBriefcase,
  FaBuilding,
  FaChartLine,
  FaClock,
  FaCode,
  FaDownload,
  FaEnvelope,
  FaExternalLinkAlt,
  FaFileAlt,
  FaGithub,
  FaGraduationCap,
  FaMobileAlt,
  FaRobot,
  FaRocket,
  FaServer,
  FaUsers,
  FaWhatsapp,
} from 'react-icons/fa';
import Layout from '../../Componentes/menu-lateral/Layout';
import FooterComponent from '../../Componentes/rodape/rodape';
import {
  apps,
  career,
  education,
  metrics,
  profile,
  projects,
  rotinaAi,
  services,
  skillGroups,
  technologies,
  story,
} from '../../data/portfolio';
import {
  ActionLink,
  AppCard,
  AppContent,
  AppFeatureCard,
  AppFeatureGrid,
  AppImage,
  AppMeta,
  AppSpecGrid,
  AppSpecItem,
  AppsGrid,
  BandInner,
  ButtonLink,
  CardActions,
  ContactActions,
  ContactBand,
  ContactInner,
  ContactText,
  ContactTitle,
  Container,
  EducationCard,
  EducationMeta,
  EducationPanel,
  Eyebrow,
  FeaturedActions,
  FeaturedApp,
  FeaturedAppContent,
  FeaturedAppPreview,
  FeaturedText,
  FeaturedTitle,
  FeatureItem,
  FeatureList,
  Hero,
  HeroActions,
  HeroBackdrop,
  HeroContent,
  HeroInner,
  HeroLead,
  HeroMeta,
  HeroMetaItem,
  HeroPanel,
  HeroPanelText,
  HeroPanelTitle,
  HeroPhoto,
  HeroProfile,
  HeroTitle,
  Main,
  PhoneHeader,
  PhoneMock,
  PhoneScreen,
  PhoneTask,
  PhoneTaskList,
  ProcessGrid,
  ProcessStep,
  Project,
  ProjectBody,
  ProjectEyebrow,
  ProjectImage,
  ProjectText,
  ProjectTitle,
  ProjectsGrid,
  Section,
  SectionBand,
  SectionEyebrow,
  SectionHeader,
  ServiceCard,
  ServicesGrid,
  SignalItem,
  SignalStrip,
  SkillGroup,
  SkillGroupsGrid,
  SkillPill,
  SkillPills,
  StatusPill,
  StoryContent,
  StoryGrid,
  StoryParagraph,
  StyledH2,
  StyledP,
  Tag,
  Tags,
  TechGrid,
  TechImage,
  TechItem,
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineMarker,
  TimelinePeriod,
} from './HomeStyles';

const serviceIcons = [FaServer, FaRobot, FaChartLine, FaMobileAlt];
const appFeatureIcons = [FaRobot, FaBell, FaClock, FaRocket, FaUsers, FaChartLine];

const processSteps = [
  {
    title: 'Escuto a operação',
    text: 'Começo entendendo usuário, regra de negócio, dor do time e impacto do processo.',
  },
  {
    title: 'Transformo em sistema',
    text: 'Organizo rotas, dados, telas, automações e integrações com foco em manutenção.',
  },
  {
    title: 'Valido com uso real',
    text: 'Testo, homologo, documento e ajusto a solução até ela fazer sentido para quem usa.',
  },
  {
    title: 'Evoluo com dados',
    text: 'Uso dashboards, logs, feedback e IA para melhorar produto, rotina e tomada de decisão.',
  },
];

const phoneTasks = [
  { title: 'IA gerou sua rotina', text: 'Blocos de estudo, trabalho, pausa e descanso organizados.' },
  { title: 'Alarme importante às 14:30', text: 'Prioridade ajustada para não deixar a entrega passar.' },
  { title: 'Revisão semanal pronta', text: 'Taxa de conclusão, melhor dia e próximos ajustes.' },
];

const getAge = (birthDate) => {
  const birth = new Date(`${birthDate}T00:00:00`);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const hadBirthday =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());

  if (!hadBirthday) {
    age -= 1;
  }

  return age;
};

const Home = () => {
  const age = getAge(profile.birthDate);
  const featuredApp = apps[0];

  return (
    <Layout>
      <Container>
        <Main>
          <Hero id="inicio">
            <HeroBackdrop $image={profile.photo}>
              <HeroInner>
                <HeroContent>
                  <Eyebrow>{profile.headline}</Eyebrow>
                  <HeroTitle>{profile.name}</HeroTitle>
                  <HeroLead>
                    Desenvolvedor full stack focado em back-end, APIs, automações, dashboards e IA
                    aplicada. Uso programação também dentro de contextos corporativos para transformar
                    processos em sistemas úteis.
                  </HeroLead>
                  <HeroActions>
                    <ActionLink $variant="primary" href="#historia">
                      <FaBriefcase /> Minha história
                    </ActionLink>
                    <ActionLink
                      href={featuredApp.downloadUrl || '#rotina-ai'}
                      download={featuredApp.downloadFileName || undefined}
                    >
                      <FaAndroid /> Ver Rotina AI
                    </ActionLink>
                    <ActionLink href={`mailto:${profile.email}`}>
                      <FaEnvelope /> Conversar
                    </ActionLink>
                  </HeroActions>

                  <SignalStrip>
                    {metrics.map((metric) => (
                      <SignalItem key={metric.label}>
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                      </SignalItem>
                    ))}
                  </SignalStrip>
                </HeroContent>

                <HeroPanel>
                  <HeroProfile>
                    <HeroPhoto src={profile.photo} alt={profile.name} />
                    <div>
                      <HeroPanelTitle>{profile.role}</HeroPanelTitle>
                      <HeroPanelText>{profile.currentRole} no {profile.currentCompany} · {profile.location}</HeroPanelText>
                    </div>
                  </HeroProfile>
                  <HeroMeta>
                    <HeroMetaItem>
                      <strong>Nível acadêmico</strong>
                      <span>{profile.academicLevel}</span>
                    </HeroMetaItem>
                    <HeroMetaItem>
                      <strong>Formação</strong>
                      <span>{profile.degree} pela Estácio.</span>
                    </HeroMetaItem>
                    <HeroMetaItem>
                      <strong>Perfil</strong>
                      <span>{age} anos, foco em Node.js, React, Electron, IA, APIs REST e automações.</span>
                    </HeroMetaItem>
                  </HeroMeta>
                </HeroPanel>
              </HeroInner>
            </HeroBackdrop>
          </Hero>

          <Section id="historia">
            <StoryGrid>
              <StoryContent>
                <SectionHeader>
                  <SectionEyebrow>História profissional</SectionEyebrow>
                  <StyledH2>Programação como fio condutor da minha carreira.</StyledH2>
                </SectionHeader>
                {story.map((paragraph) => (
                  <StoryParagraph key={paragraph}>{paragraph}</StoryParagraph>
                ))}
              </StoryContent>

              <EducationPanel>
                <SectionEyebrow>
                  <FaGraduationCap /> Formação acadêmica
                </SectionEyebrow>
                {education.map((item) => (
                  <EducationCard key={item.title}>
                    <small>{item.school}</small>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <EducationMeta>
                      <StatusPill>{item.status}</StatusPill>
                      <StatusPill>{item.period}</StatusPill>
                    </EducationMeta>
                  </EducationCard>
                ))}
              </EducationPanel>
            </StoryGrid>
          </Section>

          <SectionBand id="carreira">
            <BandInner>
              <SectionHeader>
                <SectionEyebrow>Experiência</SectionEyebrow>
                <StyledH2>Experiência em tecnologia aplicada a produtos e processos reais.</StyledH2>
                <StyledP>
                  O histórico no MEDGRUPO e na GêniuZ mostra uma evolução técnica: entender problemas,
                  criar APIs, automatizar processos, apoiar times e construir soluções full stack.
                </StyledP>
              </SectionHeader>
              <Timeline>
                {career.map((item) => (
                  <TimelineItem key={`${item.company}-${item.role}`}>
                    <TimelineMarker aria-hidden="true" />
                    <TimelineContent>
                      <ProjectEyebrow>
                        <FaBuilding /> {item.company}
                      </ProjectEyebrow>
                      <h3>{item.role}</h3>
                      <TimelinePeriod>{item.period} · {item.location}</TimelinePeriod>
                      <p>{item.description}</p>
                      <Tags>
                        {item.tags.map((tag) => (
                          <Tag key={tag}>{tag}</Tag>
                        ))}
                      </Tags>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </BandInner>
          </SectionBand>

          <Section id="rotina-ai">
            <FeaturedApp>
              <FeaturedAppContent>
                <SectionEyebrow>Produto autoral · v{rotinaAi.version}</SectionEyebrow>
                <FeaturedTitle>{rotinaAi.title}</FeaturedTitle>
                <FeaturedText>{rotinaAi.promise}</FeaturedText>
                <FeaturedText>{rotinaAi.quote}</FeaturedText>
                <FeatureList>
                  {rotinaAi.audience.map((item) => (
                    <FeatureItem key={item}>{item}</FeatureItem>
                  ))}
                </FeatureList>
                <FeaturedActions>
                  {featuredApp.downloadUrl ? (
                    <ActionLink
                      $variant="primary"
                      href={featuredApp.downloadUrl}
                      download={featuredApp.downloadFileName || undefined}
                    >
                      <FaDownload /> Download APK
                    </ActionLink>
                  ) : (
                    <ActionLink $variant="primary" href="#apps">
                      <FaDownload /> Release externo em preparação
                    </ActionLink>
                  )}
                  <ActionLink href="#apps">
                    <FaRocket /> Ver apps
                  </ActionLink>
                </FeaturedActions>
              </FeaturedAppContent>

              <FeaturedAppPreview aria-hidden="true">
                <PhoneMock>
                  <PhoneScreen>
                    <PhoneHeader>
                      <strong>Rotina AI</strong>
                      <span>v{rotinaAi.version}</span>
                    </PhoneHeader>
                    <PhoneTaskList>
                      {phoneTasks.map((task) => (
                        <PhoneTask key={task.title}>
                          <strong>{task.title}</strong>
                          <span>{task.text}</span>
                        </PhoneTask>
                      ))}
                    </PhoneTaskList>
                  </PhoneScreen>
                </PhoneMock>
              </FeaturedAppPreview>
            </FeaturedApp>

            <AppSpecGrid>
              <AppSpecItem>
                <span>Plataformas</span>
                <strong>{rotinaAi.platforms}</strong>
              </AppSpecItem>
              <AppSpecItem>
                <span>Pacote Android</span>
                <strong>{rotinaAi.packageName}</strong>
              </AppSpecItem>
              <AppSpecItem>
                <span>IA principal</span>
                <strong>Google Gemini + fallback Ollama</strong>
              </AppSpecItem>
              <AppSpecItem>
                <span>Atualização</span>
                <strong>{rotinaAi.date}</strong>
              </AppSpecItem>
            </AppSpecGrid>

            <SectionHeader>
              <SectionEyebrow>Funcionalidades do Rotina AI</SectionEyebrow>
              <StyledH2>Um app de rotina com lógica de produto, dados e IA contextual.</StyledH2>
            </SectionHeader>
            <AppFeatureGrid>
              {rotinaAi.features.map((feature, index) => {
                const Icon = appFeatureIcons[index] || FaRobot;

                return (
                  <AppFeatureCard key={feature.title}>
                    <Icon />
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </AppFeatureCard>
                );
              })}
            </AppFeatureGrid>
          </Section>

          <SectionBand>
            <BandInner>
              <SectionHeader>
                <SectionEyebrow>Como posso ajudar</SectionEyebrow>
                <StyledH2>Serviços para empresas, produtos e times enxutos.</StyledH2>
              </SectionHeader>
              <ServicesGrid>
                {services.map((service, index) => {
                  const Icon = serviceIcons[index] || FaCode;

                  return (
                    <ServiceCard key={service.title}>
                      <Icon />
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </ServiceCard>
                  );
                })}
              </ServicesGrid>
            </BandInner>
          </SectionBand>

          <Section>
            <SectionHeader>
              <SectionEyebrow>Meu jeito de trabalhar</SectionEyebrow>
              <StyledH2>Do problema de negócio ao software funcionando.</StyledH2>
              <StyledP>
                Minha experiência em suporte e homologação me ajuda a criar soluções menos frágeis:
                primeiro entendo o uso, depois desenho APIs, dados e interfaces, e só então acelero a entrega.
              </StyledP>
            </SectionHeader>
            <ProcessGrid>
              {processSteps.map((step, index) => (
                <ProcessStep key={step.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </ProcessStep>
              ))}
            </ProcessGrid>
          </Section>

          <Section id="projetos">
            <SectionHeader>
              <SectionEyebrow>Portfolio</SectionEyebrow>
              <StyledH2>Projetos com história, decisões técnicas e resultado visível.</StyledH2>
              <StyledP>
                Uma seleção dos trabalhos que mostram back-end, desktop, suporte técnico,
                automação, IA aplicada e construção de produtos.
              </StyledP>
            </SectionHeader>

            <ProjectsGrid>
              {projects.map((project) => (
                <Project key={project.id}>
                  <ProjectImage src={project.image} alt={project.title} />
                  <ProjectBody>
                    <ProjectEyebrow>{project.eyebrow}</ProjectEyebrow>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectText>{project.summary}</ProjectText>
                    <ProjectText>{project.impact}</ProjectText>
                    <Tags>
                      {project.stack.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </Tags>
                    <CardActions>
                      <ButtonLink as={Link} $variant="primary" to={project.route}>
                        Detalhes <FaArrowRight />
                      </ButtonLink>
                      {project.repository && (
                        <ButtonLink href={project.repository} target="_blank" rel="noopener noreferrer">
                          Código <FaGithub />
                        </ButtonLink>
                      )}
                      {project.caseUrl && (
                        <ButtonLink href={project.caseUrl} target="_blank" rel="noopener noreferrer">
                          Case público <FaFileAlt />
                        </ButtonLink>
                      )}
                    </CardActions>
                  </ProjectBody>
                </Project>
              ))}
            </ProjectsGrid>
          </Section>

          <SectionBand id="apps">
            <BandInner>
              <SectionHeader>
                <SectionEyebrow>Apps e downloads</SectionEyebrow>
                <StyledH2>Aplicativos gratuitos, builds oficiais e próximos lançamentos.</StyledH2>
                <StyledP>
                  A área de apps agora destaca o Rotina AI como produto principal e mantém espaço
                  para versões desktop, mobile, changelogs e links diretos pelo portfolio.
                </StyledP>
              </SectionHeader>

              <AppsGrid>
                {apps.map((app) => (
                  <AppCard key={app.title}>
                    <AppImage src={app.image} alt={app.title} />
                    <AppContent>
                      <div>
                        <ProjectTitle>{app.title}</ProjectTitle>
                        <StyledP>{app.description}</StyledP>
                      </div>
                      <AppMeta>
                        <StatusPill>{app.platform}</StatusPill>
                        <StatusPill>{app.status}</StatusPill>
                      </AppMeta>
                      {app.highlights && (
                        <Tags>
                          {app.highlights.map((item) => (
                            <Tag key={item}>{item}</Tag>
                          ))}
                        </Tags>
                      )}
                      <CardActions>
                        <ButtonLink
                          $variant="primary"
                          $disabled={!app.downloadUrl}
                          href={app.downloadUrl || '#apps'}
                          download={app.downloadFileName || undefined}
                        >
                          Download <FaDownload />
                        </ButtonLink>
                        {app.repository && (
                          <ButtonLink href={app.repository} target="_blank" rel="noopener noreferrer">
                            GitHub <FaExternalLinkAlt />
                          </ButtonLink>
                        )}
                      </CardActions>
                    </AppContent>
                  </AppCard>
                ))}
              </AppsGrid>
            </BandInner>
          </SectionBand>

          <Section id="stack">
            <SectionHeader>
              <SectionEyebrow>Stack</SectionEyebrow>
              <StyledH2>Tecnologias e competências que sustentam minhas entregas.</StyledH2>
            </SectionHeader>
            <SkillGroupsGrid>
              {skillGroups.map((group) => (
                <SkillGroup key={group.title}>
                  <h3>{group.title}</h3>
                  <SkillPills>
                    {group.items.map((item) => (
                      <SkillPill key={item}>{item}</SkillPill>
                    ))}
                  </SkillPills>
                </SkillGroup>
              ))}
            </SkillGroupsGrid>
            <TechGrid>
              {technologies.map((tech) => (
                <TechItem key={tech.name}>
                  <TechImage src={tech.image} alt={tech.name} />
                  <span>{tech.name}</span>
                </TechItem>
              ))}
            </TechGrid>
          </Section>

          <ContactBand id="contato">
            <ContactInner>
              <div>
                <ContactTitle>Vamos transformar processo, ideia ou rotina em produto confiável.</ContactTitle>
                <ContactText>
                  Se você é recrutador, gestor ou precisa criar um app, automatizar processos,
                  evoluir dashboards ou aplicar IA em um fluxo real, estes são os canais mais diretos.
                </ContactText>
              </div>
              <ContactActions>
                <ActionLink $variant="primary" href={profile.whatsapp} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp /> WhatsApp
                </ActionLink>
                <ActionLink href={`mailto:${profile.email}`}>
                  <FaEnvelope /> Email
                </ActionLink>
              </ContactActions>
            </ContactInner>
          </ContactBand>
        </Main>
      </Container>
      <FooterComponent />
    </Layout>
  );
};

export default Home;
