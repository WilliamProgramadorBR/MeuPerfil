// src/Componentes/GalleryModal.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';  // Importando ícones

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90vw;  /* Ajuste máximo da largura para o modal */
  max-height: 90vh; /* Ajuste máximo da altura para o modal */
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  overflow: hidden;
  display: flex; /* Flexbox para centrar o conteúdo */
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #000;
  z-index: 2;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #000;
  z-index: 2;
`;

const PrevButton = styled(ArrowButton)`
  left: 10px;
`;

const NextButton = styled(ArrowButton)`
  right: 10px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Media = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Ajusta a imagem dentro dos limites sem cortar */
`;

const Video = styled.video`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Ajusta o vídeo dentro dos limites sem cortar */
`;

const GalleryModal = ({ items, currentIndex, onClose }) => {
  const [index, setIndex] = useState(currentIndex);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <FaTimes /> {/* Ícone de fechar */}
        </CloseButton>
        <Content>
          {items[index].endsWith('.mp4') ? (
            <Video src={items[index]} controls />
          ) : (
            <Media src={items[index]} alt={`Gallery item ${index}`} />
          )}
        </Content>
        <PrevButton onClick={handlePrev}>
          <FaArrowLeft /> {/* Ícone de seta para esquerda */}
        </PrevButton>
        <NextButton onClick={handleNext}>
          <FaArrowRight /> {/* Ícone de seta para direita */}
        </NextButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default GalleryModal;
