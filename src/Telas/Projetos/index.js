import React, { useState } from 'react';
import Projeto from './Projetostyle';
import Layout from '../../Componentes/menu-lateral/Layout';
import styled, { ThemeProvider } from 'styled-components';
import { BotaoNavegacao1 } from '../Home/HomeStyles';
import planilha from '../../Fotos/planilhagif.gif';

const ProjetosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Define a altura total da tela */
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
  max-height: 200px; /* Altura máxima fixa para a imagem */
  object-fit: cover;
`;
const textoPlanilha = 'Este projeto foi iniciado para fazer as planilhas ficarem mais inteligentes, vi que eu tinha uma necessidade de prestar atenção nos tempo de trativas para cada aluno. Logo pensei; "E se eu fizesse um script, que calcula a quantidade de dias com demanda em aberto, enviasse email de alertas para retornos e nesse emails tivesse links e informações sobre aquele tipo de problema?", bom logo coloquei as ideias em práticas e consegui tanto desenvolver uma planilha personalizada do meu jeito e também ajudar outros colaboradores com essa ideia, fiquei muito feliz que deu certo. '
const Projetos = () => {
  const projetos = [
    {
      imagem: planilha,
      titulo: 'Projeto planilha inteligente',
      descricao: textoPlanilha,
    },
    {
      imagem: 'caminho/da/imagem2.jpg',
      titulo: 'Título do Projeto 2',
      descricao: 'Descrição do Projeto 2',
    },
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
        
      <ProjetosContainer>
        <h2>Meus Projetos</h2>
        {/* Conteúdo do projeto atual */}
        <Projeto {...projetos[projetoAtual]} />

        {/* Botões de navegação */}
        <BotaoNavegacao1 onClick={handleProjetoAnterior}>⬅️ Projeto Anterior</BotaoNavegacao1>
        <BotaoNavegacao1 onClick={handleProjetoProximo}>Próximo Projeto ➡️</BotaoNavegacao1>
      </ProjetosContainer>
      
    </Layout>
  );
};

export default Projetos;