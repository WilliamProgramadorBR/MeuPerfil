import React from 'react';
import { Footer, FooterContent, FooterIcons } from './rodapestyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const FooterComponent = () => {
  const handleEmailClick = () => {
    navigator.clipboard.writeText('william.devbackend@gmail.com');
    alert('Email copiado para a área de transferência!');
  };

  const handleWhatsappClick = () => {
    window.location.href = 'https://wa.me/5521977150144';
  };

  return (
    <Footer>
      <FooterContent>
        <p><FontAwesomeIcon icon={faWhatsapp} /> WhatsApp: +55 21 97715-0144</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> Email: william.devbackend@gmail.com</p>
        <p><FontAwesomeIcon icon={faPhone} /> Desenvolvido por: William Oliveira</p>
      </FooterContent>
      <FooterIcons>
        <FontAwesomeIcon icon={faWhatsapp} onClick={handleWhatsappClick} />
        <FontAwesomeIcon icon={faEnvelope} onClick={handleEmailClick} />
        <FontAwesomeIcon icon={faPhone} />
      </FooterIcons>
    </Footer>
  );
};

export default FooterComponent;
