import React from 'react';
import { FaLaptopCode, FaCogs, FaServer, FaHandsHelping } from 'react-icons/fa';
import Title from '../Titles/Title';
import '../Services/Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'WEB DEVELOPMENT',
      info:
        'When it comes to functional and responsive websites, I got you covered.',
    },
    {
      icon: <FaCogs />,
      title: 'WEB MAINTENANCE',
      info:
        'In a position to doctor your website with the latest technologies.',
    },
    {
      icon: <FaServer />,
      title: 'BACKEND DEVELOPMENT',
      info: "I'm also specialized in back-end architecture of websites.",
    },
    {
      icon: <FaHandsHelping />,
      title: 'FREELANCER',
      info: 'I do freelancing, helping small businesses grow.',
    },
  ];

  const serviceText =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate exercitationem, id dolore ipsam dicta ipsum?';
  return (
    <section className='services-container' id='services'>
      <Title
        smallTitle='Services'
        bigTitle='My Services'
        titleText={serviceText}
      />
      <div className='services-center'>
        {services.map((serviceCard) => {
          return (
            <article key={serviceCard.title} className='service'>
              <span>{serviceCard.icon}</span>
              <h6>{serviceCard.title}</h6>
              <p>{serviceCard.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
