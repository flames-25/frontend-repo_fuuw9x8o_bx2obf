import React from 'react';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Quotes from './components/Quotes';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-white">
      <Hero />
      <Intro />
      <Quotes />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
