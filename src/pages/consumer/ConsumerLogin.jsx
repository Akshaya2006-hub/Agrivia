import React from 'react';
import { Link } from 'react-router-dom';
import '../Auth.css';
import { useLanguage } from '../../context/LanguageContext';

const ConsumerLogin = () => {
  const { t } = useLanguage();

  return (
    // Use the new single-column gradient container
    <div className="auth-container-gradient">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Consumer Login</h2>
          <p>Shop fresh from the farm</p>
        </div>
        <form className="auth-form">
          <div className="input-group"><input type="email" placeholder="Email Address" required /></div>
          <div className="input-group"><input type="password" placeholder="Password" required /></div>
          <Link to="/consumer/dashboard" className="auth-button">Login</Link>
        </form>
        <p className="auth-switch-link">
          New to Agrivia? <Link to="/consumer/register">Create an Account</Link>
        </p>
      </div>
    </div>
  );
};

export default ConsumerLogin;
