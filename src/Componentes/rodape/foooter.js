import React from 'react';

import {
  FooterContainer,ImagemGmail,ImagemLinkedin,ImagemWhatsApp,LinkedInText,
  
} from './footerStyle';import suaFoto from '../../Fotos/1694574063587.jpeg';
import linkedin from '../../Fotos/linkedin.gif';
import zap from '../../Fotos/Gifzap.gif';
import gmail from '../../Fotos/gmail.gif'; // Importe seus styled components





const Footer = () => {

  
  return (
    <FooterContainer>
     <a href="https://www.linkedin.com/in/william-oliveira-2b944417a/" target="_blank" rel="noopener noreferrer">
      <ImagemLinkedin src={linkedin} alt="WhatsApp" />
      </a>
     <a href='https://mail.google.com/mail/u/0/?pli=1#inbox?compose=CllgCJTJnWsQQGHctSNqPHqFXtzkgrRTfxCDVmJPDzfcDsFQGfzRjJDnzqfxpwXmPRZrjFGTtXB' target='_blank' rel='noopener noreferrer'>
        
        <ImagemGmail src={gmail} alt="Gmail" /> 
      </a>

      <a href="https://api.whatsapp.com/send?phone=5521981695297" target="_blank" rel="noopener noreferrer">
        
        <ImagemWhatsApp src={zap} alt="WhatsApp" />
      </a>
      
    </FooterContainer>
  );
};

export default Footer;
