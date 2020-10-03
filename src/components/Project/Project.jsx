import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../Project/Project.css';
import Title from '../Titles/Title';
import ProjectImg1 from '../../images/work/nuru10.png';
import ProjectImg2 from '../../images/work/ko4.png';
import ProjectImg9 from '../../images/work/ko3.png';
import ProjectImg3 from '../../images/work/robo.png';
import ProjectImg4 from '../../images/work/compassionate1.png';
import ProjectImg8 from '../../images/work/compassionate.png';
import ProjectImg5 from '../../images/work/music.jpg';
import ProjectImg7 from '../../images/work/nuru8.png';

const Project = () => {
  const projectTitleText =
    'I believe in problem solving, and web development is all about solving those problems';
  return (
    <div className='project__section'>
      <Title
        smallTitle='projects'
        bigTitle='My Projects'
        titleText={projectTitleText}
      />
      <div className='projects__container'>
        <div className='project__item'>
          <div className='project__photo'>
            <div
              className='photo-big'
              style={{
                backgroundImage: `url(${ProjectImg1})`,
              }}
            ></div>
            <div
              className='photo-small'
              style={{
                backgroundImage: `url(${ProjectImg7})`,
              }}
            ></div>
            <button to='contact' className='project__hire__btn'>
              <span>HIRE ME</span>
            </button>
          </div>
          <div className='project__description'>
            <h5>Website</h5>
            <h2>Nuru Palace Hotel</h2>
            <p>
              Nuru Palace Hotel is holiday letting company, based in Nakuru,
              Kenya.
            </p>
            <p>
              They had
              <Link to='https://nurupalacehotel.com/'>
                <span>this</span>
              </Link>
              outdated, unresponsive and visually not appealing website, which
              resulted to a bad user experience, particularly on mobile devices.
              The company therefore needed a fresh of their brand and an updated
              website that was responsive and easy to use, which I was able to
              put in place.
            </p>
            <div className='process__container'>
              <h5>Process</h5>
              <ul>
                <li>
                  <span>Discovery</span>
                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Research</span>

                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Prototype</span>

                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Design</span>

                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Build</span>

                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Test</span>

                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Live</span>
                </li>
              </ul>
            </div>
            <div className='project__details__container'>
              <h5>Details</h5>
              <div className='project__info'>
                <div className='client__name'>
                  <h6>Client:</h6>
                  <p>Nuru Palace</p>
                </div>
                <div className='service__offered'>
                  <h6>Services:</h6>
                  <p>Web development</p>
                </div>
                <div className='final__website'>
                  <h6>Website:</h6>
                  <p>
                    <Link to='https://nurupalacehotel.netlify.com/'>
                      nurupalace.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='project__item'>
          <div className='project__photo'>
            <div
              className='photo-big'
              style={{
                backgroundImage: `url(${ProjectImg4})`,
              }}
            ></div>
            <div
              className='photo-small'
              style={{
                backgroundImage: `url(${ProjectImg8})`,
              }}
            ></div>
            <Link className='project__hire__btn' to='contact' smooth={true}>
              <span>HIRE ME</span>
            </Link>
          </div>
          <div className='project__description'>
            <h5>Website</h5>
            <h2>Compassionate Love</h2>
            <p>
              Compassionate Love Center is a christian charity organization,
              based in Kenya. The organization had no website to spread their
              word and work to the people.
            </p>
            <p>
              Being able to bring forth expertise in design, installation,
              testing and maintenance of web systems, I was able to create a
              website for them.
            </p>
            <div className='process__container'>
              <h5>Process</h5>
              <ul>
                <li>
                  <span>Discovery</span>
                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Research</span>

                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Prototype</span>

                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Design</span>

                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Build</span>

                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Test</span>

                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Live</span>
                </li>
              </ul>
            </div>

            <div className='project__details__container'>
              <h5>Details</h5>
              <div className='project__info'>
                <div className='client__name'>
                  <h6>Client:</h6>
                  <p>Compassionate Love</p>
                </div>
                <div className='service__offered'>
                  <h6>Services:</h6>
                  <p>Web development</p>
                </div>
                <div className='final__website'>
                  <h6>Website:</h6>
                  <p>
                    <Link to='https://compassionatelove.netlify.app/'>
                      <span>Compassionate Love</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='project__item'>
          <div className='project__photo'>
            <div
              className='photo-big'
              style={{
                backgroundImage: `url(${ProjectImg5})`,
              }}
            ></div>
            <div
              className='photo-small'
              style={{
                backgroundImage: `url(${ProjectImg5})`,
              }}
            ></div>
            <Link to='contact' className='project__hire__btn'>
              <span>HIRE ME</span>
            </Link>
          </div>
          <div className='project__description'>
            <h5>website</h5>
            <h2>Music Portfolio</h2>
            <p>
              Kayate Koll is a music artist, who had a problem of accelerating
              his career, by his music reaching out to more supporters.
            </p>
            <p>
              I noticed Kayate's problem and suggested that having a solid
              website, which I was able to put in place, could solve his
              problem, by his work reaching out to more supporters.
            </p>
            <div className='process__container'>
              <h5>Process</h5>
              <ul>
                <li>
                  <span>Discovery</span>
                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Research</span>

                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Prototype</span>

                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Design</span>

                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Build</span>

                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Test</span>

                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Live</span>
                </li>
              </ul>
            </div>
            <div className='project__details__container'>
              <h5>Details</h5>
              <div className='project__info'>
                <div className='client__name'>
                  <h6>Client:</h6>
                  <p>Kayate Koll</p>
                </div>
                <div className='service__offered'>
                  <h6>Services:</h6>
                  <p>Web design</p>
                </div>
                <div className='final__website'>
                  <h6>Website:</h6>
                  <p>
                    <a href='https://modest-jackson-faee24.netlify.com/'>
                      <span>KayateKoll.com</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='project__item'>
          <div className='project__photo'>
            <div
              className='photo-big'
              style={{
                backgroundImage: `url(${ProjectImg2})`,
              }}
            ></div>
            <div
              className='photo-small'
              style={{
                backgroundImage: `url(${ProjectImg9})`,
              }}
            ></div>
            <Link className='project__hire__btn' to='contact' smooth={true}>
              <span>HIRE ME</span>
            </Link>
          </div>
          <div className='project__description'>
            <h5>website</h5>
            <h2>My Portfolio</h2>
            <p>
              This is my portfolio website where I'm able to showcase and bring
              forth expertise in design, installation, testing and maintenance
              of web systems.
            </p>
            <p>
              You might be tempted to ask, "why a portfolio as one of his
              projects?" Well, as a web developer, I believe in problem solving.
              This portfolio helps me connect with my clients and my fellow
              developers, to which I'm able to learn and grow my ideas.
            </p>
            <div className='process__container'>
              <h5>Process</h5>
              <ul>
                <li>
                  <span>Discovery</span>
                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Research</span>

                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Prototype</span>

                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Design</span>

                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Build</span>

                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Test</span>

                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Live</span>
                </li>
              </ul>
            </div>
            <div className='project__details__container'>
              <h5>Details</h5>
              <div className='project__info'>
                <div className='client__name'>
                  <h6>Client:</h6>
                  <p>K&O Technologies</p>
                </div>
                <div className='service__offered'>
                  <h6>Services:</h6>
                  <p>Portfolio development</p>
                </div>
                <div className='final__website'>
                  <h6>Website:</h6>
                  <p>
                    <a href='https://nurupalacehotel.netlify.com/'>
                      <span>nurupalace.com</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='project__item'>
          <div className='project__photo'>
            <div
              className='photo-big'
              style={{
                backgroundImage: `url(${ProjectImg3})`,
              }}
            ></div>
            <div
              className='photo-small'
              style={{
                backgroundImage: `url(${ProjectImg3})`,
              }}
            ></div>

            <Link className='project__hire__btn' to='contact' smooth={true}>
              <span>HIRE ME</span>
            </Link>
          </div>
          <div className='project__description'>
            <h5>website</h5>
            <h2>Face Recognition App</h2>
            <p>
              This a face recognition app built in react. You can paste your
              image url, and the app will do the magic of detecting a face in
              your image.
            </p>
            <p>
              Creating this project helped me master react, APIs and most full
              stack web development.
            </p>
            <div className='process__container'>
              <h5>Process</h5>
              <ul>
                <li>
                  <span>Discovery</span>
                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Research</span>
                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Prototype</span>
                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Design</span>
                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Build</span>
                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Test</span>
                  <FaLongArrowAltRight />
                </li>
                <li>
                  <span>Live</span>
                </li>
              </ul>
            </div>
            <div className='project__details__container'>
              <h5>Details</h5>
              <div className='project__info'>
                <div className='client__name'>
                  <h6>Client:</h6>
                  <p>K&O Technologies</p>
                </div>
                <div className='service__offered'>
                  <h6>Services:</h6>
                  <p>Learning</p>
                </div>
                <div className='final__website'>
                  <h6>Website:</h6>
                  <p>
                    <a href='https://ko-technologies.netlify.app/'>
                      <span>ko-technologies.com</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
