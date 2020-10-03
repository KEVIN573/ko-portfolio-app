import React from 'react';
import Title from '../Titles/Title';
import SocialLinks from '../SocialLinks/SocialLinks';
import Profile from '../../images/profile-images/profile.jpg';
import '../About/About.css';

const About = () => {
  const aboutText =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate exercitationem, id dolore ipsam dicta ipsum?';

  return (
    <section className='about-section' id='about'>
      <Title smallTitle='About' bigTitle='Get To Me' titleText={aboutText} />
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
              institutions improve their online presence. For instance, I
              converted
              <a href='https://nurupalacehotel.com'>this</a>
              outdated, unresponsive and visually not appealing website, to
              <a href='https://nurupalacehotel.netlify.com/'>this</a>
              modern, professional and user friendly to their customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
