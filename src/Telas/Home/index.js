import React, { useState, useEffect, useRef } from 'react';
import { CurriculoContainer,StyledImage,StyledCImage,StyledJsImage,StyledMongoImage,StyledMysqlImage,StyledReactImage, Titulo,StyledTexto, BotoesContainer, BotaoNavegacao1, BotaoNavegacao2, FotoRedonda, TextoContainer, theme, FooterContainer, ThemeToggle, ButtonContainer, Paragrafo, LinkedInLink, TwoColumnContainer, Column, StyledDiv, StyledSelect, StyledOption } from './HomeStyles';
import suaFoto from '../../Fotos/1694574063587.jpg';import apontando from '../../Fotos/apontando.gif'; import Js from '../../Fotos/gifJs.gif'; import Reactgif from '../../Fotos/GifReact.gif'; import C from '../../Fotos/gifdoC.gif'; import mongo from '../../Fotos/gifMongo.gif'; import mysql from '../../Fotos/Mysql.png'; 

import Layout from '../../Componentes/menu-lateral/Layout';
import {GlobalStyles} from'./../../Componentes/mododarkin/StyledWebsite'


const MeuCurriculo = () => {
  
  const handleProximo = () => {
    setConteudoAtual((prev) => (prev < conteudos.length - 1 ? prev + 1 : prev));
  };

  const handleAnterior = () => {
    setConteudoAtual((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNomeClick = () => {
    window.open('https://www.linkedin.com/in/william-oliveira-2b944417a/', '_blank');
  };
  
  const [conteudoAtual, setConteudoAtual] = useState(0);
// Parte de educação abaixo
const [mostrarEducacao, setMostrarEducacao] = useState(false);
const [mostrarNovoTexto, setMostrarNovoTexto] = useState(false); // Option Educação
const [mostrarCursoBackend, setMostraBackend] = useState(false);

//Parte de mostrar experiencia
  const [mostrarExperiencia, setMostrarExperiencia] = useState(false);
  const [mostrarExperienciaEstagio, setMostrarExperienciaEstagio] = useState(false);
  const [mostrarExperienciaFree, setMostrarExperienciaFree] = useState(false);
  
  //Parte de habilidades
  const [mostrarHabilidades, setMostrarHabilidades] = useState(false);
  
  const [mostrarReact, setMostrarReact] = useState(false);
  const [mostrarMySql, setMostrarMySql] = useState(false);
  const [mostrarCsharp, setMostrarCsharp] = useState(false);
  const [mostrarInfrastructure, setMostrarInfrastructure] = useState(false);

  // Contatos
  const [mostrarContato, setMostrarContato] = useState(false);
  const [mostrarSobreMim, setMostrarSobreMim] = useState(false);
  
  const emailContato = 'william100william@gmail.com'; // Armazena o email em uma variável
  const textoContatoRef = useRef(null);


  const handleMostrarEducacao = (event) => {
    const valorSelecionado = event.target.value;
  
    // Atualize o estado com base no valor selecionado
    switch (valorSelecionado) {
      case 'mostrar':
        setMostrarEducacao(true);
        setMostrarNovoTexto(false);
        setMostraBackend(false);
        
        
        break;
      case 'CursoReact':
        setMostrarEducacao(false);
        setMostrarNovoTexto(true);
        setMostraBackend(false);
        
        break;
        case 'CursoBackend':
          setMostrarEducacao(false);
          setMostrarNovoTexto(false);
          setMostraBackend(true);
          
          break;
         
      default:
        setMostrarEducacao(false);
        setMostrarNovoTexto(false);
        setMostraBackend(false);
       
    }
  };
  
  const handleMostrarExperiencia = (event) => {
    const valorSelecionado = event.target.value;
    switch (valorSelecionado){
      case 'mostrar':
      setMostrarExperiencia(true);
      setMostrarExperienciaEstagio(false);
      setMostrarExperienciaFree(false);
      break;
      case 'estagio':
        setMostrarExperiencia(false);
      setMostrarExperienciaEstagio(true);
      setMostrarExperienciaFree(false);
      break;
      case 'free':
        setMostrarExperiencia(false);
        setMostrarExperienciaEstagio(false);
        setMostrarExperienciaFree(true);
        break;
        default: 
        setMostrarExperiencia(false);
        setMostrarExperienciaEstagio(false);
        setMostrarExperienciaFree(false);

    }
  }

  const handleMostrarHabilidades = (event) => {
    const valorSelecionado = event.target.value;
    switch (valorSelecionado){
      case 'node':
      setMostrarHabilidades(true);
      setMostrarReact(false);
      setMostrarMySql(false);
      setMostrarInfrastructure(false);
      setMostrarCsharp(false); 
      break;
      case 'react':
      setMostrarHabilidades(false);
      setMostrarReact(true);
      setMostrarMySql(false);
      setMostrarInfrastructure(false);
      setMostrarCsharp(false); 
      break;
      case 'sql':
      setMostrarHabilidades(false);
      setMostrarReact(false);
      setMostrarMySql(true);
      setMostrarInfrastructure(false);
      setMostrarCsharp(false); 
      break;
      case 'infra':
      setMostrarHabilidades(false);
      setMostrarReact(false);
      setMostrarMySql(false);
      setMostrarInfrastructure(true);
      setMostrarCsharp(false); 
      break;
      case 'C':
      setMostrarHabilidades(false);
      setMostrarReact(false);
      setMostrarMySql(false);
      setMostrarInfrastructure(false);
      setMostrarCsharp(true); 
      break;
      

      default:
      setMostrarHabilidades(false);
      setMostrarReact(false);
      setMostrarMySql(false);
      setMostraBackend(false);
      setMostrarInfrastructure(false);
      setMostrarCsharp(false); 
      
    }
  };


  const handleMostrarContato = (event) => {
    const valorSelecionado = event.target.value;
    switch (valorSelecionado){
      case 'seleciona':
        setMostrarContato(true);
        break;
        default:
          setMostrarContato(false);
    }}

  const handleMostrarSobreMim = () => {
    setMostrarSobreMim(!mostrarSobreMim);
  };
  const handleCopiarTexto = () => {
    const textoContato = textoContatoRef.current.textContent;

    // Criar um elemento de área de texto temporário
    const textarea = document.createElement('textarea');
    textarea.value = textoContato;

   
    document.body.appendChild(textarea);


    textarea.select();
    document.execCommand('copy');

 
    document.body.removeChild(textarea);

    
    alert('O email foi copiado para sua área de transferencia');
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
              <StyledSelect onChange={handleMostrarEducacao} >
                <StyledOption value="Clique aqui ">Clique aqui</StyledOption>
                <StyledOption value="mostrar">Meu ensino superior</StyledOption>
                <StyledOption value="CursoReact">Curso de React</StyledOption>
                <StyledOption value="CursoBackend">Cursos back-end</StyledOption>

              </StyledSelect>
              {mostrarEducacao && (
                <>
                  <Paragrafo>Sou formado na instituição Estácio de Sá, o ano da minha conclusão foi em 2023.</Paragrafo>
                  <Paragrafo>Formado em Analise e desenvolvimento de sistemas, senti a necessidade de buscar novos conhecimentos, logo entrei na Udemy para fazer alguns cursos de aperfeiçoamentos...</Paragrafo>
                  <Paragrafo>Quero continuar meus estudos, meu sonho é conseguir mestrado nas áreas de tecnologias, sempre colocando em mente que a prática leva a perfeição</Paragrafo>
                </>
              )}{mostrarNovoTexto && (
                <>
                  <Paragrafo>Sou formado em dois cursos focados no desenvolvimento front-end, embora na faculdade tenha visto bastante sobre front-end até em linguagem focadas no back-end, senti a necessidade de aprimorar minhas técnicas na camada de aplicação assim aprendi a atuar com componentes, Frameworks e bibliotecas que utilizam tanto JavaScript e Typescript. </Paragrafo>
                </>
              )}{mostrarCursoBackend &&(
                <>
                <Paragrafo>Focado na minha especialidade, realizei cursos e estudos voltados para o back-end. Durante esse período, aprendi a lidar com bancos de dados, realizar conversões de formatos de arquivos e trabalhar com diversas bibliotecas do ecossistema Node.js. Desenvolvi habilidades em linguagens como C# e Typescript, escolhidas pela sua forte tipagem. Além disso, adquiri experiência na implementação de pool de conexões, o que possibilita a redução de custos financeiros ao manter conexões abertas e encerrá-las no momento adequado. </Paragrafo>
                </>
              )

              }
            
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
              <h2><strong>Experiência Medgrupo</strong> 👨🏾‍💻</h2>
              <StyledSelect onChange={handleMostrarExperiencia}>
                <StyledOption value="Clique para ler o texto">Clique aqui</StyledOption>
                <StyledOption value="mostrar">Atendente HelpDesk</StyledOption>
                <StyledOption value="estagio">Estagio</StyledOption>
                <StyledOption value="free">Freelancers</StyledOption>
              </StyledSelect>
              {mostrarExperiencia && (
                <>
                <Paragrafo>Com bons conhecimentos e comportamento, fui promovido no setor e passei a ser efetivo</Paragrafo>
                 <Paragrafo>Atuo no suporte técnico e help desk, para
                  proporcionar um atendimento direto ao cliente
                  para entender suas dificuldades em relação às
                  tecnologias da empresa. Minhas
                  responsabilidades incluem a criação de cards
                  para a equipe de desenvolvimento, testar
                  aplicativos em ambiente de homologação antes
                  do lançamento em produção, avaliar o software
                  e suas correções de bugs, além de oferecer
                  suporte remoto para solucionar problemas e
                  desafios dos clientes</Paragrafo>
                
                </>
              )}{ mostrarExperienciaEstagio &&(<>
              <Paragrafo>(<strong>ESTÁGIARIO HELPDESK</strong>) No MEDGRUPO, desenvolvi, junto com um grupo de colegas do meu setor, um sistema de registro de atendimentos. O sistema conseguia buscar scripts de atendimento para auxiliar na comunicação com o usuário final e também apresentava gráficos em tempo real. Esse projeto foi desenvolvido para colocar em prática o trabalho em equipe, aprendi a utilizar o GitHub e a trabalhar com MongoDB e MySQL, sendo o projeto que me fez apaixonar por JavaScript. ❤️‍🔥</Paragrafo>
               <Paragrafo> Buscando áreas mais próximas ao setor de desenvolvimento, a empresa MEDGRUPO abriu as suas portas. Logo não recusei a oportunidade de fazer parte de uma grande equipe, de HelpDesk, atuando em atendimentos diretos aos clientes (Alunos de medicina) o objetivo era lidar com dúvidas, sugestões e até bugs que podiam impactar nos estudos dos alunos. Sempre buscando a excelência, no setor aprendi sobre como funciona a RAD de um App em prática, fazendo testes em homologação e produção, testando diversos cenários e reportando erros para os Devs. Fiquei muito empolgado de ver os anos de estudo em prática, logo percebi que o mundo da tecnologia é vasto e tinha muito que aprender.</Paragrafo>
              </>)}{ mostrarExperienciaFree &&(<>
                <Paragrafo>
  Durante minha trajetória profissional, tive a oportunidade de contribuir significativamente em dois projetos de freelancers, onde desempenhei o papel de desenvolvedor Fullstack.</Paragrafo>
  <Paragrafo>No primeiro projeto, trabalhei na criação de um sistema de estágio, utilizando tecnologias como Node.js para o desenvolvimento do backend e MySQL como banco de dados. Minha responsabilidade abrangeu desde a concepção das funcionalidades até a implementação efetiva, garantindo um sistema robusto e eficiente.</Paragrafo>
  
  <Paragrafo>No segundo projeto, participei do desenvolvimento de uma central de empregos. Utilizei novamente Node.js para construir o backend, escolhendo o MySQL para gerenciar os dados do sistema. Na camada frontend, empreguei React para criar uma interface moderna e responsiva, proporcionando uma experiência de usuário aprimorada.</Paragrafo>
  
  <Paragrafo>Essas experiências me permitiram aprimorar minhas habilidades em ambientes Fullstack, abrangendo tanto o desenvolvimento do lado do servidor quanto do cliente. Trabalhar com tecnologias como Node.js e React não apenas ampliou meu conhecimento, mas também me permitiu enfrentar desafios complexos e entregar soluções de alta qualidade para os clientes. Estou entusiasmado em continuar contribuindo para projetos desafiadores e dinâmicos.
</Paragrafo>

              </>)}
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
              <StyledSelect onChange={handleMostrarHabilidades}>
              <StyledOption value="Mostrar"> Clique aqui</StyledOption>
                <StyledOption value="node">habilidade Node</StyledOption>
                <StyledOption value="react">habilidade React</StyledOption>
                <StyledOption value="sql">Habilidade banco de dados</StyledOption>
                <StyledOption value="infra">Habilidade infraestrutura</StyledOption>
                <StyledOption value="C">Habilidade C#</StyledOption>
                
              </StyledSelect>
              {mostrarHabilidades && (
                <>
                 <ul>
  <li>
    Desenvolvimento backend com Node.js e Typescript, proporcionando um ambiente mais seguro e tipado para a aplicação.
  </li>
  <br></br>
  <li>
    Criação de APIs robustas usando Express.js, aproveitando seu poder e flexibilidade para facilitar o desenvolvimento de serviços web eficientes.
  </li>
  <br></br>
  <li>
    Implementação de autenticação segura utilizando middlewares para verificação de tokens e cookies, garantindo a proteção adequada das rotas sensíveis.
  </li>
  <br></br>
  <li>
    Utilização da biblioteca Pool para otimização do uso de conexões com o banco de dados, proporcionando um ambiente mais eficiente e com menor custo financeiro.
  </li>
  <br></br>
  <li>
    Conhecimento proficiente em bancos de dados, incluindo MySQL, Sqlserver e MongoDB, permitindo a escolha do banco mais adequado para cada projeto.
  </li>
  <br></br>
  <li>
    Desenvolvimento de soluções inteligentes, como criação de planilhas de dados dinâmicas utilizando Google Planilhas e AppsScript.
  </li>
  <br></br>
  <li>
    Experiência na resolução de problemas e comunicação eficaz com usuários finais, habilidade desenvolvida ao interagir por mais de um ano com alunos de medicina.
  </li>
</ul>

                </>
              )}{mostrarReact &&(<>
              <ul>
  <li>
    Desenvolvimento frontend com React, utilizando Styled Components para estilização, proporcionando um código mais organizado e reutilizável.
  </li>
  <br></br>
  <li>
    Domínio de conceitos avançados de React Hooks, incluindo useState para gerenciar estados de componentes funcionais, proporcionando uma manipulação eficiente do estado da aplicação.
  </li>
  <br></br>
  <li>
    Implementação de roteamento eficaz com React Router, possibilitando a navegação dinâmica entre as diferentes partes da aplicação.
  </li>
  <br></br>
  <li>
    Integração com APIs no frontend, utilizando métodos assíncronos e manipulação de objetos, garantindo uma comunicação eficiente entre o frontend e o backend.
  </li>
  <br></br>
  <li>
    Manipulação e renderização de objetos, proporcionando uma interface dinâmica e interativa para o usuário.
  </li>
  <br></br>
  <li>
    Implementação de lógica de loading para melhorar a experiência do usuário, garantindo uma resposta visual adequada durante operações assíncronas.
  </li>
  <br></br>
  <li>
    Conhecimento em criptografia para garantir a segurança no envio de informações sensíveis, protegendo dados durante a comunicação com o backend.
  </li>
</ul></>)}{mostrarMySql &&(<><ul>
  <li>
    Experiência sólida com MongoDB e MySQL para armazenamento e gerenciamento eficiente de dados em diferentes tipos de projetos.
  </li>
  <br></br>
  <li>
    No MongoDB, habilidade em trabalhar com estruturas JSON, utilizando técnicas avançadas para criação de esquemas através do Mongoose e Prisma, proporcionando uma modelagem de dados consistente e flexível.
  </li>
  <br></br>
  <li>
    No MySQL, preferência por criar bancos de dados utilizando linguagem nativa, visando otimizar a performance do código. Domínio em criação de APIs robustas, implementando triggers para alimentar selects com dados das tabelas e utilizando caminhos para armazenar arquivos no formato blob no banco de dados, além de realizar consultas avançadas.
  </li>
</ul>
</>)}{mostrarInfrastructure &&(<>
  <ul>
  <li>
    Manutenção de Computadores: Inclui o entendimento tanto teórico quanto prático do funcionamento da memória RAM e suas interações com outros barramentos dentro da placa mãe. Isso sugere uma compreensão profunda da arquitetura de computadores.
  </li>
  <br></br>
  <li>
    Conhecimento sobre Processadores: Sou capaz de diferenciar e compreender informações sobre processadores. Isso é fundamental para escolher a melhor configuração de hardware para determinadas necessidades.
  </li>
  <br></br>
  <li>
    Roteamento de Rede: Demonstro conhecimento sobre roteamento de rede, que envolve o direcionamento eficiente de dados entre diferentes dispositivos em uma rede.
  </li>
  <br></br>
  <li>
    Diferença entre UDP e TCP: Compreensão da diferença entre os protocolos UDP (User Datagram Protocol) e TCP (Transmission Control Protocol), que são fundamentais para a comunicação na Internet.
  </li>
  <br></br>
  <li>
    Protocolo TCP/IP e Suas Camadas: Conhecimento sobre o modelo de referência TCP/IP e suas camadas. Isso é essencial para entender como os protocolos de comunicação funcionam em uma rede.
  </li>
  <br></br>
  <li>
    Técnicas no Prompt do Windows: Habilidade para usar o prompt de comando do Windows para identificar conexões com servidores, verificar perda de pacotes e entender o empacotamento na web. Essas habilidades indicam uma compreensão prática da resolução de problemas em redes.
  </li>
</ul>
</>)}{mostrarCsharp &&(<>
  <ul>
  <li>
    Boas habilidades em C#: Demonstro proficiência em C#, com preferência por trabalhar com linguagens tipadas. Estruturo a função Main e as demais classes de forma organizada, tratando a hierarquia de classes como filhos. Tenho o cuidado de tipar e converter variáveis de forma eficiente, evitando o uso desnecessário de 'var' para não alocar memória sem necessidade no projeto. Essa abordagem contribui para a otimização do código.
  </li>
  <br></br>
  <li>
    Desenvolvimento de APIs em C#: Experiência na criação de APIs robustas utilizando C#. Essas APIs são desenvolvidas com o objetivo de fornecer funcionalidades eficientes e seguras para diferentes tipos de projetos.
  </li>
  <br></br>
  <li>
    Estudo constante: Atualmente, estou dedicando meu tempo ao estudo avançado em C#, assim como já possuo expertise em Javascript. Essa abordagem me permite aplicar as melhores práticas e técnicas em ambos os ambientes, contribuindo para o desenvolvimento de soluções de alta qualidade.
  </li>
</ul>
</>)}
            </TextoContainer>
          </Column>
        </TwoColumnContainer>
      </StyledDiv>
    ),
    (<StyledDiv>
      <TwoColumnContainer>
        <Column>
          <TextoContainer>
            <h2>Meu contato 📱🤙🏿</h2>
            <StyledSelect onChange={handleMostrarContato}>
              
              <StyledOption value="mostrar">Selecione</StyledOption>
              <StyledOption value="seleciona">Ver contatos</StyledOption>
            </StyledSelect>
            {mostrarContato && (
             <>
             <Paragrafo ref={textoContatoRef}>{emailContato}</Paragrafo>
             <Paragrafo>Numero celular: 21981695297</Paragrafo>
             <Paragrafo>Caso se algumas das APIs abaixo não funcionem do jeito correto, essas informações não poderiam faltar, né. 🤗</Paragrafo>
             
               <StyledImage onClick={handleCopiarTexto} src={apontando} />
               Copiar Texto
            
           </>
            
            )}
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
              <h2>Um pouco sobre mim: 💪🏿😉</h2>
              <StyledSelect onChange={handleMostrarSobreMim}>
                <StyledOption value="selecionar">Clique aqui</StyledOption>
                <StyledOption value="mostrar">Mostrar</StyledOption>
              </StyledSelect>
              {mostrarSobreMim && (
                <>
                  <Paragrafo>
                    Nascido na cidade do Rio de Janeiro, criado na Bahia de Sepetiba, meu sonho desde novo era ser jogador de futebol, talvez mais porque meu pai queria que eu fosse haha!
                    <br></br>
                    <br></br>Desde novo, sempre fui apaixonado por tecnologia. Meu sonho era ter um computador e entender como ele funcionava, logo a primeira habilidade adquirida com tecnologia foi montagem e manutenção.
                    Dando continuidade, terminei o ensino médio e fiquei pensando em que eu queria ser no ramo profissional, algo que não me faria perder a essência. Logo surgiu a oportunidade de cursar análise e desenvolvimento de sistemas, logo me apaixonei pela parte lógica da computação. Hoje em dia, sonho em me formar em mestre da computação. Gosto de atuar tanto na área de desenvolvimento quanto na parte física, resumindo, no corpo e na mente da tecnologia. ❤️‍🔥
                  </Paragrafo>
                  <Paragrafo>
                    Quero agradecer a todos que dedicaram seu tempo, lendo o conteúdo desse simples site. Espero encontrá-los por aí, um abraço e permaneço à disposição.
                  </Paragrafo>
                </>
              )}
            </TextoContainer>
          </Column>
        </TwoColumnContainer>
      </StyledDiv>
    ),
  ];
 
  
  

 

  return (
    <Layout>
      
        <GlobalStyles /> {/* Essa é a primeira importação do GlobalStyles */}
        <CurriculoContainer>
        
        <StyledTexto>
  Bem-vindo ao meu portfólio! Este site foi criado para oferecer uma visão mais aprofundada das minhas habilidades em desenvolvimento web com React. Explore as diferentes telas para ver demonstrações interativas e avançadas das minhas capacidades. Seja bem-vindo e fique à vontade para explorar!
</StyledTexto>

          <Titulo onClick={handleNomeClick}>William Oliveira</Titulo>
  
          <FotoRedonda src={suaFoto} alt="Sua Foto" />
          <StyledJsImage src={Js} alt="JavaScript" />
          <StyledReactImage src={Reactgif} alt="React" />
          <StyledCImage src={C} alt="C#" />
          <StyledMongoImage src={mongo} alt="MongoDB" />
          <StyledMysqlImage src={mysql} alt="MySQL" />

          <BotoesContainer>
            <BotaoNavegacao1 onClick={handleAnterior}>⬅️ Anterior  </BotaoNavegacao1>
            <BotaoNavegacao2
              onClick={handleProximo}
              disabled={conteudoAtual === conteudos.length - 1}
            >
              Próximo ➡️
            </BotaoNavegacao2>
          </BotoesContainer>
          {conteudos[conteudoAtual]}
        </CurriculoContainer>
        <FooterContainer>
          
        </FooterContainer>
        <GlobalStyles /> 
      
    </Layout>
  );

  
};

export default MeuCurriculo;
