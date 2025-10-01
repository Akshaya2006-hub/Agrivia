import React from 'react';
import { FaTrash } from 'react-icons/fa';
import './Cart.css';

// Mock data for items in the cart
const mockCartItems = [
  { id: 1, name: 'Organic Bio-Fertilizer (5kg)', price: 450, quantity: 1, image: 'https://placehold.co/100x100/2a9d8f/ffffff?text=Fertilizer' },
  { id: 2, name: 'High-Yield Paddy Seeds (1kg)', price: 250, quantity: 2, image: 'https://placehold.co/100x100/e76f51/ffffff?text=Seeds' },
];

const CartPage = () => {
  const subtotal = mockCartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + tax;

  return (
    <div className="cart-page-container">
      <div className="cart-items-list">
        <h2>Your Cart</h2>
        {mockCartItems.map(item => (
          <div key={item.id} className="cart-item-card glass-card">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h4>{item.name}</h4>
              <p>Price: ₹{item.price}</p>
              <div className="cart-item-quantity">
                <label>Qty:</label>
                <input type="number" value={item.quantity} readOnly />
              </div>
            </div>
            <button className="cart-item-remove"><FaTrash /></button>
          </div>
        ))}
      </div>
      <div className="cart-summary glass-card">
        <h3>Order Summary</h3>
        <div className="summary-row">
          <span>Subtotal</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Tax (5%)</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>
        <div className="summary-total">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
        <button className="buy-now-button">Buy Now</button>
      </div>
    </div>
  );
};

export default CartPage;
