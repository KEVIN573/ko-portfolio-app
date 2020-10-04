import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Contacts from './components/Contacts/Contact';
import Footer from './components/Footer/Footer';
import HireMe from './components/HireMe/HireMe';
import Projects from './components/Projects/Projects';
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
      <HireMe />
      <Contacts />
      <Footer />
    </main>
  );
};

export default App;
