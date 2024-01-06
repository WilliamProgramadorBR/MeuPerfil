import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Algoritmos from '../../Fotos/AlgoritmosLogicas.jpg';
import Nodejs from '../../Fotos/Nodejs.jpg';
import ReactCurso from '../../Fotos/React.jpg';
import Layout from '../../Componentes/menu-lateral/Layout';


const CertificadosContainer = styled.div`
  display: flex;
  overflow: auto;
  align-items: center;
  justify-content: center;
  margin-top: 0%;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const CertificadoContainer = styled.div`
  position: relative;
  flex: 0 0 auto;
  width: 100%;
  margin-top: 20%;
  max-width: 300px;
  box-sizing: border-box;
  text-align: center;
  margin-right: 10%;
  transition: max-width 0.3s ease;

  @media (max-width: 768px) {
    margin-top: 35%;
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const CertificadoImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const CertificadoText = styled.p`
  display: ${props => (props.isVisible ? 'block' : 'none')};
  font-family: '', sans-serif;
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: red;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
  
`;

const PopupText = styled.p`
  margin: 0;
  
  font-family: 'Arial', sans-serif;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

const Popup = ({ text, onClose }) => {
  return (
    <PopupContainer>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <PopupText>{text}</PopupText>
    </PopupContainer>
  );
};

// ... (importações)
// ... (importações)

const Certificados = () => {
  const certificados = [
    { url: Algoritmos, texto: 'Curso feito para aprender as lógicas e algoritmos, gostei muito do conteúdo', texto2: 'Clique no próximo para ver mais'},
    { url: Nodejs, texto: 'Esse foi um dos cursos pioneiros para meu desenvolvimento em node, amei', texto2: 'Focado em fullstack, fiz para reforça os conhecimentos. Precisava de mais estudo para atuar no site Helpdesk. O terceiro foi muito legal.' },
    { url: ReactCurso, texto: 'Como disse em outras páginas, gosto de entender tanto o front quanto o back-end.', texto2: 'Realizado para ter uma base em desenvolvimento front-end, aconselho muito os futuros devs fazer esse curso, vale a pena.' },
  ];

  const [textoVisivel, setTextoVisivel] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState('');

  const handleMostrarTexto = (texto, texto2) => {
    setTextoVisivel(texto);
    setShowPopup(true);
    setPopupText(texto2); // Define o texto personalizado para o popup
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowPopup(true);
      localStorage.setItem('hasVisited', 'true');

      const popupTimeout = setTimeout(() => {
        setShowPopup(false);
      }, 5000);

      return () => clearTimeout(popupTimeout);
    }
  }, []);

  return (
    <div>
      
      <Layout>
      {showPopup && <Popup text={popupText} onClose={handleClosePopup} />}
      <CertificadosContainer>
        {certificados.map((certificado, index) => (
          <CertificadoContainer
            key={index}
            onClick={() => handleMostrarTexto(certificado.texto, certificado.texto2)}
          >
            <CertificadoImage
              src={certificado.url}
              alt={`Certificado ${index + 1}`}
            />
            <CertificadoText isVisible={certificado.texto === textoVisivel}>
              {certificado.texto}
            </CertificadoText>
          </CertificadoContainer>
        ))}
      </CertificadosContainer>
      </Layout>
    </div>
  );
};

export default Certificados;

