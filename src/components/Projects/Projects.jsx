import React from 'react';
import { FaLongArrowAltRight, FaLink, FaGithub } from 'react-icons/fa';
import './Projects.css';
import Title from '../Titles/Title';
import { projects } from './projectsData';
import { Link } from 'react-router-dom';

const Project = () => {
  const projectTitleText =
    'I believe in problem solving, and web development is all about solving those problems';

  return (
    <section className='project__section' id='projects'>
      <Title
        smallTitle='projects'
        bigTitle='My Projects'
        titleText={projectTitleText}
      />
      <div className='projects__container'>
        {projects.map((project) => {
          const {
            id,
            photoBig,
            github,
            projectLink,
            photoSmall,
            projectTitle,
            projectDetails,
            service,
          } = project;
          return (
            <article key={id} className='project__item'>
              <div className='project__photo'>
                <div className='work-item'>
                  <img className='photo-big' src={photoBig} alt='project-img' />
                  <div className='work-inner'>
                    <div className='work-info'>
                      <Link
                        to={{
                          pathname: projectLink,
                        }}
                        target='_blank'
                      >
                        <span>
                          <FaLink />
                        </span>
                      </Link>
                      <Link
                        to={{
                          pathname: github,
                        }}
                        target='_blank'
                      >
                        <span>
                          <FaGithub />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  className='photo-small'
                  style={{
                    backgroundImage: `url(${photoSmall})`,
                  }}
                ></div>
              </div>
              <div className='project__description'>
                <h3>
                  <Link
                    to={{
                      pathname: projectLink,
                    }}
                    target='_blank'
                  >
                    <span>0{id}.</span>
                    {projectTitle}
                  </Link>
                </h3>
                <p>{projectDetails}</p>
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
                      <h4>Client:</h4>
                      <p>{projectTitle}</p>
                    </div>
                    <div className='service__offered'>
                      <h4>Services:</h4>
                      <p>{service}</p>
                    </div>
                    <div className='final__website'>
                      <h4>Website:</h4>
                      <p>
                        <Link
                          to={{
                            pathname: projectLink,
                          }}
                          target='_blank'
                        >
                          {projectTitle}
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Project;
