// src/components/Banner.jsx
import React from 'react';
import '../styles/Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <img src="https://wallpapercave.com/wp/wp10668538.jpg" alt="Banner" />
      <div className="inner">
        <div className="container">
          <div className="content">
            <div className="col">
              <p className="sub_text">MEN COLLECTION</p>
              <h3><span> Show</span>Your<br />Personal<span>Style</span></h3>
              <h4>Fowl sar dry which a above together place</h4>
              <div className="view">
                <button>View Collection</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
