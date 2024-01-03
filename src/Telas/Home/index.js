import React, { useState, useEffect } from 'react';
import { CurriculoContainer, Titulo, BotoesContainer, BotaoNavegacao1, BotaoNavegacao2, FotoRedonda, TextoContainer, theme, GlobalStyles, FooterContainer, ThemeToggle, ButtonContainer, Paragrafo, LinkedInLink, TwoColumnContainer, Column, StyledDiv } from './HomeStyles';
import suaFoto from '../../Fotos/1694574063587.jpg';import solgif from '../../Fotos/solgif.gif'; import luagif from '../../Fotos/luagif.gif';import setadireita from '../../Fotos/proximodireito.gif';
import { ThemeProvider } from 'styled-components';
import Layout from '../../Componentes/menu-lateral/Layout';
import TecnologiaChart from '../../Componentes/grafico/TecnologiaChart';

const MeuCurriculo = () => {
  const [conteudoAtual, setConteudoAtual] = useState(1);
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
 
  const [mostrarAlerta, setMostrarAlerta] = useState(true);

  useEffect(() => {
    if (mostrarAlerta) {
      alert("Esta página ainda está em desenvolvimento. Peço desculpas por eventuais bugs. Vale ressaltar que meu foco principal é no desenvolvimento backend, e por isso a parte de estilização no frontend pode apresentar algumas dificuldades. Agradeço pela compreensão!");

    }
  }, [mostrarAlerta]);
  const conteudos = [
    (
      <StyledDiv>

        <TwoColumnContainer>
        <Column>
        <TextoContainer>
          <h2>Educação 👨🏾‍💻</h2>
          <Paragrafo>Sou formado na instituição Estácio de Sá, o ano da minha conclusão foi em 2023.</Paragrafo>
           <Paragrafo>Formado em Analise e desenvolvemento de sistemas, senti a necessidade de buscar novos conhecimentos, logo entrei na Udemy
            para fazer alguns cursos de aperfeiçoamentos, gosto de desenvolver utilizando todos os recursos disponível na linguagem, claro que
            tenho muito para evoluir, mas com o habito de sempre está consultando a documentação, me sinto preparado para desafios maiores na minha carreira de fullstack.
           </Paragrafo>
          <Paragrafo>Quero continuar meus estudos, meu sonho é consegui mestrado nas áreas de tecnologias, sempre colocando em mente que a prática leva a perfeição</Paragrafo>
        </TextoContainer>
        </Column>
        </TwoColumnContainer>
      </StyledDiv>
    ),
    (
      <StyledDiv>
        <TwoColumnContainer>
        <Column>
        <TextoContainer>
          <h2>Experiência Profissional</h2>
          <Paragrafo>(<strong>ESTÁGIARIO HELPDESK</strong>)Buscando áreas mais próximas ao setor de desenvolvimento, a empresa MEDGRUPO abriu as suas portas. Logo não recursei a oportunidade de fazer parte de uma grande equipe, de HelpDesk, atuando em atendimentos diretos aos clientes(Alunos de medicina) o objetivo era lidar com dúvidas, sugestões e até bugs que podiam impactar nos estudos dos alunos. Sempre buscando a excelência, no setor aprendi sobre como funciona a RAD de um App em prática, fazendo testes em homologação e produção, testando diversos cenários e reportando erros para os Devs. Fiquei muito empolgado de ver os anos de estudo em prática, logo percebi que o mundo da tecnologia é vasto e tinha muito que aprender.</Paragrafo>
    
          <Paragrafo>No MEDGRUPO, desenvolvi, junto com um grupo de colegas do meu setor, um sistema de registro de atendimentos. O sistema conseguia buscar scripts de atendimento para auxiliar na comunicação com o usuário final e também apresentava gráficos em tempo real. Esse projeto foi desenvolvido para colocar em prática o trabalho em equipe, aprendi a utilizar o GitHub e a trabalhar com MongoDB e MySQL, sendo o projeto que me fez apaixonar por JavaScript. ❤️‍🔥</Paragrafo>
          <Paragrafo>Agora procuro colocar em prática todo o meu conhecimento. Sei desenvolver back-ends complexos em Node.js e também atuar no front-end. Confesso que o front-end não é a minha especialidade, mas posso encarar um CSS. 😎</Paragrafo>
          <Paragrafo>Minha especialidade é o desenvolvimento back-end. Sei criar rotas seguras, trabalhar com middlewares, desenvolver APIs complexas com diversas verificações e utilizar métodos assíncronos, cobrindo grande parte das lógicas necessárias para o funcionamento de um back-end.</Paragrafo>
          <Paragrafo>Atuando com atendimentos diretos, consegui aprimorar também meus conhecimentos em planilhas, logo pensei em unificar javascript utilizando a planilha como um banco de dados, foi uma ótima ideia. Com esses conhecimentos unificados, consegui criar planilhas inteligentes que conseguiam enviar e-mails em massas para outros colaboradores, notificando sobre tratativas e demais informações necessárias para atuação no setor.</Paragrafo>
          
        </TextoContainer>
        </Column>
        </TwoColumnContainer>
      </StyledDiv>
    ),
    (
      <StyledDiv>
        <TwoColumnContainer>
          <Column>
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
            <li>Criação de planilhas de dados inteligentes utilizando o Google planilhas, AppsScript, etc. 
            </li>
            <br></br>
            <li>comunicação e resolução de problemas com o usuário final, técnica que desenvolvi ao atuar por mais de um ano interagindo com os alunos de medicina.
            </li>
          </ul>
        </TextoContainer>
        </Column>
        </TwoColumnContainer>
      </StyledDiv>
    ),
    (
      <StyledDiv>
        <TwoColumnContainer>
        <Column>
        <TextoContainer>
          <h2>Meu contato 📱🤙🏿</h2>
          <Paragrafo>william100william@gmail.com</Paragrafo>
          <Paragrafo>Numero celular: 21981695297</Paragrafo>
          <Paragrafo>Caso se algumas das apis abaixos não funcione do jeito correto, essas informações não poderiam faltar, né. 🤗 </Paragrafo>
        </TextoContainer>
        </Column>
        </TwoColumnContainer>
      </StyledDiv>
      
    ),(<StyledDiv>
      <TwoColumnContainer>
        <Column>
      <TextoContainer>
        <h2>Um pouco sobre mim: 💪🏿😉</h2>
        <Paragrafo>Nascido na cidade do Rio de janeiro, criado na bahia de sepetiba, meu sonho desde novo era ser jogador de futebol, talvez mais porque meu pai queria que eu fosse haha!
        <br></br>
        <br></br>Desde novo, sempre fui apaixonado por tecnlogia meu sonho era ter um computador e entender como ele funcionava, logo a primeira habilidade adquirida com tecnologia, foi montagem e manutenção.
        Dando continuidade, terminei o ensino médio e fiquei pensando em que eu queria ser no ramo profissional, algo que não me faria perde a essencia, logo surgiu a oportunidade de cursar analise desenvolvimento de sistemas,logo me apaixonei pela parte lógica da computação, hoje em dia sonho em se formar em mestre da computação, gosto de atuar tanto na área de desenvolvimento e também na parte fisíca, resumindo, no corpo e na mente da tecnologia❤️‍🔥 
        </Paragrafo>
        <Paragrafo>Quero agradecer a todos que dedicaram seu tempo, lendo o conteúdo desse simples site. Espero encontra-los vocês por ai, um abraço e permaneço a disposição</Paragrafo>
        
      </TextoContainer>
      </Column>
      </TwoColumnContainer>
    </StyledDiv>)
  ];
 
    const dadosTecnologia = [
      { nome: 'Node.js', percentual: 30 },
      { nome: 'Express.js', percentual: 25 },
      { nome: 'MongoDB', percentual: 20 },
      // Adicione mais dados conforme necessário
    ]
  

  const handleProximo = () => {
    setConteudoAtual((prev) => (prev < conteudos.length - 1 ? prev + 1 : prev));
  };

  const handleAnterior = () => {
    setConteudoAtual((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNomeClick = () => {
    window.open('https://www.linkedin.com/in/william-oliveira-2b944417a/', '_blank');
  };
  

  return (
    <Layout>
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


      <Titulo onClick={handleNomeClick}>William Oliveira</Titulo>
   
        <FotoRedonda src={suaFoto} alt="Sua Foto" />
        <BotoesContainer>
          <BotaoNavegacao1 onClick={handleAnterior}>⬅️ Anterior  </BotaoNavegacao1>
          <BotaoNavegacao2 onClick={handleProximo} disabled={conteudoAtual === conteudos.length - 1}>Próximo ➡️</BotaoNavegacao2>
        </BotoesContainer>
        {conteudos[conteudoAtual]}
        
        
      </CurriculoContainer>
      <FooterContainer>
        {/* Adicione conteúdo ao seu rodapé conforme necessário */}
      </FooterContainer>
    </ThemeProvider>
    </Layout>
  );
};

export default MeuCurriculo;
