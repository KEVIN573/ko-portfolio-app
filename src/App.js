import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Contacts from './components/Contacts/Contact';
import Footer from './components/Footer/Footer';
import HireMe from './components/HireMe/HireMe';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <main className='main-container' id='root-app'>
        <Navbar />
        <Hero />
        <AboutMe />
        <Skills />
        <Services />
        <Projects />
        <HireMe />
        <Contacts />
        <Footer />
      </main>
    </Router>
  );
};

export default App;
