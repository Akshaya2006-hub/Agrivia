import React from 'react';
import './Exports.css';
import { FaPlus, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const mockFarmerProducts = [
  { id: 1, name: 'Fresh Tomatoes', stock: 50, price: 40 },
  { id: 2, name: 'Organic Spinach', stock: 25, price: 30 },
  { id: 3, name: 'Hill Banana', stock: 100, price: 50 },
];

const Exports = () => {
  return (
    <div className="exports-container">
      <div className="exports-header">
        <h2>Manage Your Produce</h2>
        <button className="add-product-btn"><FaPlus /> Add New Product</button>
      </div>
      <div className="product-list-table">
        <div className="table-header">
          <span>Product</span>
          <span>Stock (kg)</span>
          <span>Price (₹/kg)</span>
          <span>Actions</span>
        </div>
        {mockFarmerProducts.map(p => (
          <div className="product-row" key={p.id}>
            <span>{p.name}</span>
            <span>{p.stock}</span>
            <span><input type="number" defaultValue={p.price} /></span>
            <span className="stock-actions">
              <button><FaPlusCircle /></button>
              <button><FaMinusCircle /></button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Exports;
