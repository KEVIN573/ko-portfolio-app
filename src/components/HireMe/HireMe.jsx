import React from 'react';
import '../HireMe/HireMe.css';
import Title from '../Titles/Title';
import Freelancing from '../Freelancing/Freelancing';
import { Link } from 'react-scroll';

const HireMe = () => {
  const hireText =
    'Got a great idea that is running through your mind, or having some challenges that you need help solving? Trust me, I’m a good listener.';
  return (
    <section className='hireme-section'>
      <Title
        smallTitle='Hire me'
        bigTitle='Let’s Work Together!'
        titleText={hireText}
      />
      <div className='hire-quote-btn-container'>
        <Link className='btn hire-quote-btn ' to='contact' smooth={true}>
          <span>get a quote</span>
        </Link>
      </div>
      <div className='divider'>
        <span>Or</span>
      </div>
      <div className='hireme-text'>
        <p>HIRE ME</p>
      </div>
      <Freelancing />
    </section>
  );
};

export default HireMe;
