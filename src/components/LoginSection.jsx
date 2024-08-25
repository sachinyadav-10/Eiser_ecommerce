import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Loginsection.css';

function Login_section() {
  return (
    <>
      <div className="login-section">
        <p>
          If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing & Shipping section.
        </p>
        <input type="text" placeholder="Username or Email" required />
        <input type="password" placeholder="Password" required />
        <br />
        <label>
          <input type="checkbox" /> Remember me
        </label>
        <br />
        <button className="send-message-btn">Send Message</button>
      </div>
    </>
  );
}

export default Login_section;
