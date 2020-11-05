import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { links } from './data';
import logo from '../../images/logos/ko-logo2.png';
import '../Navbar/Navbar.css';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const navToggle = () => setShowLinks(!showLinks);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  return (
    <animated.nav style={barAnimation}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <div className='burger-wrapper'>
            <button className={showLinks ? 'open' : ''} onClick={navToggle}>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
            </button>
          </div>
        </div>

        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, path, text } = link;
              return (
                <li key={id}>
                  <Link
                    className='link'
                    to={path}
                    smooth={true}
                    duration={1000}
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </animated.nav>
  );
};

export default Navbar;
