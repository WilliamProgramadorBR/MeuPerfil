import React from 'react';
import { Footer, FooterContent, FooterIcons } from './rodapestyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const FooterComponent = () => {
  // Função para abrir o cliente de e-mail padrão com um novo e-mail
  const handleEmailClick = () => {
    window.location.href = 'mailto:william.devbackend@gmail.com?subject=Assunto&body=Mensagem';
  };

  // Função para redirecionar para o WhatsApp
  const handleWhatsappClick = () => {
    window.location.href = 'https://wa.me/5521977150144';
  };

  // Função para iniciar uma chamada telefônica
  const handlePhoneClick = () => {
    window.location.href = 'tel:+5521977150144';
  };

  return (
    <Footer>
      <FooterContent>
        <p><FontAwesomeIcon icon={faWhatsapp} /> WhatsApp: +55 21 97715-0144</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> Email: william.devbackend@gmail.com</p>
        <p><FontAwesomeIcon icon={faPhone} /> Desenvolvido por: William Oliveira</p>
      </FooterContent>
      <FooterIcons>
        <FontAwesomeIcon icon={faWhatsapp} onClick={handleWhatsappClick} style={{ cursor: 'pointer' }} />
        <FontAwesomeIcon icon={faEnvelope} onClick={handleEmailClick} style={{ cursor: 'pointer' }} />
        <FontAwesomeIcon icon={faPhone} onClick={handlePhoneClick} style={{ cursor: 'pointer' }} />
      </FooterIcons>
    </Footer>
  );
};

export default FooterComponent;
