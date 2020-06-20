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

                <div className="about-img">
                    <img src={Profile} alt="My profile" /> 
                    <SocialLinks />    
                </div>

                <div className="about-text">
                    <div className='about-text-center'>
                        <p>
                            Hello, I'm <a href="index.html"><strong>Kevin Ochieng</strong></a>, an experienced  web developer and designer. I channel 
                            most of my energy and passion into building amazing and functional web experiences, from  
                            front-end(HTML5, CSS3, ReactJs and Javascript) to back-end(Node Js, Express Js and PostgreSQL).
                        </p>
                        <p>
                            I'm always tuned into helping small businesses and institutions improve their online presence.
                            I consider myself a 'forever student', eager to always both learn and stay tuned with the latest technologies and strategies.
                        </p>
                    </div>   
                </div>	
            </div>
        </section> 
    );
}
 
export default About;