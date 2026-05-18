import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Algoritmos from '../../Fotos/AlgoritmosLogicas.jpg';
import Nodejs from '../../Fotos/Nodejs.jpg';
import ReactCurso from '../../Fotos/React.jpg';
import Layout from '../../Componentes/menu-lateral/Layout';
import Footer from '../../Componentes/rodape/rodape';

const certificados = [
  {
    url: Algoritmos,
    titulo: 'Algoritmos e lógica',
    texto: 'Base de pensamento computacional, estruturação de problemas e construção de soluções passo a passo.',
  },
  {
    url: Nodejs,
    titulo: 'Node.js',
    texto: 'Fundamentos para desenvolvimento full stack, APIs e back-end com JavaScript.',
  },
  {
    url: ReactCurso,
    titulo: 'React',
    texto: 'Construção de interfaces web, componentes reutilizáveis e experiências responsivas.',
  },
];

const Page = styled.main`
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  padding: 64px 0 88px;
`;

const BackLink = styled(Link)`
  min-height: 42px;
  padding: 0 14px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-weight: 800;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.primaryColor};
    background: ${({ theme }) => theme.hoverBackground};
  }
`;

const Header = styled.header`
  max-width: 780px;
  margin-top: 38px;
  margin-bottom: 34px;
`;

const Eyebrow = styled.p`
  margin: 0 0 10px;
  color: ${({ theme }) => theme.primaryColor};
  font-size: 0.78rem;
  font-weight: 900;
  text-transform: uppercase;
`;

const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-size: clamp(2.3rem, 5vw, 4.6rem);
  line-height: 1;
`;

const Lead = styled.p`
  margin: 18px 0 0;
  color: ${({ theme }) => theme.textMuted};
  line-height: 1.75;
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  border-radius: 8px;
  overflow: hidden;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.borderColor};
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.primaryColor};
  }
`;

const CertificateButton = styled.button`
  width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  display: block;
`;

const CertificadoImage = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  display: block;
`;

const CardBody = styled.div`
  padding: 20px;

  h2 {
    margin: 0 0 10px;
    font-size: 1.16rem;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.textMuted};
    line-height: 1.65;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  padding: 24px;
  background: rgba(0, 0, 0, 0.78);
  display: grid;
  place-items: center;
`;

const ModalContent = styled.div`
  width: min(980px, 96vw);
  max-height: 90vh;
  border-radius: 8px;
  overflow: hidden;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.borderColor};
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const ModalImage = styled.img`
  width: 100%;
  max-height: 90vh;
  object-fit: contain;
  display: block;
`;

const Certificados = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <Layout>
      <Page>
        <BackLink to="/">
          <FaArrowLeft /> Voltar para o portfolio
        </BackLink>

        <Header>
          <Eyebrow>Certificados</Eyebrow>
          <Title>Formação contínua e base técnica.</Title>
          <Lead>
            Alguns registros de estudos que reforçam minha base em lógica, back-end, front-end e
            desenvolvimento de aplicações completas.
          </Lead>
        </Header>

        <Grid>
          {certificados.map((certificado) => (
            <Card key={certificado.titulo}>
              <CertificateButton type="button" onClick={() => setSelectedCertificate(certificado)}>
                <CertificadoImage src={certificado.url} alt={certificado.titulo} />
              </CertificateButton>
              <CardBody>
                <h2>{certificado.titulo}</h2>
                <p>{certificado.texto}</p>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Page>

      {selectedCertificate && (
        <ModalOverlay onClick={() => setSelectedCertificate(null)}>
          <ModalContent onClick={(event) => event.stopPropagation()}>
            <CloseButton
              type="button"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Fechar certificado"
            >
              <FaTimes />
            </CloseButton>
            <ModalImage src={selectedCertificate.url} alt={selectedCertificate.titulo} />
          </ModalContent>
        </ModalOverlay>
      )}

      <Footer />
    </Layout>
  );
};

export default Certificados;
