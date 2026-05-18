import profilePhoto from '../Fotos/william-profile.jpg';
import financeImage from '../Fotos/image.png';
import geniuzLogo from '../Fotos/g_niuz_logo.jpeg';
import helpdeskImage from '../Fotos/suporte.jpg';
import jsIcon from '../Fotos/gifJs.gif';
import reactIcon from '../Fotos/GifReact.gif';
import nodeIcon from '../Fotos/GifNode.gif';
import csharpIcon from '../Fotos/gifdoC.gif';
import mongoIcon from '../Fotos/gifMongo.gif';
import mysqlIcon from '../Fotos/Mysql.png';
import electronIcon from '../Fotos/electronimg.png';
import dockerIcon from '../Fotos/Docker.png';
import typescriptIcon from '../Fotos/typescript.png';
import kanbanizeIcon from '../Fotos/kanbanize.png';
import scrumIcon from '../Fotos/scrum.png';
import automationImage from '../Fotos/Fotocapa.png';
import medgrupoAuditImage from '../Fotos/medgrupo-auditoria-ia.svg';

export const profile = {
  name: 'William Oliveira',
  role: 'Desenvolvedor Full Stack',
  headline: 'Desenvolvedor Full Stack | Back-end, APIs, Automações e IA',
  specialty: 'Node.js, TypeScript, React, Electron, dashboards e produtos com IA',
  location: 'Rio de Janeiro, Brasil',
  birthDate: '1998-08-20',
  email: 'william.devbackend@gmail.com',
  secondaryEmail: 'william100william@gmail.com',
  phone: '+55 21 97715-0144',
  whatsapp: 'https://wa.me/5521977150144',
  github: 'https://github.com/WilliamProgramadorBR',
  linkedin: 'https://www.linkedin.com/in/williamdev-fullstack/',
  currentCompany: 'MEDGRUPO',
  currentRole: 'Analista de Controladoria e Planejamento',
  academicLevel: 'Pós-graduando em Inteligência Artificial para Devs',
  degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
  photo: profilePhoto,
};

export const metrics = [
  { value: 'Full Stack', label: 'Node.js, TypeScript, React, Electron, C# e bancos SQL/NoSQL' },
  { value: 'IA aplicada', label: 'pós-graduação em IA para Devs e app próprio com Google Gemini' },
  { value: '3+ anos', label: 'programando soluções em suporte, produto e projetos corporativos' },
];

export const story = [
  'Minha trajetória é de tecnologia desde o começo: suporte técnico, atendimento a usuários, homologação e análise de bugs me deram uma base rara para desenvolver sistemas que resolvem problemas reais. Eu aprendi a programar olhando para regra de negócio, fluxo, impacto e uso diário.',
  'Mesmo quando o cargo mudou para Analista de Controladoria e Planejamento, a programação continuou sendo meu principal diferencial. No MEDGRUPO, desenvolvo scripts, automações, dashboards, auditorias assistidas por IA e integrações com dados para transformar processos manuais em ferramentas mais rápidas, rastreáveis e confiáveis.',
  'Como desenvolvedor full stack e back-end, trabalho com Node.js, TypeScript, C#, React, Electron, MySQL, Docker, Nginx, Socket.io e CI/CD. Hoje estou aprofundando essa base com IA aplicada, pós-graduação em Inteligência Artificial para Devs e produtos próprios como o Rotina AI.',
];

export const education = [
  {
    school: 'Estácio',
    title: 'Pós-graduação Lato Sensu - MBA em Inteligência Artificial para Devs',
    period: 'fevereiro de 2026 - fevereiro de 2027',
    status: 'Em andamento',
    description:
      'Formação focada em uso prático de inteligência artificial no desenvolvimento de produtos, automações e experiências digitais.',
  },
  {
    school: 'Estácio',
    title: 'Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas',
    period: 'janeiro de 2020 - dezembro de 2023',
    status: 'Concluído',
    description:
      'Base acadêmica em lógica, arquitetura de sistemas, desenvolvimento web, bancos de dados e construção de aplicações completas.',
  },
];

