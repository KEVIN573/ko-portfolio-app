import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import '../Footer/Footer.css';

const Footer = () => {
  return (
    <footer className='footer-section'>
      <SocialLinks />
      <div className='footer-text-container'>
        <p>Copyright &copy; {new Date().getFullYear()}, All rights Reserved.</p>
        <p>Created By K&O Technologies.</p>
      </div>
    </footer>
  );
};

export default Footer;
