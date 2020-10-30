import React from 'react';
import '../Skills/Skills.css';

const Skills = () => (
  <section className='section skills-section'>
    <div className='skills-container section-center'>
      <div className='skills-left'>
        <div className='skills'>
          <div className='skills-label'>
            <h3>HTML</h3>
            <span className='percentage'>90%</span>
            <div style={{ clear: 'both' }}></div>
          </div>
          <div className='bar'>
            <div className='progress' style={{ width: ' 90%' }}></div>
          </div>
        </div>

        <div className='skills'>
          <div className='skills-label'>
            <h3>CSS</h3>
            <span className='percentage'>90%</span>
            <div style={{ clear: 'both' }}></div>
          </div>
          <div className='bar'>
            <div className='progress' style={{ width: ' 80%' }}></div>
          </div>
        </div>

        <div className='skills'>
          <div className='skills-label'>
            <h3>Javascript</h3>
            <span className='percentage'>70%</span>
            <div style={{ clear: 'both' }}></div>
          </div>
          <div className='bar'>
            <div className='progress' style={{ width: '70%' }}></div>
          </div>
        </div>
      </div>

      <div className='skills-right'>
        <div className='skills'>
          <div className='skills-label'>
            <h3>React js</h3>
            <span className='percentage'>80%</span>
            <div style={{ clear: 'both' }}></div>
          </div>
          <div className='bar'>
            <div className='progress' style={{ width: '80%' }}></div>
          </div>
        </div>

        <div className='skills'>
          <div className='skills-label'>
            <h3>Node.js</h3>
            <span className='percentage'>60%</span>
            <div style={{ clear: 'both' }}></div>
          </div>

          <div className='bar'>
            <div className='progress' style={{ width: '60%' }}></div>
          </div>
        </div>

        <div className='skills'>
          <div className='skills-label'>
            <h3>PostgreSQL</h3>
            <span className='percentage'>60%</span>
            <div style={{ clear: 'both' }}></div>
          </div>
          <div className='bar'>
            <div className='progress' style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
