import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/OrderSummry.css'

function OrderSummry() {
  return (
    <>
    <div class="order-summary">
            <h3>Your Order</h3>
            <table>
                <tr>
                    <th>Product</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>Fresh Blackberry x 02</td>
                    <td>$720.00</td>
                </tr>
                <tr>
                    <td>Fresh Tomatoes x 02</td>
                    <td>$720.00</td>
                </tr>
                <tr>
                    <td>Fresh Broccoli x 02</td>
                    <td>$720.00</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td>Flat Rate: $50.00</td>
                </tr>
                <tr class="total">
                    <td>Total</td>
                    <td>$2,210.00</td>
                </tr>
            </table>
        </div>

    </>
  )
}

export default OrderSummry