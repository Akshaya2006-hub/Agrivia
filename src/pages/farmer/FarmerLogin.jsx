import React from 'react';
import { Link } from 'react-router-dom';
import '../Auth.css';
import { useLanguage } from '../../context/LanguageContext';

const FarmerLogin = () => {
  const { t } = useLanguage();
  return (
    // Use the new single-column gradient container
    <div className="auth-container-gradient">
      <div className="auth-card">
        <div className="auth-header">
          <h2>{t('farmerLoginTitle')}</h2>
          <p>{t('welcomeBack')}</p>
        </div>
        <form className="auth-form">
          <div className="input-group">
            <input type="text" placeholder={t('farmerIdPlaceholder')} required />
          </div>
          <div className="input-group">
            <input type="password" placeholder={t('passwordPlaceholder')} required />
          </div>
          <Link to="/farmer/dashboard" className="auth-button">{t('loginButton')}</Link>
        </form>
        <p className="auth-switch-link">
          {t('dontHaveAccount')} <Link to="/farmer/register">{t('registerNow')}</Link>
        </p>
      </div>
    </div>
  );
};

export default FarmerLogin;
