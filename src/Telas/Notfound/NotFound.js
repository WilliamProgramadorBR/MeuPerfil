// NotFound.js
import React from 'react';
import Layout from '../../Componentes/menu-lateral/Layout';
import styled from 'styled-components';
import notFoundGif from '../../Fotos/gifnotfound.gif';

const EstiloDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; // Ajusta a altura para ocupar 100% da altura da viewport

  @media (min-width: 768px) {
    margin-top: 5%;
  }
`;

const GifImagem = styled.img`
  width: 100%;
  max-width: 400px; // Ajuste o tamanho conforme necessário
`;

const NotFound = () => {
  return (
    <Layout>
      <EstiloDiv>
        <h1>404 - Página não encontrada</h1>
        <p>Ops, me desculpe. Parece que o que você está procurando não existe ou foi removido. Entre em contato com o desenvolvedor.</p>
        <p>No lado superior esquerdo  da tela, você pode navegar pelas páginas corretas.</p>
        <GifImagem src={notFoundGif} alt="Not Found Gif" />
      </EstiloDiv>
    </Layout>
  );
};

export default NotFound;
