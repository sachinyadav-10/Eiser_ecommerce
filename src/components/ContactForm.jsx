import React from 'react';
import '../styles/contact.css';

const ContactForm = () => {
  return (
    <div className="form">
      <form action="#">
        <textarea name="message" placeholder="Enter Message" rows="5" required></textarea>
        <input type="text" name="name" placeholder="Enter your name" required />
        <input type="email" name="email" placeholder="Enter email address" required />
        <input type="subject" name="subject" placeholder="Enter Subject" required />
        <button type="submit">SEND MESSAGE</button>
      </form>
    </div>
  );
};

export default ContactForm;
