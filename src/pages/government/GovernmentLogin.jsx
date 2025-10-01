import React from 'react';
import { Link } from 'react-router-dom';
import '../Auth.css';
import { useLanguage } from '../../context/LanguageContext';

const GovernmentLogin = () => {
  const { t } = useLanguage();

  return (
    // Use the new single-column gradient container
    <div className="auth-container-gradient">
      <div className="auth-card">
        <div className="auth-header">
          <h2>{t('officialLogin')}</h2>
          <p>Scheme Application Portal</p>
        </div>
        <form className="auth-form">
          <div className="input-group"><input type="text" placeholder="Official ID / Email" required /></div>
          <div className="input-group"><input type="password" placeholder="Password" required /></div>
          <Link to="/government/dashboard" className="auth-button">Login</Link>
        </form>
      </div>
    </div>
  );
};

export default GovernmentLogin;
