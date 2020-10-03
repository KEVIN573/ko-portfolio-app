import React from 'react';
import '../HireMe/HireMe.css';
import { Link } from 'react-scroll';
import Title from '../Titles/Title';

const HireMe = () => {
  const hireText =
    'Got a great idea that is running through your mind, or having some challenges that you need help solving? Trust me, I am a good listener.';
  return (
    <section className='hireme-section'>
      <Title
        smallTitle='Hire me'
        bigTitle='Let’s Work Together!'
        titleText={hireText}
      />
      <div className='hire-quote-btn-container'>
        <Link className='hire-quote-btn' to='contact' smooth={true}>
          <span>REQUEST A QUOTE</span>
        </Link>
      </div>
      <div className='divider'>
        <span>Or</span>
      </div>
      <div className='hireme-text'>
        <p>HIRE ME</p>
      </div>
      <div className='button-part'>
        <a
          href='https://www.upwork.com/freelancers/~01c404581bb31bf21d'
          target='blank'
          className='hire-btn upwork'
        >
          <span
            className='ink'
            style={{
              height: '200px',
              width: '200px',
              top: '75px',
              left: '-20px',
            }}
          ></span>
        </a>
        <a
          href='https://www.freelancer.com/u/KevinOchien'
          target='blank'
          className='hire-btn freelancer'
        >
          <span
            className='ink'
            style={{
              height: '200px',
              width: '200px',
              top: '75px',
              left: '-20px',
            }}
          ></span>
        </a>
      </div>
    </section>
  );
};

export default HireMe;
