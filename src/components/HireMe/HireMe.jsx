import React from 'react';
import upwork from '../../images/Freelancer/upwork2.png';
import freelancer from '../../images/Freelancer/freelancer2.png';
import '../HireMe/HireMe.css';

const HireMe = () => (
  <section className='hireme-section'>
    <div className='content-part'>
      <h1>Let's work together!</h1>
      <p>
        I'm available for freelance projects. Hire me and get your project done.
      </p>
    </div>
    <div className='button-part'>
      <a
        href='https://www.upwork.com/freelancers/~01c404581bb31bf21d'
        target='blank'
        class='hire-btn upwork'
      >
        <span
          class='ink'
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
        class='hire-btn freelancer'
      >
        <span
          class='ink'
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

export default HireMe;
