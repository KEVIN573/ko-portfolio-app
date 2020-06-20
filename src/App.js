import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Hero  from './components/Hero/Hero';
import About from './components/About/About';
import Skills  from './components/Skills/Skills';
import Services  from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contact';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return ( 
      <main className='main-container' id='root-app'>
       
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contacts />
        <Footer />
      </main>
     );
  }
}
 
export default App;

