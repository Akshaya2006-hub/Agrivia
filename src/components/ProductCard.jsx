import React from 'react';
import { Link } from 'react-router-dom';
import { FaTractor } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ name, price, farmer, image }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
      </div>
      <div className="product-details">
        <h3>{name}</h3>
        <p className="product-farmer">
          <FaTractor /> Sold by: {farmer}
        </p>
        <div className="product-footer">
          <span className="product-price">₹{price}/kg</span>
          <Link to="/consumer/agrigopay" className="add-to-cart-btn">Add</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

