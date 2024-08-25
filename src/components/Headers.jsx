// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Headers.css';

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <img src="https://themewagon.github.io/eiser/img/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="mid">
        <ul>
          <li><a href="./main">Home</a></li>
          <li className="shop">
            <span>SHOP</span>
            <div className="dropdown">
              <ul>
                <li className="sub"><span><a href="./SHOP_CATEGORY">SHOP CATEGORY</a></span></li>
                <li className="sub"><span><a href="./PRODUCT_DETAILS">PRODUCT DETAILS</a></span></li>
                <li className="sub"><span><a href="./ProductCheckout">PRODUCT CHECKOUT</a></span></li>
                <li className="sub"><span><a href="./SHOPPING_CART">SHOPPING CART</a></span></li>
              </ul>
            </div>
          </li>
          <li className="shop">
            <span>BLOG</span>
            <div className="dropdown">
              <ul>
                <li className="sub"><span><a href="./main">BLOG</a></span></li>
                <li className="sub"><span><a href="./main">BLOG DETAILS</a></span></li>
              </ul>
            </div>
          </li>
          <li className="shop">
            <span><a href="./pages.html">PAGES</a></span>
            <div className="dropdown">
              <ul>
                <li className="sub">TRACKING</li>
                <li className="sub">ELEMENTS</li>
              </ul>
            </div>
          </li>
          <li><a href="./contact">CONTACT</a></li>
        </ul>
      </div>
      <div className="right">
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-solid fa-cart-shopping"></i>
        <i className="fa-regular fa-user"></i>
        <i className="fa-solid fa-heart"></i>
      </div>
    </div>
  );
};

export default Header;
