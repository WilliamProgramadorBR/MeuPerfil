import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
import Layout from '../../Componentes/menu-lateral/Layout';
import Footer from '../../Componentes/rodape/rodape';
import notFoundGif from '../../Fotos/gifnotfound.gif';

const Page = styled.main`
  width: min(900px, calc(100% - 32px));
  min-height: calc(100vh - 180px);
  margin: 0 auto;
  padding: 72px 0;
  display: grid;
  place-items: center;
  text-align: center;
`;

const Content = styled.div`
  display: grid;
  gap: 18px;
  justify-items: center;
`;

const GifImagem = styled.img`
  width: min(240px, 70vw);
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(2.4rem, 8vw, 5rem);
  line-height: 1;
`;

const Text = styled.p`
  max-width: 620px;
  margin: 0;
  color: ${({ theme }) => theme.textMuted};
  line-height: 1.7;
`;

const BackLink = styled(Link)`
  min-height: 44px;
  padding: 0 14px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.primaryColor};
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-weight: 800;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: ${({ theme }) => theme.primaryColorHover};
  }
`;

const NotFound = () => {
  return (
    <Layout>
      <Page>
        <Content>
          <GifImagem src={notFoundGif} alt="" aria-hidden="true" />
          <Title>404</Title>
          <Text>
            Esta página não existe ou foi movida. Volte para o portfolio e continue navegando pelos
            projetos, apps e canais de contato.
          </Text>
          <BackLink to="/">
            <FaArrowLeft /> Voltar para o portfolio
          </BackLink>
        </Content>
      </Page>
      <Footer />
    </Layout>
  );
};

export default NotFound;
