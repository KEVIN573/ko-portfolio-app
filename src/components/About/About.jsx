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
              <strong>Kevin Ochieng</strong> is an experienced Web Developer,
              tuned in all stages of advanced web development. Knowledgeable in
              user interface, testing, and debugging processes. Bringing forth
              expertise in design, installation, testing and maintenance of web
              systems. Equipped with a diverse and promising skill-set.
              Proficient in an assortment of technologies, from front-end(HTML5,
              CSS3, React js and Javascript) to back-end(Node js, Express js and
              PostgreSQL). Able to effectively self-manage during independent
              projects, as well as collaborate in a team setting.
            </p>

            <p>
              I'm extremely passionate about helping small businesses and
              institutions improve their online presence. for instance, Nuru
              palace hotel had this <span>👉</span>(
              <a href='https://nurupalacehotel.com'>
                https://nurupalacehotel.com
              </a>
              ) outdated, unresponsive and visually not appealing website, that
              I was able to redesign to this <span>👉</span>(
              <a href='https://nurupalacehotel.netlify.com/'>
                https://nurupalacehotel.netlify.com/
              </a>
              ) and make it more professional and user friendly to their
              customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
