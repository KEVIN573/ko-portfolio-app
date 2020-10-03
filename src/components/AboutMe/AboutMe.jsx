import React from 'react';
import '../AboutMe/AboutMe.css';

const AboutMe = () => {
  return (
    <section className='section'>
      <div className='about__container'>
        <div className='about__content'>
          <div className='about__items'>
            <h5>ABOUT Me</h5>
            <h2>Get To Know Me</h2>
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
            <a href='aboutus.html' className='btn'>
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
