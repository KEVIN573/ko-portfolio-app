import React from 'react';
import '../Titles/Titles.css';

const Title = ({ smallTitle, bigTitle, titleText }) => {
  return (
    <div class='title__section'>
      <div className='title__content'>
        <h5>{smallTitle}</h5>
        <h2>{bigTitle}</h2>
        <p>{titleText}</p>
      </div>
    </div>
  );
};

export default Title;
