import React from 'react';
import './MarketProductCard.css';
import { FaShoppingCart } from 'react-icons/fa';

const MarketProductCard = ({ name, price, image, description }) => {
  const handleAddToCart = () => {
    // In a real app, this would dispatch to a context or state manager
    alert(`${name} added to cart!`);
  };

  return (
    <div className="market-product-card">
      <div className="market-card-image-container">
        <img src={image} alt={name} />
      </div>
      <div className="market-card-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="market-card-footer">
          <span className="price">₹{price}</span>
          <button onClick={handleAddToCart}><FaShoppingCart /> Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
export default MarketProductCard;
