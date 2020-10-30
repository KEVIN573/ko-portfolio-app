import React from 'react';
import { Link } from 'react-scroll';
import logo from '../../images/logos/ko-logo.png';
import './Logo.css';

const Brand = () => {
  return (
    <div className='logo'>
      <Link to='https://ko-technologies.netlify.app'>
        <img src={logo} alt='K&O Technologies' />
      </Link>
    </div>
  );
};

export default Brand;
