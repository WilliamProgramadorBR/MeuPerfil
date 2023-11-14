import React, { useState } from 'react';
import { CurriculoContainer, Titulo, BotoesContainer, BotaoNavegacao1, BotaoNavegacao2, FotoRedonda, TextoContainer, theme, GlobalStyles, FooterContainer, ThemeToggle, ButtonContainer } from './HomeStyles';
import suaFoto from '../../Fotos/1694574063587.jpeg';import solgif from '../../Fotos/solgif.gif'; import luagif from '../../Fotos/luagif.gif';
import { ThemeProvider } from 'styled-components';

const MeuCurriculo = () => {
  const [conteudoAtual, setConteudoAtual] = useState(1);
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const conteudos = [
    (
      <div>
        <TextoContainer>
          <h2>Educação 👨🏾‍💻</h2>
          <p>Sou formado na instituição Estácio de Sá, o ano da minha conclusão foi em 2023.</p>
           <p>Formado em Analise e desenvolvemento de sistemas, senti a necessidade de buscar novos conhecimentos, logo entrei na Udemy
            para fazer alguns cursos de aperfeiçoamentos, gosto de desenvolver utilizando todos os recursos disponível na linguagem, claro que
            tenho muito para evoluir, mas com o habito de sempre está consultando a documentação, me sinto preparado para desafios maiores na minha carreira de fullstack.
           </p>
          <p>Quero continuar meus estudos, meu sonho é consegui mestrado nas áreas de tecnologias, sempre colocando em mente que a prática leva a perfeição</p>
        </TextoContainer>
      </div>
    ),
    (
      <div>
        <TextoContainer>
          <h2>Experiência Profissional</h2>
          <p>(<strong>ESTÁGIARIO HELPDESK</strong>)Buscando áreas mais próximas ao setor de desenvolvimento, a empresa MEDGRUPO abriu as suas portas. Logo não recursei a oportunidade de fazer parte de uma grande equipe, de HelpDesk, atuando em atendimentos diretos aos clientes(Alunos de medicina) o objetivo era lidar com dúvidas, sugestões e até bugs que podiam impactar nos estudos dos alunos. Sempre buscando a excelência, no setor aprendi sobre como funciona a RAD de um App em prática, fazendo testes em homologação e produção, testando diversos cenários e reportando erros para os Devs. Fiquei muito empolgado de ver os anos de estudo em prática, logo percebi que o mundo da tecnologia é vasto e tinha muito que aprender.</p>
    
          <p>No MEDGRUPO, desenvolvi, junto com um grupo de colegas do meu setor, um sistema de registro de atendimentos. O sistema conseguia buscar scripts de atendimento para auxiliar na comunicação com o usuário final e também apresentava gráficos em tempo real. Esse projeto foi desenvolvido para colocar em prática o trabalho em equipe, aprendi a utilizar o GitHub e a trabalhar com MongoDB e MySQL, sendo o projeto que me fez apaixonar por JavaScript. ❤️‍🔥</p>
          <p>Agora procuro colocar em prática todo o meu conhecimento. Sei desenvolver back-ends complexos em Node.js e também atuar no front-end. Confesso que o front-end não é a minha especialidade, mas posso encarar um CSS. 😎</p>
          <p>Minha especialidade é o desenvolvimento back-end. Sei criar rotas seguras, trabalhar com middlewares, desenvolver APIs complexas com diversas verificações e utilizar métodos assíncronos, cobrindo grande parte das lógicas necessárias para o funcionamento de um back-end.</p>
          <p>Atuando com atendimentos diretos, consegui aprimorar também meus conhecimentos em planilhas, logo pensei em unificar javascript utilizando a planilha como um banco de dados, foi uma ótima ideia. Com esses conhecimentos unificados, consegui criar planilhas inteligentes que conseguiam enviar e-mails em massas para outros colaboradores, notificando sobre tratativas e demais informações necessárias para atuação no setor.</p>
          
        </TextoContainer>
      </div>
    ),
    (
      <div>
        <TextoContainer>
          <h2>Minhas habilidades😉</h2>
          <ul>
            <li>Nodejs, Typescript (Javascript)</li>
            <br></br>
            <li>Angularjs, Dashb em (Javascripts)</li>
            <br></br>
            <li>Montagem e manutenção de computadores</li>
            <br></br>
            <li>Criação de apis utilizando Node.js</li>
            <br></br>
            <li>MySql, Sqlserver, Mongodb</li>
            <br></br>
            <li>Criaçaõ de planilhas de dados inteligentes utilizando o Google planilhas, AppsScript, etc. 
            </li>
            <br></br>
            <li>comunicação e resolução de problemas com o usuário final, técnica que desenvolvi ao atuar por mais de um ano interagindo com os alunos de medicina.
            </li>
          </ul>
        </TextoContainer>
      </div>
    ),
    (
      <div>
        <TextoContainer>
          <h2>Meu contato 📱😉</h2>
          <p>william100william@gmail.com</p>
          <p>Numero celular: 21981695297</p>
          <p>Caso se algumas das apis abaixos não funcione do jeito correto, essas informações não poderiam faltar, né. 🤗 </p>
        </TextoContainer>
      </div>
      
    ),(<div>
      <TextoContainer>
        <h2>Um pouco sobre mim: 💪🏿😉</h2>
        <p>Nascido na cidade do Rio de janeiro, criado na bahia de sepetiba, meu sonho desde novo era ser jogador de futebol, talvez mais porque meu pai queria que eu fosse haha!
          <br></br>
          Desde novo, sempre fui apaixonado por tecnlogia meu sonho era ter um computador e entender como ele funcionava, logo a primeira habilidade adquirida com tecnologia, foi montagem e manutenção.<br></br>
          Dando continuidade, terminei o ensino médio e fiquei pensando em que eu queria ser no ramo Profissional, algo que não me faria perde a essencia, logo surgiu a oportunidade de cursar analise desenvolvimento de sistemas e me apaixonei pela parte lógica da computação, hoje em dia sonho em se formar em mestre da computação, gosto de atuar tanto na área de desenvolvimento e também na parte fisíca, resumindo, no corpo e na mente da tecnologia❤️‍🔥 
        </p>
        <p>Quero agradecer a todos que dedicaram seu tempo, lendo o conteúdo desse simples site. Espero encontra-los vocês por ai, um abraço e permaneço a disposição</p>
        
      </TextoContainer>
    </div>)
  ];

  const handleProximo = () => {
    setConteudoAtual((prev) => (prev < conteudos.length - 1 ? prev + 1 : prev));
  };

  const handleAnterior = () => {
    setConteudoAtual((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyles />
      <CurriculoContainer>
      <ButtonContainer><button onClick={toggleTheme}>
  <img
     src={currentTheme === 'light' ? solgif : luagif}
     alt={currentTheme === 'light' ? 'Alternar para Modo Escuro' : 'Alternar para Modo Claro'}
    style={{ width: '30px', height: '30px' }} // Ajuste o tamanho conforme necessário
  /></button>
</ButtonContainer>

        <Titulo> William Oliveira</Titulo>
        <FotoRedonda src={suaFoto} alt="Sua Foto" />
        <BotoesContainer>
          <BotaoNavegacao1 onClick={handleAnterior}>Anterior  👈🏾</BotaoNavegacao1>
          <BotaoNavegacao2 onClick={handleProximo}>Próximo 👉🏾</BotaoNavegacao2>
        </BotoesContainer>
        {conteudos[conteudoAtual]}
      </CurriculoContainer>
      <FooterContainer>
        {/* Adicione conteúdo ao seu rodapé conforme necessário */}
      </FooterContainer>
    </ThemeProvider>
  );
};

export default MeuCurriculo;
