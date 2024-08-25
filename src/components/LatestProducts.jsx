import React from 'react';
import './LatestProducts.css';

const LatestProducts = () => {
  return (
    <section className="latest_product">
      <h1>Latest Products</h1>
      <p>Discover the latest additions to our collection.</p>
      <div className="pro_container">
        {/* Product 1 */}
        <div className="pro">
          <img src="/images/product1.jpg" alt="Product 1" />
          <div className="des">
            <span>Category</span>
            <h5>Product Name</h5>
            <div className="star">
              ★★★★☆
            </div>
            <div className="add">
              <h4>$100</h4>
              <i className="fa fa-shopping-cart"></i>
            </div>
          </div>
        </div>
        {/* Product 2 */}
        <div className="pro">
          <img src="/images/product2.jpg" alt="Product 2" />
          <div className="des">
            <span>Category</span>
            <h5>Product Name</h5>
            <div className="star">
              ★★★★★
            </div>
            <div className="add">
              <h4>$120</h4>
              <i className="fa fa-shopping-cart"></i>
            </div>
          </div>
        </div>
        {/* Product 3 */}
        <div className="pro">
          <img src="/images/product3.jpg" alt="Product 3" />
          <div className="des">
            <span>Category</span>
            <h5>Product Name</h5>
            <div className="star">
              ★★★★☆
            </div>
            <div className="add">
              <h4>$150</h4>
              <i className="fa fa-shopping-cart"></i>
            </div>
          </div>
        </div>
        {/* Product 4 */}
        <div className="pro">
          <img src="/images/product4.jpg" alt="Product 4" />
          <div className="des">
            <span>Category</span>
            <h5>Product Name</h5>
            <div className="star">
              ★★★★☆
            </div>
            <div className="add">
              <h4>$180</h4>
              <i className="fa fa-shopping-cart"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
