// MiniaturaLinguagem.js
import React from 'react';
import styled from 'styled-components';

const MiniaturaContainer = styled.div`
  position: fixed;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Atualizado para usar a constante fotolinguagem
export const Fotolinguagem = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
  cursor: pointer;
`;

const MiniaturaLinguagem = ({ linguagens, onLinguagemClick }) => {
  return (
    <MiniaturaContainer>
      {linguagens.map((linguagem, index) => (
        <Fotolinguagem
          key={index}
          src={linguagem.imagem}
          alt={linguagem.nome}
          onClick={() => onLinguagemClick(linguagem.nome)}
        />
      ))}
    </MiniaturaContainer>
  );
};

export default MiniaturaLinguagem;
