import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h1>What Our Customers Say</h1>
      <p>Our customers love us! Read what they have to say below.</p>
      <div className="testi_container">
        {/* Testimonial 1 */}
        <div className="testi_box">
          <img src="/images/customer1.jpg" alt="Customer 1" />
          <h3>Customer 1</h3>
          <span>Verified Buyer</span>
          <p>"Great product! Highly recommend."</p>
        </div>
        {/* Testimonial 2 */}
        <div className="testi_box">
          <img src="/images/customer2.jpg" alt="Customer 2" />
          <h3>Customer 2</h3>
          <span>Verified Buyer</span>
          <p>"Excellent service and quality."</p>
        </div>
        {/* Testimonial 3 */}
        <div className="testi_box">
          <img src="/images/customer3.jpg" alt="Customer 3" />
          <h3>Customer 3</h3>
          <span>Verified Buyer</span>
          <p>"Will definitely buy again."</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
