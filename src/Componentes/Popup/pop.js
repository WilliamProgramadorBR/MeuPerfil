import React, { useState } from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

const PopupText = styled.p`
  margin: 0;
  colo: red;
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

const saudacao = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && <Popup text="Seu texto personalizado aqui!" onClose={handleClosePopup} />}
      {/* Restante do conteúdo da sua aplicação */}
    </div>
  );
};

export default saudacao;
