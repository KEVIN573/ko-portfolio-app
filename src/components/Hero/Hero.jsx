import React from 'react';
import { Link } from 'react-scroll';
import SocialLinks from '../SocialLinks/SocialLinks';
import '../Hero/Hero.css';

const Hero = () => {
  return (
    <header className='hero'>
      <div className='section-center hero-center'>
        <article className='hero-info'>
          <div className='underline'></div>
          <h1>Hello, i'm Kevin</h1>
          <h4>freelance fullstack web developer</h4>
          <button>
            <Link
              className='hero-btn'
              to='contact'
              smooth={true}
              duration={1000}
            >
              hire me
            </Link>
          </button>

          <div className='social-icons hero-icons'>
            <SocialLinks />
          </div>
        </article>
      </div>
    </header>
  );
};

export default Hero;
