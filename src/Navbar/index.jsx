import React from 'react';
import './index.css';

const Navbar = () =>  (
    <nav className="navbar">
      <div className="logo">Rayulu-7</div>
      <ul className="nav-items">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );


export default Navbar;
