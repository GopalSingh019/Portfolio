import React from 'react';
import Contact from './Components/contact/Contact';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Experience from './Components/experience/Experience';
import About from './Components/About/About';
import Portfolio from './components/portfolio/portfolio';
import Footer from './Components/footer/footer';


function app() {
  return (
    <div>
      <Header  />
      <Nav  />
      <About/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default app