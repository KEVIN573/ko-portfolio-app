import React from 'react';
import Title from '../Titles/Title';
import { services } from './ServicesData';
import '../Services/Services.css';

const Services = () => {
  const serviceHeadingText =
    'Successful people are always looking for opportunities to help others. Let’s work together';

  return (
    <section className='section bg-grey' id='services'>
      <Title
        smallTitle='Services'
        bigTitle='my services'
        titleText={serviceHeadingText}
      />
      <div className='services-center section-center'>
        {services.map((service) => {
          const { icon, title, info } = service;
          return (
            <article key={title} className='service'>
              <i className='fas fa-code service-icon'>{icon}</i>
              <h4>{title}</h4>
              <p>{info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
