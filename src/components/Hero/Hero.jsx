import React from 'react';
import {Link} from 'react-scroll';
import '../Hero/Hero.css'

const Hero = () => {
    return (  
		<header className="intro-section" id="home">
            <div className="intro-content">
                <h1><span>Web</span> Developer</h1>
                <h6>from Kenya</h6>
                <p className="tagline">
                    <span className="change-container">
                        <span className="changing">get what you want!</span>
                        <span className="changing">how you want it!</span>
                        <span className="changing">when you want it!</span>
                    </span>
                </p>
                <div className="header-btn">
                    <Link className='btn' to='contact' smooth={true}><span>Get A Quote</span></Link>
                </div>
            
            </div>
        </header>		
    );
}
 
export default Hero;
