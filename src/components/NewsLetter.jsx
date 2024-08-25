import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <h1>Subscribe to Our Newsletter</h1>
      <p>Stay updated with our latest news and offers.</p>
      <div className="form">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </section>
  );
};

export default NewsLetter;
