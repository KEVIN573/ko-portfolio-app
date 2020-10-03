import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';
import '../SocialLinks/SocialLinks.css';

const SocialLinks = () => (
  <div className='social-links'>
    <a href='https://www.facebook.com/KandOTechnologies'>
      <i>
        <FaFacebookF />
      </i>
    </a>
    <a href='https://twitter.com/KevinOc43940401'>
      <i>
        <FaTwitter />
      </i>
    </a>
    <a href='https://www.linkedin.com/in/kevin-ochiengg/'>
      <i>
        <FaLinkedinIn />
      </i>
    </a>
    <a href='https://github.com/KevinOchiengg'>
      <i>
        <FaGithub />
      </i>
    </a>
  </div>
);

export default SocialLinks;
