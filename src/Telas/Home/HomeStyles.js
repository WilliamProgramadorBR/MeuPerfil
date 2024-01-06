// HomeStyles.js


import styled, {keyframes } from 'styled-components';


export const ButtonContainer = styled.div`
  position: fixed;
  top: 300px; /* Ajuste a distância do topo conforme necessário */
  right: 10px; /* Ajuste a distância da direita conforme necessário */
`;
export const StyledImage = styled.img`
width: 10%; // Ajuste o tamanho conforme necessário
height: 10%;
cursor: pointer;
margin-right: 5px; // Adicione margem à direita para separar a imagem do texto
`;

export const CurriculoContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  font-family: 'Archivo Black', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;



const moveLetters = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Titulo = styled.h1`
  font-size: 36px;
  margin: 0;
  font-weight: bold;
  font-family: 'Roboto', sans-serif; /* Substitua 'Roboto' pelo nome da fonte escolhida */
  color: #blue;
  margin-top: 200px;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #ff0000;
    animation: ${moveLetters} 0.5s ease infinite;
  }
`;

export const LinkedInLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const FotoRedonda = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid red;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9); /* Reduz um pouco a escala ao clicar para dar feedback visual de clique */
  }
`;

export const BotoesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

export const BotaoNavegacao1 = styled.button`
  border: none;
  background: none;
  margin-right: 5px;
  cursor: pointer;
  color: red;
  padding: 0;
  outline: none;
  padding: 8px 12px;
  font-family: 'Roboto', sans-serif;
 
  transition: color 0.3s ease;

`;

export const BotaoNavegacao2 = styled.button`
  border: none;
  background: none;
  margin-right: 5px;
  cursor: pointer;
  padding: 0;
  outline: none;
`;
export const Paragrafo = styled.p`
  margin-bottom: 20px;
  overflow-wrap: break-word;
  font-family: 'Roboto', sans-serif;
`;
export const TextoContainer = styled.div`
  max-width: 800px;
  margin-top: 20px;
  padding: 20px;
  overflow-wrap: break-word;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 15px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 10px;
  }
`;



export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ThemeToggle = styled.button`
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  border: none;
  padding: 10px;
  transition: background-color 0.3s ease, color 0.3s ease;
  
  cursor: pointer;
  outline: none;
`;
export const SelectContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledSelect = styled.select`
  font-size: 16px;
  padding: 12px;
  border: 2px solid #3498db;
  border-radius: 10px;
  background-color: #ffffff;
  color: #333333;
  appearance: none;
  cursor: pointer;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: #2980b9;
  }

  &:focus {
    border-color: #2980b9;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.7);
  }
`;
export const StyledTexto = styled.p`
  font-family: 'Rubik Doodle Shadow', sans-serif;
  /* Outras propriedades de estilo conforme necessário */
  margin-top: 20%; /* Ajuste conforme necessário */
  font-size: 1em; /* Ajuste conforme necessário */
  @media (max-width: 768px) {
    margin-top: 20%;
    
    font-size: 1em; /* Ajuste conforme necessário para telas menores */
  }
`;
export const ImagemTecnologia = styled.img`
  width: 10%;  /* Ajuste conforme necessário */
  height: 10%; /* Ajuste conforme necessário */
  margin: 1%;  /* Espaçamento entre as imagens */
  border-radius: 8px; /* Borda arredondada */
  display: inline-block;
  
  /* Adicione mais estilos conforme necessário */
`;
export const StyledJsImage = styled(ImagemTecnologia)`
width: 10%;  /* Ajuste conforme necessário */
height: 10%; /* Ajuste conforme necessário */
margin: 1%;  /* Espaçamento entre as imagens */
margin-left: -60%; 
border-radius: 8px; /* Borda arredondada */
display: inline-block;
`;

// Styled para React
export const StyledReactImage = styled(ImagemTecnologia)`
width: 10%;  /* Ajuste conforme necessário */
height: 10%; /* Ajuste conforme necessário */
margin: 1%;  /* Espaçamento entre as imagens */
margin-top:-11%;
margin-left: -30%;
border-radius: 8px; /* Borda arredondada */
display: inline-block;
`;

// Styled para C#
export const StyledCImage = styled(ImagemTecnologia)`
width: 20%;  /* Ajuste conforme necessário */
height: 20%; /* Ajuste conforme necessário */
margin: 1%;  /* Espaçamento entre as imagens */
margin-right: 0%;
margin-top:-14%;
border-radius: 8px; /* Borda arredondada */
display: inline-block;
`;

// Styled para MongoDB
export const StyledMongoImage = styled(ImagemTecnologia)`
width: 10%;  /* Ajuste conforme necessário */
height: 10%; /* Ajuste conforme necessário */
margin: 1%;  /* Espaçamento entre as imagens */
border-radius: 8px; /* Borda arredondada */
margin-top: -11%;
margin-left: 30%; /*
display: inline-block;
`;

// Styled para MySQL
export const StyledMysqlImage = styled(ImagemTecnologia)`
width: 10%;  /* Ajuste conforme necessário */
height: 10%; /* Ajuste conforme necessário */
margin: 1%;  /* Espaçamento entre as imagens */
border-radius: 8px; /* Borda arredondada */
display: inline-block;
margin-right: -60%;
margin-top: -6%;
`;

export const StyledOption = styled.option`
  font-size: 14px;
  padding: 12px;
  background-color: #f8f8f8;
  color: #333;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
    color: #000;
  }

  &:focus {
    outline: none;
    background-color: #d0d0d0;
    color: #000;
  }
`;

export const Column = styled.div`
margin-left: 10px;

align-items: flex;
`;

const pulse = keyframes`
  0% {
    border-color: #333;
  }
  50% {
    border-color: #ff0000; /* Cor da borda na metade da animação */
  }
  100% {
    border-color: #333;
  }
`;

export const TwoColumnContainer = styled.div`
  display: flex;
  gap: 20px; /* Adiciona um espaçamento entre as colunas */
`;

export const StyledDiv = styled.div`
  /* Outros estilos... */

  /* Adiciona estilos específicos para os selects */
  select {
    margin-bottom: 10px;
    padding: 8px;
    border: 2px solid #aaa;
    transition: border 0.3s ease;

    &:hover {
      border-color: #555;
    }

    &:focus {
      border-color: #ff0000;
    }

    /* Define uma largura fixa para os selects */
    width: 150px;
  }
`;


// Se você estiver usando Styled Components, adicione ao seu arquivo HomeStyles.js


