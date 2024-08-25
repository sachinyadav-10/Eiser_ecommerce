// src/components/NewProducts.jsx
import React from 'react';
import '../styles/NewProducts.css';

const NewProducts = () => {
  return (
    <>
    <section className="new_product">
      <h1>NEW PRODUCT</h1>
      <p>Bring called seed first of third give itself now ment</p>
    </section>
    
    <section class="summer">
        <div class="heading"> 
        <h1>COLLECTION OF 2024</h1>
        </div>
        <div class="item">
            <div class="card first">
            <img src="https://themewagon.github.io/eiser/img/product/new-product/new-product1.png" alt=""/>
            <h4>MEN'S SUMMER TSHIRT</h4>
            <h2>$120.70</h2>
            <button>ADD TO CART</button>
        </div>
        </div>
       
        
        <div class="item">
            <div class="card">
            <img src="https://themewagon.github.io/eiser/img/product/new-product/n1.jpg" alt=""/>
            <h4>NIKE LATEST SNEAKER</h4>
            <div class="price">
                <h3 class="new_price">$25.00</h3>  
                <span class="old_price">$35.00</span>
            </div>
            <button>ADD TO CART</button>
        </div>
        </div>

        <div class="item">
            <div class="card">
            <img src="https://themewagon.github.io/eiser/img/product/new-product/n2.jpg" alt=""/>
            <h4>QUARTZ HAND WATCH</h4>
            <div class="price">
                <h3 class="new_price">$25.00</h3>  
                <span class="old_price">$35.00</span>
            </div>
            <button>ADD TO CART</button>
        </div>
        </div>

        <div class="item">
            <div class="card">
            <img src="https://themewagon.github.io/eiser/img/product/new-product/n2.jpg" alt=""/>
            <h4>QUARTZ HAND WATCH</h4>
            <div class="price">
                <h3 class="new_price">$25.00</h3>  
                <span class="old_price">$35.00</span>
            </div>
            <button>ADD TO CART</button>
        </div>
        </div>

        <div class="item">
            <div class="card">
            <img src="https://themewagon.github.io/eiser/img/product/new-product/n2.jpg" alt=""/>
            <h4>QUARTZ HAND WATCH</h4>
            <div class="price">
                <h3 class="new_price">$25.00</h3>  
                <span class="old_price">$35.00</span>
            </div>
            <button>ADD TO CART</button>
        </div>
        </div>
    </section>
    </>
  );
};

export default NewProducts;
