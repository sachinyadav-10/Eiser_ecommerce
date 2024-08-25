import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/contact.css';

const ContactInfo = () => {
  return (
    <div className="info">
      <p><span className="icon">🏠</span> Buttonwood, California. Rosemead, CA 91770</p>
      <p><span className="icon">📱</span> 00 (440) 9865 562</p>
      <p>Mon to Fri 9am to 6pm</p>
      <p><span className="icon">✉️</span> support@colorlib.com</p>
      <p>Send us your query anytime!</p>
    </div>
  );
};

export default ContactInfo;
