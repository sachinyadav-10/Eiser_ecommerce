import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Headers';
import Footer from './components/Footers';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ProductCheckout from './pages/ProductCheckout';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/SHOP_CATEGORY" element={<ShopCategory />} /> */}
        {/* <Route path="/PRODUCT_DETAILS" element={<ProductDetails />} /> */}
        <Route path="/ProductCheckout" element={<ProductCheckout />} />
        {/* <Route path="/SHOPPING_CART" element={<ShoppingCart />} /> */}

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
