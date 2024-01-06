// Projeto.js
import React from 'react';
import styled from 'styled-components';

const ProjetoContainer = styled.div`
  margin-bottom: 20px;
`;

const ProjetoImagem = styled.img`
  width: 100%;
  max-height: 200px; /* Ajuste conforme necessário */
  object-fit: cover;
`;

const ProjetoTitulo = styled.h3`
  margin-top: 10px;
`;

const ProjetoDescricao = styled.p`
 
`;

const Projeto = ({ imagem, titulo, descricao }) => (
  <ProjetoContainer>
    
    <ProjetoTitulo>{titulo}</ProjetoTitulo>
    <ProjetoDescricao>{descricao}</ProjetoDescricao>
  </ProjetoContainer>
);

export default Projeto;
