import React from 'react';
import { Link } from "react-router-dom";
import { FaWallet, FaSearch } from 'react-icons/fa';
import ProductCard from '../../components/ProductCard';
import './ConsumerDashboard.css';

// The ConsumerHeader component is now defined directly in this file
const ConsumerHeader = () => {
  return (
    <header className="consumer-header-bar">
      <div className="consumer-header-content">
        <h1 className="consumer-title">Agrivia Fresh</h1>
        <Link to="/consumer/agrigopay" className="agrigopay-btn">
          <FaWallet />
          <span>AgriGoPay</span>
        </Link>
      </div>
    </header>
  );
};

// Mock data with new, more reliable image URLs from a different source
const mockProducts = [
    { id: 1, name: "Fresh Tomatoes", price: 40, farmer: "Ravi Kumar", image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" },
    { id: 2, name: "Organic Spinach", price: 30, farmer: "Anjali V.", image: "https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" },
    { id: 3, name: "Hill Banana", price: 50, farmer: "John Mathew", image: "https://images.pexels.com/photos/2280926/pexels-photo-2280926.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" },
    { id: 4, name: "Carrots", price: 60, farmer: "Suresh P.", image: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" },
];

const ConsumerDashboard = () => {
  return (
    <>
      <ConsumerHeader />
      <div className="consumer-dashboard">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search for fresh produce..." />
        </div>
        <main className="product-grid">
          {mockProducts.map(product => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              farmer={product.farmer}
              image={product.image}
            />
          ))}
        </main>
      </div>
    </>
  );
};

export default ConsumerDashboard;

