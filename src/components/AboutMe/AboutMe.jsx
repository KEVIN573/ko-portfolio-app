import React from 'react';
import '../AboutMe/AboutMe.css';

const AboutMe = () => {
  return (
    <section className='section' id='about'>
      <div className='about__container'>
        <div className='about__content'>
          <div className='about__items'>
            <h5>ABOUT Me</h5>
            <h2>Get To Know Me</h2>
            <p>
              Hello, I’m <i>Kevin Ochieng</i>, experienced Web Developer, with 4
              years experience, tuned in all stages of advanced web development.
            </p>
            <p>
              I’m knowledgeable in user interface, testing, and debugging
              processes. Bringing forth expertise in design, installation,
              testing and maintenance of web systems.
            </p>
            <p>
              Equipped with a diverse and promising skill-set. Proficient in an
              assortment of technologies, from front-end(HTML5, CSS3, React js
              and Javascript) to back-end(Node js, Express js and PostgreSQL).
              Able to effectively self-manage during independent projects, as
              well as collaborate in a team setting.
            </p>
            <p>
              I'm extremely passionate in helping small businesses and
              institutions improve their online presence. For instance, I
              converted
              <a href='https://nurupalacehotel.com'>
                <span></span>this<span></span>
              </a>
              outdated, unresponsive and visually not appealing website, to
              <a href='https://nurupalacehotel.netlify.com/'>
                <span></span>this<span></span>
              </a>
              modern, professional and user friendly to their customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
