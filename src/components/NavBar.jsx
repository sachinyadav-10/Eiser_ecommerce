// src/components/NavBar.jsx
import React from 'react';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <div className="nav">
      <div className="contact">
        <ul>
          <li>Phone: +01 256 25 235</li>
          <li>Email: info@eiser.com</li>
        </ul>
      </div>
      <div className="option">
        <ul>
          <li>GIFT CARD</li>
          <li>TRACK ORDER</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