export const career = [
  {
    company: 'MEDGRUPO',
    role: 'Analista de Controladoria e Planejamento',
    period: 'novembro de 2025 - atual',
    location: 'Rio de Janeiro, Brasil',
    description:
      'Atuação de tecnologia aplicada dentro de Controladoria e Planejamento: desenvolvo automações, dashboards corporativos, auditorias assistidas por IA, integrações com dados e fluxos de governança para apoiar decisões gerenciais.',
    tags: ['JavaScript', 'Google Apps Script', 'Gemini', 'Dashboards', 'Governança', 'Automação'],
  },
  {
    company: 'GêniuZ',
    role: 'Desenvolvedor Back-end',
    period: 'julho de 2024 - julho de 2025',
    location: 'Rio de Janeiro, Brasil',
    description:
      'Desenvolvimento de servidores, lógica computacional, segurança de acesso, bancos de dados e APIs com foco em performance, escalabilidade e comunicação em tempo real.',
    tags: ['Node.js', 'TypeScript', 'MySQL', 'Docker', 'Nginx', 'Socket.io'],
  },
  {
    company: 'MEDGRUPO',
    role: 'Analista de Suporte Helpdesk',
    period: 'outubro de 2024 - dezembro de 2025',
    location: 'Rio de Janeiro, Brasil',
    description:
      'Análise de cenários envolvendo bugs, regras de negócio e melhorias. Trabalho próximo ao desenvolvimento, gestão de cards no Kanbanize e bots em planilhas Google para acompanhar tratativas.',
    tags: ['Scrum', 'Helpdesk', 'Bots', 'Google Sheets', 'Produto'],
  },
  {
    company: 'MEDGRUPO',
    role: 'Suporte de Helpdesk',
    period: 'agosto de 2023 - outubro de 2024',
    location: 'Rio de Janeiro, Brasil',
    description:
      'Atendimento ao cliente, criação de cards para desenvolvimento, testes em homologação, avaliação de correções e suporte remoto para garantir uma experiência consistente aos usuários.',
    tags: ['Homologação', 'Suporte remoto', 'Cards', 'QA'],
  },
  {
    company: 'MEDGRUPO',
    role: 'Estagiário de TI',
    period: 'agosto de 2022 - agosto de 2023',
    location: 'Rio de Janeiro, Brasil',
    description:
      'Suporte a usuários finais e participação em projeto full stack consumindo APIs, enviando dados do front-end para o back-end e criando recursos com Node.js e C# .NET.',
    tags: ['Node.js', 'C# .NET', 'APIs', 'Full Stack'],
  },
];

export const services = [
  {
    title: 'Back-end e APIs REST',
    description:
      'Arquitetura de servidores, autenticação, rotas privadas, integrações, bancos de dados e regras de negócio com foco em manutenção.',
  },
  {
    title: 'Automações corporativas',
    description:
      'Scripts, bots, planilhas inteligentes, alertas e integrações para reduzir trabalho manual e melhorar a visibilidade de processos.',
  },
  {
    title: 'Produtos web e dashboards',
    description:
      'Interfaces React, páginas profissionais, dashboards gerenciais, auditorias assistidas por IA e experiências responsivas para uso real por times e clientes.',
  },
  {
    title: 'Apps com IA aplicada',
    description:
      'Aplicativos mobile, desktop e web que usam IA para gerar rotinas, recomendações, fluxos inteligentes e experiências personalizadas.',
  },
];

export const technologies = [
  { name: 'JavaScript', image: jsIcon },
  { name: 'TypeScript', image: typescriptIcon },
  { name: 'React', image: reactIcon },
  { name: 'Node.js', image: nodeIcon },
  { name: 'C#', image: csharpIcon },
  { name: 'MongoDB', image: mongoIcon },
  { name: 'MySQL', image: mysqlIcon },
  { name: 'Electron', image: electronIcon },
  { name: 'Docker', image: dockerIcon },
  { name: 'Scrum', image: scrumIcon },
  { name: 'Kanbanize', image: kanbanizeIcon },
];

