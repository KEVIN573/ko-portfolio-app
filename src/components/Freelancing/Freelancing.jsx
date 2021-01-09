import React from 'react';
import { Link } from 'react-router-dom';
import './Freelancing.css';

const Freelancing = () => {
  return (
    <div className='button-part'>
      <Link
        className='hire-btn upwork'
        to={{
          pathname: 'https://www.upwork.com/freelancers/~01c404581bb31bf21d',
        }}
        target='_blank'
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
      </Link>
      <Link
        className='hire-btn freelancer'
        to={{
          pathname: 'https://www.freelancer.com/u/KevinOchien',
        }}
        target='_blank'
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
      </Link>
    </div>
  );
};

export default Freelancing;
