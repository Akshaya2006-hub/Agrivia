// src/components/SplashScreen.jsx
import React from 'react';
import './SplashScreen.css';
import { useLanguage } from '../context/LanguageContext';

const SplashScreen = () => {
  const { t } = useLanguage();
  return (
    <div className="splash-screen">
      <h1>{t('welcome')}</h1>
    </div>
  );
};

export default SplashScreen;