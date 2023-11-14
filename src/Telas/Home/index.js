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
          <h2>Educação</h2>
          <p>Sou formado na instituição Estácio de Sá, o ano da minha conclusão foi em 2023.</p>
          <p>Formado em Analise e desenvolvemento de sistemas</p>
          <p>Quero continuar meus estudos, meu sonho é consegui mestrado nas áreas de tecnologias</p>
        </TextoContainer>
      </div>
    ),
    (
      <div>
        <TextoContainer>
          <h2>Experiência Profissional</h2>
          <p>Meu objetivo profissional, é consegui usar o meu conhecimento para desenvolvemento profissional e pessoal, conhecer outros Devs e profissionais de tecnologias até outros setores,
          adquirir conhecimentos junstos e elaborar bons projetos de alta escalabilidad</p>
          
        </TextoContainer>
      </div>
    ),
    (
      <div>
        <TextoContainer>
          <h2>Habilidades</h2>
          <ul>
            <li>Nodejs, Typescript (Javascript)</li>
            <br></br>
            <li>Angularjs, Dashb em Javascripts</li>
            <br></br>
            <li>Domínio na Areá Tecnológica web</li>
            <br></br>
            <li>Manutenção de Computadores</li>
            <br></br>
            <li>MySql, Sqlserver, Mongodb</li>
            <br></br>
            <li>Rede computadores, costumo utilizar
              bastante a documentação
            </li>
            {/* Adicione mais habilidades conforme necessário */}
          </ul>
        </TextoContainer>
      </div>
    ),
    (
      <div>
        <TextoContainer>
          <h2>Contato</h2>
          {/* Adicione mais informações de contato conforme necessário */}
        </TextoContainer>
      </div>
    ),
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

        <Titulo>William Oliveira</Titulo>
        <FotoRedonda src={suaFoto} alt="Sua Foto" />
        <BotoesContainer>
          <BotaoNavegacao1 onClick={handleAnterior}>Volte 👈🏾</BotaoNavegacao1>
          <BotaoNavegacao2 onClick={handleProximo}>Avance👉🏾</BotaoNavegacao2>
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
