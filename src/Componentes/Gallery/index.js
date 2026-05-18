import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  padding: 24px;
  background: rgba(0, 0, 0, 0.76);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  position: relative;
  width: min(1100px, 96vw);
  height: min(760px, 88vh);
  border-radius: 8px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.borderColor};
  overflow: hidden;
  display: grid;
  place-items: center;
`;

const IconButton = styled.button`
  position: absolute;
  z-index: 2;
  width: 42px;
  height: 42px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled(IconButton)`
  top: 14px;
  right: 14px;
`;

const PrevButton = styled(IconButton)`
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
`;

const NextButton = styled(IconButton)`
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 70px;
  display: grid;
  place-items: center;

  @media (max-width: 640px) {
    padding: 64px 18px;
  }
`;

const Media = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const Video = styled.video`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const GalleryModal = ({ items, currentIndex, onClose }) => {
  const [index, setIndex] = useState(currentIndex);
  const currentItem = items[index];
  const isVideo = /\.mp4($|\?)/i.test(currentItem);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(event) => event.stopPropagation()}>
        <CloseButton type="button" onClick={onClose} aria-label="Fechar galeria">
          <FaTimes />
        </CloseButton>
        <Content>
          {isVideo ? (
            <Video src={currentItem} controls />
          ) : (
            <Media src={currentItem} alt={`Item da galeria ${index + 1}`} />
          )}
        </Content>
        {items.length > 1 && (
          <>
            <PrevButton type="button" onClick={handlePrev} aria-label="Item anterior">
              <FaArrowLeft />
            </PrevButton>
            <NextButton type="button" onClick={handleNext} aria-label="Proximo item">
              <FaArrowRight />
            </NextButton>
          </>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default GalleryModal;
