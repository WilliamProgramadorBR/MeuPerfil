import React from 'react';
import {
  BannerImage,
  BannerStyle
  
} from './StyleTopo.js';import banner from '../../Fotos/olamundo.gif'; 

function Header() {
 

  return (
    <div>
      
      <BannerStyle>
      <BannerImage src={banner}  />
      </BannerStyle> 
      
    </div>
  );
}

export default Header;
