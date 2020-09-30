import React from 'react';
import logo from '../../images/logos/ko-logo.png';
import { animateScroll as scroll } from 'react-scroll';
import './Logo.css';

const Brand = () => {
  let logoOnClick = (e) => {
    scroll.scrollToTop();
  };

  return (
    <div className='logo'>
      <img onClick={logoOnClick} src={logo} alt='K&O Technologies' />
    </div>
  );
};

export default Brand;
