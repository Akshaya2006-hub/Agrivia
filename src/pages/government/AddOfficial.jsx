import React from 'react';
import '../Auth.css'; // We can reuse the same styles
import { Link } from 'react-router-dom';

const AddOfficial = () => {
  return (
    <div className="auth-page">
      <div className="auth-image-container" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1588392382834-a891154bca4d?auto=format&fit=crop&w=1471&q=80')" }}></div>
      <div className="auth-form-container">
        <div className="auth-card">
          <div className="auth-header">
            <h2>Create Official Account</h2>
            <p>For internal administrative use only.</p>
          </div>
          <form className="auth-form">
            <div className="input-group"><input type="text" placeholder="Official's Full Name" required /></div>
            <div className="input-group"><input type="email" placeholder="Official Email Address" required /></div>
            <div className="input-group"><input type="text" placeholder="Department (e.g., Agriculture)" required /></div>
            <div className="input-group"><input type="text" placeholder="Assigned Official ID" required /></div>
            <div className="input-group"><input type="password" placeholder="Create Temporary Password" required /></div>
            <Link to="/government/dashboard" className="auth-button">Create Account</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddOfficial;