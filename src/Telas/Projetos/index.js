import React, { useState } from 'react';
import Projeto from './Projetostyle';
import Layout from '../../Componentes/menu-lateral/Layout';
import styled, { ThemeProvider,createGlobalStyle } from 'styled-components';
import { BotaoNavegacao1 } from '../Home/HomeStyles';
import planilha from '../../Fotos/planilhagif.gif';
import hotjar from '../../Fotos/hotajr.gif';
import Oie from '../../Fotos/Oie.gif';

const ProjetosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150vh; /* Define a altura total da tela */
`;
const GlobalStyle = createGlobalStyle`
  body {
    background-color:rgb(255, 213, 0); /* Código de cor para amarelo mostarda */
    margin: 0; /* Remove as margens padrão do body */
    padding: 0; /* Remove os preenchimentos padrão do body */
    

  }
`;
const BotoesContainer = styled.div`
  display: flex;
  gap: 16px; /* Espaço entre os botões */
  margin-bottom: 16px; /* Espaço abaixo dos botões */
`;

const BotaoNavegacao = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
const ProjetoImagem = styled.img`
  width: 100%;
  max-height: 10%; 
  object-fit: cover;
`;
const TituloProjeto = styled.h1`
font-family: 'Archivo Black', sans-serif;
color: red;
margin-top: 10%;
`;
export const Texto = styled.p`
  font-family: 'Archivo Black', sans-serif;
  color: red;
  
`;
const textoPlanilha = 'Este projeto foi iniciado para fazer as planilhas ficarem mais inteligentes, vi que eu tinha uma necessidade de prestar atenção nos tempo de trativas para cada aluno. Logo pensei; "E se eu fizesse um script, que calcula a quantidade de dias com demanda em aberto, enviasse email de alertas para retornos e nesse emails tivesse links e informações sobre aquele tipo de problema?", bom logo coloquei as ideias em práticas e consegui tanto desenvolver uma planilha personalizada do meu jeito e também ajudar outros colaboradores com essa ideia, fiquei muito feliz que deu certo. '
const textoGolden = 'O projeto Golden Company, foi uma iniciativa minha e do Rennan Pessanha. Oque inspirou essa iniciativa? Bom, foi a ideia de que somos capazes de levar tecnologia para todos os grupos, nesse pensamento surgiu a Golden, ainda é algo pequeno, com grandes ideias. Hoje já somos 5 membros estudando tecnologia e aplicando, melhorando técnicas de design, desenvolvimento no geral e até comunicação como um dos membros percebo que tenho que estudar muito acessibilidade na área tecnológica, é notório que as maiorias das tecnologias não são didáticas para pessoas com mais idades(Outras gerações) também para pessoas Pcd, é um caminho difícil adaptar gerações, grupos não é fácil, porém com trabalho duro e em equipe, podemos tudo.🏗️'
const textEu ='Não menos importante, mas necessário, eu, William Oliveira, sou um projeto em desenvolvimento. A evolução é contínua; todos nós somos projetos de nossas próprias mentes, ideias e até mesmo de nosso status social. A tecnologia faz parte das minhas conquistas e sonhos. Pretendo compartilhar novos projetos no meu GitHub para que vocês possam ver meu esforço e talento. Quem sabe eu me encaixe em algum projeto ou oportunidade, assim como a Golden Company. Muito obrigado. Futuramente, criarei um sistema de notificação para informar todos os recrutadores e interessados sobre novas atualizações. '
const Projetos = () => {
  const projetos = [
    {
      imagem: planilha,
      titulo: 'Projeto planilha inteligente',
      descricao: textoPlanilha,
    },
    {
      imagem: hotjar,
      titulo: 'Golden Company',
      descricao: textoGolden
    },
    {
      imagem: Oie,
      titulo:'Eu projeto de vida',
      descricao: textEu
    }
    // Adicione mais projetos conforme necessário
  ];

  const [projetoAtual, setProjetoAtual] = useState(0);

  const handleProjetoAnterior = () => {
    setProjetoAtual((prevProjeto) => (prevProjeto > 0 ? prevProjeto - 1 : projetos.length - 1));
  };

  const handleProjetoProximo = () => {
    setProjetoAtual((prevProjeto) => (prevProjeto < projetos.length - 1 ? prevProjeto + 1 : 0));
  };

  return (
    <Layout>
      <GlobalStyle/>
        
      <ProjetosContainer>
        <TituloProjeto>Sobre os projetos...</TituloProjeto>
        {/* Conteúdo do projeto atual */}
       <ProjetoImagem
    src={projetos[projetoAtual].imagem}
    alt={projetos[projetoAtual].titulo}
    style={{ width: '60%', maxHeight: '40%', objectFit: 'cover' }}
  />
  <Texto><Projeto
  titulo={typeof projetos[projetoAtual].titulo === 'string' ? projetos[projetoAtual].titulo : ''}
  descricao={projetos[projetoAtual].descricao}/></Texto>
  
{console.log('Título:', projetos[projetoAtual].titulo)}

        {/* Botões de navegação */}
        <BotaoNavegacao1 onClick={handleProjetoAnterior}>⬅️ Projeto Anterior</BotaoNavegacao1>
        <BotaoNavegacao1 onClick={handleProjetoProximo}>Próximo Projeto ➡️</BotaoNavegacao1>
      </ProjetosContainer>
      
    </Layout>
  );
};

export default Projetos;