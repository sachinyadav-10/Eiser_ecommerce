// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footers.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <h3>Top Products</h3>
          <ul>
            <li>Managed Website</li>
            <li>Manage Reputation</li>
            <li>Power Tools</li>
            <li>Marketing Service</li>
          </ul>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>Jobs</li>
            <li>Brand Assets</li>
            <li>Investor Relations</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <h3>Features</h3>
          <ul>
            <li>Jobs</li>
            <li>Brand Assets</li>
            <li>Investor Relations</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <h3>Resources</h3>
          <ul>
            <li>Guides</li>
            <li>Research</li>
            <li>Experts</li>
            <li>Agencies</li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <p>&copy; 2024 Eiser. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
