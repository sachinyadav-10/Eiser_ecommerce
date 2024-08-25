import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import '../styles/contact.css';

const Contact = () => {
  return (
    <>
    <main className="main">
      <h1>Get in Touch</h1>
      <div className="contact-container">
        <ContactForm />
        <ContactInfo />
      </div>
    </main>
    </>
  );
};

export default Contact;
