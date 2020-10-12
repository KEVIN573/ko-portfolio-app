import React from 'react';
import Title from '../Titles/Title';
import { servicesData } from './ServicesData';
import '../Services/Services.css';

const Services = () => {
  const serviceHeadingText =
    'Successful people are always looking for opportunities to help others. Let’s work together';

  return (
    <section className='services-container' id='services'>
      <Title
        smallTitle='Services'
        bigTitle='My Services'
        titleText={serviceHeadingText}
      />
      <div className='services-center'>
        {servicesData.map((service) => {
          return (
            <article key={service.title} className='service'>
              <span>{service.icon}</span>
              <h6>{service.title}</h6>
              <p>{service.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
