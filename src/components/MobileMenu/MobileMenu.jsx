import React from 'react';
import { useSpring, animated } from 'react-spring';
import './MobileMenu.css';
import { Link, animateScroll as scroll } from 'react-scroll';

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <animated.div
        className='mobile__links__container'
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <div className='mobile__links-content'>
          <Link
            className='link'
            to='root-app'
            onClick={props.handleNavbar}
            smooth={true}
            duration={1000}
          >
            Home
          </Link>
          <Link
            className='link'
            to='about'
            onClick={props.handleNavbar}
            smooth={true}
            duration={1000}
          >
            About
          </Link>
          <Link
            className='link'
            to='services'
            onClick={props.handleNavbar}
            smooth={true}
            duration={1000}
          >
            Services
          </Link>
          <Link
            className='link'
            to='projects'
            onClick={props.handleNavbar}
            smooth={true}
            duration={1000}
          >
            Project
          </Link>
          <Link
            className='link'
            to='contact'
            onClick={props.handleNavbar}
            smooth={true}
            duration={1000}
          >
            Contact
          </Link>
        </div>
      </animated.div>
    );
  }
  return null;
};

export default CollapseMenu;
