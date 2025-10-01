import React from 'react';
import MarketProductCard from '../../components/MarketProductCard';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Imports.css';

// Mock data with the corrected image URL for Organic Pesticide
const mockProducts = [
  { 
    id: 1, 
    name: "Organic Pesticide", 
    description: "Neem oil based, effective against aphids.", 
    price: 550, 
    // This is the corrected, working image URL
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38AD449?auto=format&fit=crop&w=800&q=60" 
  },
  { 
    id: 2, 
    name: "Hybrid Tomato Seeds", 
    description: "High yield, disease-resistant variety.", 
    price: 120, 
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=60" 
  },
  { 
    id: 3, 
    name: "Vermicompost (5kg)", 
    description: "Rich organic fertilizer for all crops.", 
    price: 300, 
    image: "https://images.unsplash.com/photo-1591701757202-af349a5cc96b?auto=format&fit=crop&w=800&q=60" 
  },
  { 
    id: 4, 
    name: "Drip Irrigation Kit", 
    description: "Complete kit for a 1/4 acre farm.", 
    price: 2500, 
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=60" 
  },
];


const Imports = () => {
  return (
    <div className="imports-container">
      <div className="imports-header">
        <div>
          <h1>Marketplace</h1>
          <p>Buy seeds, pesticides, and equipment directly from certified sellers.</p>
        </div>
        <Link to="/farmer/dashboard/cart" className="cart-link">
          <FaShoppingCart />
          <span>View Cart (3)</span>
        </Link>
      </div>
      <div className="product-grid">
        {mockProducts.map(product => (
          <MarketProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Imports;

