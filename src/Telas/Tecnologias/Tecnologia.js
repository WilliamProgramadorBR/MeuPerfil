// Tecnologia.js
import React from 'react';
import TecnologiaChart from '../../Componentes/grafico/TecnologiaChart';
import Layout from '../../Componentes/menu-lateral/Layout';
import styled from 'styled-components';

const TecnologiaContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Tecnologia = () => {
  const dadosTecnologia = [
    { nome: 'Node.js', percentual: 30 },
    { nome: 'Express.js', percentual: 25 },
    { nome: 'MongoDB', percentual: 20 },
    // Adicione mais dados conforme necessário
  ];

  return (
    <Layout>
      <TecnologiaContainer>
        <h2>Meu Conhecimento em Backend</h2>
        <br />
        <TecnologiaChart dados={dadosTecnologia} />
        {/* Outros conteúdos da tela de tecnologia */}
      </TecnologiaContainer>
    </Layout>
  );
};

export default Tecnologia;
