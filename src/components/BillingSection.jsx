import React from 'react';
import '../styles/billingSection.css';
import { Link } from 'react-router-dom';

function BillingSection() {
  return (
    <>
      <div className="billing-section">
        <h2>Billing Details</h2>
        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Last Name" required />
        <input type="text" placeholder="Company Name" />
        <input type="text" placeholder="Phone Number" required />
        <input type="email" placeholder="Email Address" required />
        <input type="text" placeholder="Country" />
        <input type="text" placeholder="Address Line 01" required />
        <input type="text" placeholder="Address Line 02" />
        <input type="text" placeholder="Town/City" required />
        <input type="text" placeholder="District" />
        <input type="text" placeholder="Postcode/ZIP" />
        <br />
        <label>
          <input type="checkbox" /> Create an account?
        </label>
      </div>
    </>
  );
}

export default BillingSection;
