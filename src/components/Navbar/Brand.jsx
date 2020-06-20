import React from 'react'
import logo from '../../images/logos/ko-logo.png';
import { animateScroll as scroll } from 'react-scroll';

const Brand = () => {

  let logoOnClick = (e) => {
    e.preventDefault();
    scroll.scrollToTop();
  }

  return (
    <div>
      <div className="logo">
        <img onClick={logoOnClick} src= {logo} alt="Company Logo" /> 
      </div>
    </div>
  )
}

export default Brand