export const skillGroups = [
  {
    title: 'Back-end',
    items: ['Node.js', 'TypeScript', 'Fastify', 'Prisma', 'JWT', 'bcrypt', 'MySQL/MariaDB', 'SQLite'],
  },
  {
    title: 'Front-end e apps',
    items: ['React', 'React Native', 'Expo', 'Expo Router', 'Electron', 'Styled Components', 'Zod', 'Axios'],
  },
  {
    title: 'IA e automação',
    items: ['Google Gemini', 'Google Apps Script', 'Google Sheets', 'Prompt engineering', 'Bots', 'Dashboards', 'Blip', 'Freshdesk'],
  },
  {
    title: 'Produto, dados e operação',
    items: ['Governança', 'Controladoria', 'Homologação', 'Suporte técnico', 'Scrum', 'Kanban', 'Documentação', 'CI/CD'],
  },
];

export const projects = [
  {
    id: 5,
    title: 'Auditoria IA MEDGRUPO',
    eyebrow: 'IA, dados e governança',
    summary:
      'Dashboard corporativo para monitoria de atendimento, qualidade operacional e validação humana assistida por IA.',
    impact:
      'Projeto realizado como Analista de Controladoria e Planejamento, combinando Gemini, Google Apps Script, Sheets, front-end web e regras de governança para priorizar riscos, NCGs e melhorias.',
    stack: ['Gemini API', 'Google Apps Script', 'Google Sheets', 'JavaScript', 'BI', 'Governança'],
    image: medgrupoAuditImage,
    route: '/projeto/5',
    repository: null,
    caseUrl: `${process.env.PUBLIC_URL}/downloads/Auditoria_IA_MEDGRUPO_Case_Portfolio_William_Oliveira.pdf`,
  },
  {
    id: 4,
    title: 'Rotina AI',
    eyebrow: 'IA e produtividade',
    summary:
      'Assistente pessoal inteligente para criar rotinas com IA, acompanhar progresso, usar modo foco e colaborar em grupo.',
    impact:
      'Produto autoral v3.0.0 com React Native, Expo, Fastify, Prisma, MySQL/MariaDB, Google Gemini, alarmes inteligentes e widget Android.',
    stack: ['React Native', 'Expo', 'TypeScript', 'Fastify', 'Prisma', 'Google Gemini'],
    image: automationImage,
    route: '/projeto/4',
    repository: profile.github,
  },
  {
    id: 1,
    title: 'Plataforma GêniuZ',
    eyebrow: 'Edtech',
    summary:
      'Plataforma de estudos online com foco em interação entre alunos, docentes e professores.',
    impact:
      'Atuação como desenvolvedor back-end, definindo arquitetura, segurança, rotas privadas, autenticação, bancos de dados e documentação do servidor.',
    stack: ['Node.js', 'TypeScript', 'MySQL', 'Docker', 'Nginx', 'Socket.io'],
    image: geniuzLogo,
    route: '/projeto/1',
    repository: null,
  },
  {
    id: 2,
    title: 'Aplicativo de finanças',
    eyebrow: 'App desktop',
    summary:
      'Gerenciador financeiro criado para acompanhar gastos, ganhos e rotina de freelancers com gráficos e usabilidade direta.',
    impact:
      'Produto feito com Electron e Node.js, explorando empacotamento desktop, Docker, Jenkins e interface responsiva.',
    stack: ['Electron', 'Node.js', 'JavaScript', 'Docker', 'Jenkins'],
    image: financeImage,
    route: '/projeto/2',
    repository: 'https://github.com/WilliamProgramadorBR/Gerenciador-financeiro',
  },
  {
    id: 3,
    title: 'HelpDesk e automações internas',
    eyebrow: 'Operações',
    summary:
      'Experiência em atendimento técnico, homologação de apps, melhoria de fluxos e ponte com equipes de desenvolvimento.',
    impact:
      'Criação de cards, testes em homologação, suporte remoto e bots para acompanhar tratativas importantes em planilhas e Kanbanize.',
    stack: ['C#', 'Node.js', 'MongoDB', 'Kanbanize', 'Scrum'],
    image: helpdeskImage,
    route: '/projeto/3',
    repository: 'https://github.com/Rennan-Pessanha/Site-Helpdesk',
  },
];

