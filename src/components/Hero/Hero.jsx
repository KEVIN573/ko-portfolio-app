import React from 'react';
import ProfileImg from '../../images/profile-images/profile.jpg';
import { Link, animateScroll as scroll } from 'react-scroll';
import SocialLinks from '../SocialLinks/SocialLinks';
import '../Hero/Hero.css';

const Hero = () => {
  return (
    <header className='hero'>
      <div className='section-center hero-center'>
        <article class='hero-info'>
          <div class='underline'></div>
          <h1>Hello, i'm Kevin</h1>
          <h4>freelance fullstack web developer</h4>
          <Link href='contact.html' className='btn hero-btn'>
            <span>hire me</span>
          </Link>

          <div className='social-icons hero-icons'>
            <SocialLinks />
          </div>
        </article>
      </div>
    </header>
  );
};

export default Hero;
