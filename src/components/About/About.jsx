import React from 'react';
import Title from '../Titles/Title';
import SocialLinks from '../SocialLinks/SocialLinks';
import Profile from '../../images/profile-images/profile.jpg';
import '../About/About.css';

const About = () => {
  return (
    <section className='about-section' id='about'>
      <Title title='About Me' />

      <div className='about-container'>
        <div className='about-img'>
          <img src={Profile} alt='My profile' />
          <SocialLinks />
        </div>

        <div className='about-text'>
          <div className='about-text-center'>
            <p>
              Kevin Ochieng is an Experienced Web Developer, tuned in all stages
              of advanced web development. Knowledgeable in user interface,
              testing, and debugging processes. Bringing forth expertise in
              design, installation, testing and maintenance of web systems.
              Equipped with a diverse and promising skill-set. Proficient in an
              assortment of technologies, from front-end(HTML5, CSS3, React J
              and Javascript) to back-end(Node Js, Express Js and PostgreSQL).
              Able to effectively self-manage during independent projects, as
              well as collaborate in a team setting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
