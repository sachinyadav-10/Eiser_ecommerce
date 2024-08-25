import React from 'react'
import Loginsection from '../components/LoginSection'
import OrderSummry from '../components/OrderSummry';
import BillingSection from '../components/BillingSection';
import PaymentOptions from '../components/PaymentOptions';
import '../styles/ProductCheckout.css'


function ProductCheckout() {
  return (
    <>
    <div class="productcheckout container">
        <h1>Product Checkout</h1>
    <Loginsection />
    <BillingSection />
    <OrderSummry />
    <PaymentOptions />
    </div>
    </>
  )
}

export default ProductCheckout