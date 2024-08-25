import React from 'react';
import '../styles/PaymentOptions.css';

function PaymentOptions() {
  return (
    <div className="payment-options">
      <h3>Payment Options</h3>
      <label>
        <input type="radio" name="payment" defaultChecked /> Check Payments
      </label>
      <br />
      <label>
        <input type="radio" name="payment" /> PayPal
      </label>
      <br />
      <p>
        Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
      </p>
      <label>
        <input type="checkbox" required /> I've read and accept the <a href="#">terms & conditions</a>
      </label>
      <br /><br />
      <button className="checkout-btn">Proceed to PayPal</button>
    </div>
  );
}

export default PaymentOptions;
