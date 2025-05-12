// src/App.jsx
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import AboutUs from './AboutUs';
import Services from './Services';
import Contact from './Contact';
import Reviews from './Reviews';
import Footer from './Footer';
import './index.css';

const App = () => {
  return (
    <>
    <Navbar />
    <div className="app">
      
      <Home />
      <AboutUs />
      <Services />
      <Contact />
      <Reviews />
      <Footer />
    </div>
    </>
  );
};

export default App;
