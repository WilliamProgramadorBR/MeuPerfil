import React, { useState, useContext, useEffect } from 'react';
import styled, { keyframes, ThemeContext } from 'styled-components';

const jumpAnimation = keyframes`
  0%, 100% {
    transform: translateX(-20px) translateY(0);
  }
  50% {
    transform: translateX(0) translateY(-10px);
  }
`;

const Text = styled.p`
  animation: ${jumpAnimation} 1s ease-in-out infinite; /* Animação de salto */
  white-space: nowrap; /* Impede que o texto quebre em várias linhas */
  font-family: 'Faster One', cursive; /* Usando a fonte Faster One */
  font-size: min(5vw, 24px); /* Tamanho da fonte responsivo, com mínimo de 24px */
  
  @media (max-width: 768px) {
    white-space: initial; /* Permite que o texto quebre em várias linhas */
    word-wrap: break-word; /* Permite que o texto quebre em palavras */
    font-size: 3vw; /* Reduzindo o tamanho da fonte para telas menores */
    max-width: 90vw; /* Limitando a largura do texto */
    overflow-wrap: break-word; /* Tratamento correto do texto em quebras de palavras */
  }
`;



const BannerStyle = styled.div`
  width: 100%;
  max-width: 100%;
  height: 15vw; /* Altura responsiva */
  min-height: 100px; /* Altura mínima */
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, ${({ theme }) => theme.background}, ${({ theme }) => theme.background}); /* Use a cor de fundo do tema */

  @media (min-width: 768px) {
    height: 120px; /* Altura para telas maiores */
  }
`;


function Header() {
  const theme = useContext(ThemeContext);
  const [message, setMessage] = useState("Javascript eu te amo");

  useEffect(() => {
    const phrases = [
      "Javascript eu te amo! ❤️🚀",
      "C# é meu viver! 💻❤️",
      "Segurança da informação nunca é demais! 🔒💡",
      "Com MySQL e um bom Node.js, podemos escalar o mundo! 🌍💻",
      "React é surpreendente! Veja o que ele fez neste site 🚀"
    ];

    let currentIndex = 0;

    const interval = setInterval(() => {
      setMessage(phrases[currentIndex]);
      currentIndex = (currentIndex + 1) % phrases.length;
    }, 6000); // Troca a cada 6 segundos (6000 milissegundos)

    return () => clearInterval(interval);
  }, []);

  return (
    <BannerStyle>
      <Text>{message}</Text>
    </BannerStyle>
  );
}

export default Header;
