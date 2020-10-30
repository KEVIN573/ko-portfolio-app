import React from 'react';
import '../Titles/Titles.css';

const Title = ({ smallTitle, bigTitle, titleText }) => {
  return (
    <div className='title__section'>
      <div className='title__content'>
        <h4>{smallTitle}</h4>
        <h2>{bigTitle}</h2>
        <p>{titleText}</p>
      </div>
    </div>
  );
};

export default Title;
