import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik+Iso&family=Ubuntu:wght@300&display=swap');

  body {
    font-family: 'Rubik Iso', 'Ubuntu', sans-serif; /* Define a fonte para o corpo do documento */
  }
`;








export const StyledTexto = styled.a`
font-size: 36px;
font-weight: bold;
color: #333;
font-family: 'Rubik Iso', cursive;
font-family: 'Ubuntu', sans-serif;
`;



export const AtualizarButon = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Adicione mais estilos conforme necessário

export const ListaContainer = styled.div`
  background-color: #f7f7f7;
  padding: 20px;
`;

export const Celula = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.isOdd ? "#f2f" : "#d9d9")};
  padding: 10px;
  border: 1px solid #ccc;
`;

export const GridContainer = styled.div`
  display: grid;
  gap: 10px;
`;

export const DetalhesProduto = styled.div`
  display: flex;
  justify-content: space-between; /* Alinha os itens aos cantos direito e esquerdo */
  align-items: center; /* Centraliza verticalmente */
  margin-bottom: 10px;
`;

export const DetalhesTexto = styled.p`
  flex: 1; /* Ocupar o espaço disponível entre os detalhes */
  margin-right: 50px; /* Adicionando espaço entre os detalhes */
  white-space: pre-line; 
`;

export const ValorTexto = styled.p`
  margin-right: 150px; /* Adicionando espaço entre os detalhes */
`;

export const TipoTexto = styled.p`
  margin-right: 150px; /* Adicionando espaço entre os detalhes */
`;

export const LocalTexto = styled.p`
  margin-right: 150px; /* Adicionando espaço entre os detalhes */
`;

export const EstoqueTexto = styled.p`
  margin-right: 150px; /* Adicionando espaço entre os detalhes */
`;

export const DataTexto = styled.p`
  margin-right: 150px; /* Adicionando espaço entre os detalhes */
`;



export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const InputLabel = styled.label`
  margin-right: 5px;
`;


export const InputField = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover,
  &:focus {
    border-color: #0099cc;
    box-shadow: 0 0 5px rgba(0, 153, 204, 0.5); /* Adiciona uma sombra suave ao focar */
  }
`;



export const Addbutton = styled.button`
padding: 10px 20px;
  background-color: #0099cc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0077aa; /* Cor alterada ao passar o mouse */
  }

`;

export const StyledSelect = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  transition: border-color 0.3s ease;
  width: 100%;
  max-width: 200px; /* Defina a largura máxima desejada */
  background-color: #fff;
  height: 32px; /* Defina a altura desejada para o select */

  &:hover,
  &:focus {
    border-color: #0099cc;
  }
  
  /* Novos estilos para o dropdown */
  appearance: none; /* Remove o estilo nativo do dropdown */
  background-color: #fff;
  background-image: url("data:image/svg+xml;utf8,<svg fill='%23555' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M7.406 8.594l4 4 4-4h-8zm0-3l-4 4 4 4h8l-4-4-4 4V5z'></path></svg>");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 18px;
  padding-right: 28px; /* Espaçamento para a seta */
  cursor: pointer;

  /* Estilizar as opções */
  option {
    background-color: #fff; /* Cor de fundo das opções */
    color: #333; /* Cor do texto das opções */
    height: 32px; /* Defina a altura das opções para que sejam iguais ao select */
    padding: 8px; /* Adicione um espaçamento interno nas opções */
  }
`;





export default GlobalStyle;