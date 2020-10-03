import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contact';
import Footer from './components/Footer/Footer';
import HireMe from './components/HireMe/HireMe';
import Project from './components/Project/Project';
import AboutMe from './components/AboutMe/AboutMe';

const App = () => {
  return (
    <main className='main-container' id='root-app'>
      <Navigation />
      <Hero />
      <AboutMe />
      <Skills />
      <Services />
      <Projects />
      <Project />
      <HireMe />
      <Contacts />
      <Footer />
    </main>
  );
};

export default App;