export const rotinaAi = {
  title: 'Rotina AI',
  version: '3.0.0',
  date: '17 de maio de 2026',
  platforms: 'Android, iOS e Web',
  packageName: 'com.williamdevbackend.rotinaai',
  scheme: 'rotinaai://',
  owner: 'williamdevbackend',
  tagline: 'Seu assistente pessoal inteligente de rotinas',
  promise:
    'O Rotina AI monta, ajusta e acompanha sua rotina com inteligência artificial, alarmes inteligentes, modo foco e colaboração em grupo.',
  quote:
    'Não é só um lembrete. É um assistente que entende sua rotina e te ajuda a cumprir seus objetivos de verdade.',
  audience: ['Estudantes', 'Profissionais', 'Atletas', 'Famílias', 'Concurseiros', 'Sono e hábitos'],
  features: [
    {
      title: 'Rotina gerada por IA',
      description:
        'O usuário responde perguntas sobre horários, trabalho e objetivos; o Google Gemini monta uma rotina personalizada em segundos.',
    },
    {
      title: 'Alarmes por urgência',
      description:
        'Quatro níveis de alarme: leve, rotina, importante e crítico, com comportamento diferente para cada compromisso.',
    },
    {
      title: 'Modo foco Pomodoro',
      description:
        'Timer de foco com opção de 25 minutos ou tempo livre, registro de conclusão e menos distrações entre tarefas.',
    },
    {
      title: 'Reagendamento inteligente',
      description:
        'Quando uma atividade atrasa, a IA analisa o restante do dia e sugere um horário alternativo.',
    },
    {
      title: 'Colaboração em grupo',
      description:
        'Grupos com chat integrado, membros, atribuição de atividades e rotinas compartilhadas para família ou equipes.',
    },
    {
      title: 'Revisão semanal',
      description:
        'Resumo visual com taxa de conclusão, melhor dia, gráfico de evolução e insights para a próxima semana.',
    },
  ],
  stack: [
    'React Native',
    'Expo',
    'Expo Router',
    'TypeScript',
    'Fastify',
    'Prisma',
    'MySQL/MariaDB',
    'Google Gemini',
    'Ollama',
    'JWT',
    'bcrypt',
    'Expo Notifications',
  ],
  screens: [
    '/meu-dia',
    '/foco',
    '/onboarding',
    '/templates',
    '/weekly-review',
    '/collaboration/[id]',
    '/reminders/new',
  ],
};

export const apps = [
  {
    title: 'Rotina AI',
    platform: 'Android APK · iOS · Web',
    status: 'v3.0.0 disponivel em ZIP',
    description:
      'Assistente pessoal inteligente que gera rotinas com IA, organiza o dia, acompanha progresso, dispara alarmes por urgência e ajuda a manter foco.',
    image: automationImage,
    downloadUrl: `${process.env.PUBLIC_URL}/downloads/RotinaAI-v3.0.0.zip`,
    downloadFileName: 'RotinaAI-v3.0.0.zip',
    repository: profile.github,
    highlights: ['Google Gemini', 'Alarmes inteligentes', 'Modo foco', 'Grupos com chat'],
  },
  {
    title: 'Gerenciador financeiro',
    platform: 'Windows, Linux e macOS',
    status: 'Build em preparação',
    description:
      'App gratuito para organizar ganhos e despesas. O repositório já está disponível e a área de downloads está preparada para receber builds públicos.',
    image: financeImage,
    downloadUrl: null,
    repository: 'https://github.com/WilliamProgramadorBR/Gerenciador-financeiro',
    highlights: ['Electron', 'Node.js', 'Finanças pessoais'],
  },
  {
    title: 'Próximos apps gratuitos',
    platform: 'Mobile e desktop',
    status: 'Roadmap aberto',
    description:
      'Espaço reservado para novos aplicativos, versões, changelogs e links de download hospedados pelo próprio site.',
    image: electronIcon,
    downloadUrl: null,
    repository: profile.github,
    highlights: ['Downloads oficiais', 'Changelogs', 'Firebase Hosting'],
  },
];
