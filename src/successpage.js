import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  faCheckCircle,
  
  faShoppingCart,
  faPrint,
  faRedo,
} from '@fortawesome/free-solid-svg-icons';

function OrderConfirmation() {
  return (
    <div>
      <div className="confirmation-message">
        <h1>
          <FontAwesomeIcon icon={faCheckCircle} size="lg" color="blue" /> Order Confirmed!
        </h1>
        <p>Thank You for your order confirmation</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6">
            <div className='row'>
            <div className="col-md-6 col-lg-6 col-xl-6">
            <div className="shipping-address">
              <h3>
                {/* <FontAwesomeIcon icon={faHome} size="xs" color="blue" /> */}
                Shipping Address
              </h3>
              <p>Name: John Doe</p>
              <p>Address: 123 Main St</p>
              <p>City: Anytown</p>
              <p>State: CA</p>
              <p>ZIP: 12345</p>
              <p>Country: USA</p>
            </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6">
                <div className="billing-address">
              <h3>Billing Address</h3>
              <p>Name: John Doe</p>
              <p>Address: 123 Main St</p>
              <p>City: Anytown</p>
              <p>State: CA</p>
              <p>ZIP: 12345</p>
              <p>Country: USA</p>
            </div>
              </div>
            </div>
           
            
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6">
             <div className="payment-method">
              <h3>Payment Method</h3>
              <p>Select Any One Option</p>
              <select defaultValue="Credit Card">
                <option>Credit Card</option>
                <option>Debit Card</option>
                <option>G-Pay</option>
              </select>
              <p>Credit Card ending in 1234</p>
            </div>
            <div className="order-summary-container">
              <h3>Order Summary</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>SKU</th>
                    <th>Quantity</th>
                    <th>Product Name</th>
                    <th>Amount</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>SKU001</td>
                    <td>2</td>
                    <td>Product 1</td>
                    <td>$20.00</td>
                    <td>$40.00</td>
                  </tr>
                  <tr>
                    <td>SKU002</td>
                    <td>1</td>
                    <td>Product 2</td>
                    <td>$30.00</td>
                    <td>$30.00</td>
                  </tr>
                </tbody>
              </table>
              <div className="totals">
                <p>Shipping and Handling: $5.00</p>
                <p>Tax: $6.50</p>
                <p>Grand Total: $81.50</p>
              </div>
              <div className="action-buttons">
                <button className="btn btn-primary">
                  <FontAwesomeIcon icon={faShoppingCart} /> Continue Shopping
                </button>
                <button className="btn btn-secondary">
                  <FontAwesomeIcon icon={faPrint} /> Print Order
                </button>
                <button className="btn btn-success">
                  <FontAwesomeIcon icon={faRedo} /> Reorder
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
