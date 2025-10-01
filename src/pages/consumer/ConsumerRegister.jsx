import React from 'react';
import { Link } from 'react-router-dom';
import '../Auth.css';
import { useLanguage } from '../../context/LanguageContext';

const ConsumerRegister = () => {
  const { t } = useLanguage();

  return (
    // Use the new single-column gradient container
    <div className="auth-container-gradient">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Create Consumer Account</h2>
          <p>Get started with Agrivia Fresh</p>
        </div>
        <form className="auth-form">
          <div className="input-group"><input type="text" placeholder="Full Name" required /></div>
          <div className="input-group"><input type="email" placeholder="Email Address" required /></div>
          <div className="input-group"><input type="tel" placeholder="Phone Number" required /></div>
          <div className="input-group"><input type="password" placeholder="Create Password" required /></div>
          <Link to="/consumer/dashboard" className="auth-button">Register</Link>
        </form>
        <p className="auth-switch-link">
          Already a member? <Link to="/consumer/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ConsumerRegister;
