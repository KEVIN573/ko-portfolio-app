import React, { Component } from 'react';
import Title from '../Titles/Title';
import ProjectImg1 from '../../images/work/nuru13.png';
import ProjectImg2 from '../../images/work/ko4.png';
import ProjectImg3 from '../../images/work/robo.png';
import ProjectImg4 from '../../images/work/compassionate2.png';
import ProjectImg5 from '../../images/work/music.jpg';
import ProjectImg6 from '../../images/work/6.jpg';
import '../Projects/Projects.css';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          url: 'https://nurupalacehotel.netlify.com/',
          img: ProjectImg1,
          title: 'Nuru Palace Hotel',
          description: 'Created a Website for Nuru Palace Hotel.',
          type: 'Website',
        },

        {
          url: 'https://ko-technologies.netlify.app/',
          img: ProjectImg2,
          title: ' My Portfolio website',
          description:
            ' Built My Personal Website from Scratch. Check! it out.',
          type: ' Website',
        },

        {
          url: 'https://ko-robofriends.netlify.com',
          img: ProjectImg3,
          title: 'Robofriends API',
          description: ' Robofriends Project',
          type: 'Website',
        },

        {
          url: 'https://compassionatelove.netlify.app/',
          img: ProjectImg4,
          title: 'Charity website',
          description: 'Built this Charity website from scratch.',
          type: ' Website',
        },

        {
          url: 'https://modest-jackson-faee24.netlify.com/',
          img: ProjectImg5,
          title: 'Music portfolio website',
          description: 'Created This Music portfolio website.',
          type: ' Website',
        },

        {
          url: 'https://hardcore-saha-4a1bfd.netlify.com/',
          img: ProjectImg6,
          title: 'Calculator',
          description: 'Created This Calculator from scratch.',
          type: ' Website',
        },
      ],
    };
  }
  render() {
    return (
      <section className='portfolio-section' id='projects'>
        <Title title='Projects' />
        <div className='portfolio-container'>
          {this.state.projects.map((projectCard) => {
            return (
              <article key={projectCard.title} className='project-card'>
                <a className='work-item' href={projectCard.url}>
                  <img src={projectCard.img} alt='project-img' />
                  <div className='work-inner'>
                    <div className='work-info'>
                      <h2>{projectCard.title}</h2>
                      <p>{projectCard.description}</p>
                      <span>{projectCard.type}</span>
                    </div>
                  </div>
                </a>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Projects;
