import React from 'react';
import './Products.css';

const Product = () => {
  return (
    <section className="product">
      <h1>FEATURED PRODUCT</h1> 
      <p>Bring called seed first of third give itself now ment</p>
      <div className="big">
        <div className="box">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFoH4dhmwSq9i9XgaDjYsj-UwzVwRVeIqr2A&s" alt="product1" />
          <h4>LATEST MEN'S SNEAKER</h4>
          <div className="price">
            <h3 className="new_price">$25.00</h3>
            <span className="old_price">$35.00</span>
          </div>
        </div>
        <div className="box">
          <img src="https://in.louisvuitton.com/images/dynamic/images/canv/NW_WOMENS_SHOES/1/ps/LOUIS_VUITTON-TATTOO_SNEAKER_IN_MONOGRAM_CANVAS-SHOES--B0AW8PSH02_PM1_Front%20view.png" alt="product2" />
          <h4>LATEST WOMEN'S SNEAKER</h4>
          <div className="price">
            <h3 className="new_price">$30.00</h3>
            <span className="old_price">$40.00</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
