import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-image: linear-gradient(135deg, #9da2b2 50%, #e5e3de 30%, #576687 100%);
  padding: 20px; /* Ajuste o valor do padding conforme necessário */
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 300px) {
    flex-direction: column; /* Altera para uma coluna quando a largura da tela é menor ou igual a 300 pixels */
  }
`;

export const LinkedInText = styled.span`
  /* Adicione estilos adicionais para o texto do LinkedIn se necessário */
`;

export const ImagemWhatsApp = styled.img`
  width: 30px; /* Ajuste o valor conforme necessário */
  height: 30px; /* Ajuste o valor conforme necessário */
`;

export const ImagemLinkedin = styled.img`
  width: 30px; /* Ajuste o valor conforme necessário */
  height: 30px; /* Ajuste o valor conforme necessário */
`;

export const ImagemGmail = styled.img`
  width: 30px; /* Ajuste o valor conforme necessário */
  height: 30px; /* Ajuste o valor conforme necessário */
`;
