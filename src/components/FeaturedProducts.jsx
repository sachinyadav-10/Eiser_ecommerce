// src/components/FeaturedProduct.jsx
import React from 'react';
import '../styles/FeaturedProduct.css';

const FeaturedProduct = () => {
  return (
    <section className="product">
      <h1>FEATURED PRODUCT</h1>
      <p>Bring called seed first of third give itself now ment</p>
      <div className="big">
        <div className="box">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFoH4dhmwSq9i9XgaDjYsj-UwzVwRVeIqr2A&s" alt="Product 1" />
          <h4>LATEST MEN'S SNEAKER</h4>
          <div className="price">
            <h3 className="new_price">$25.00</h3>
            <span className="old_price">$35.00</span>
          </div>
        </div>
        <div className="box">
          <img src="https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lock---go---M22311_PM2_Front%20view.jpg" alt="Product 2" />
          <h4>RED WOMEN PURSE</h4>
          <div className="price">
            <h3 className="new_price">$25.00</h3>
            <span className="old_price">$35.00</span>
          </div>
        </div>
        <div className="box">
          <img src="https://assets.ajio.com/medias/sys_master/root/20231120/Apjw/655b651cafa4cf41f592937f/-473Wx593H-466811473-blue-MODEL.jpg" alt="Product 3" />
          <h4>MEN STYLISH SMART WATCH</h4>
          <div className="price">
            <h3 className="new_price">$25.00</h3>
            <span className="old_price">$35.00</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
