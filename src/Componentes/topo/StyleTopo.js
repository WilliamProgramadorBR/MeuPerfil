import styled from 'styled-components';

export const BannerStyle = styled.div`
width: 100%;
max-width: 100%; /* Garante que o contêiner não ultrapasse a largura máxima da tela */
height: 100px; /* Ajuste a altura conforme necessário */

@media (max-width: 768px) {
  height: 50px; /* Ajuste a altura para telas menores */
}
`;


export const BannerImage = styled.img`
  width: 80%; /* Define a largura para 100% do contêiner pai */
  height: 300%;
  margin-left: 9%; /* Mantém a proporção da imagem */
`;

//export const GlobalStyle = createGlobalStyle`
 // body {
    //margin: 0;
  //  font-family: 'Arial', sans-serif;
    //background: linear-gradient(to bottom, #007bff, #0056b3); /* Ajuste as cores conforme necessário */
    //color: #fff; /* Cor do texto no corpo, ajuste conforme necessário */
  //}
//`;

