import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Technologies from './components/Technologies';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <WhyChooseUs />
        <Process />
        <Technologies />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
