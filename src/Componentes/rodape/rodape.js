import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { profile } from '../../data/portfolio';
import { Footer, FooterContent, FooterIcons } from './rodapestyles';

const FooterComponent = () => {
  const year = new Date().getFullYear();

  return (
    <Footer>
      <FooterContent>
        <p>© {year} William Oliveira. Portfolio, projetos, apps e Rotina AI.</p>
        <FooterIcons>
          <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </FooterIcons>
      </FooterContent>
    </Footer>
  );
};

export default FooterComponent;
