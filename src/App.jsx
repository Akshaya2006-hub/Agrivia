import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import SplashScreen from './components/SplashScreen';
import './index.css';
import './pages/Auth.css';

// Import all dashboards and auth pages
import FarmerDashboard from './pages/farmer/FarmerDashboard';
import FarmerLogin from './pages/farmer/FarmerLogin';
import FarmerRegister from './pages/farmer/FarmerRegister';

import ConsumerDashboard from './pages/consumer/ConsumerDashboard';
import ConsumerLogin from './pages/consumer/ConsumerLogin';
import ConsumerRegister from './pages/consumer/ConsumerRegister';

import GovernmentDashboard from './pages/government/GovernmentDashboard';
import GovernmentLogin from './pages/government/GovernmentLogin';

// Import icons for the role cards
import { FaUser, FaSeedling, FaLandmark } from 'react-icons/fa';

// New HomePage component with "Choose Your Role" layout
function HomePageContent() {
  const { setLanguage, t, language } = useLanguage();

  return (
    <div className="home-page-role-selection" style={{ backgroundImage: `url('https://wallpapers.com/images/hd/kerala-pictures-jyzrwdyies16redl.jpg')` }}>
      <div className="home-overlay">
        <h1 className="app-title">Agrivia</h1>
        <p className="app-tagline">{t('agriviaTagline')}</p>

        <div className="language-selector-main">
          <button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>English</button>
          <button className={language === 'hi' ? 'active' : ''} onClick={() => setLanguage('hi')}>हिंदी</button>
          <button className={language === 'ml' ? 'active' : ''} onClick={() => setLanguage('ml')}>മലയാളം</button>
          <button className={language === 'ta' ? 'active' : ''} onClick={() => setLanguage('ta')}>தமிழ்</button>
        </div>

        <h2 className="choose-role-title">{t('chooseYourRole')}</h2>

        <div className="role-cards-container">
          <Link to="/farmer/login" className="role-card role-farmer">
            <FaSeedling className="role-icon" />
            <h3>{t('farmerPortal')}</h3>
            <p>{t('farmerRoleDescription')}</p>
          </Link>
          <Link to="/consumer/login" className="role-card role-consumer">
            <FaUser className="role-icon" />
            <h3>{t('consumerMarketplace')}</h3>
            <p>{t('consumerRoleDescription')}</p>
          </Link>
          <Link to="/government/login" className="role-card role-government">
            <FaLandmark className="role-icon" />
            <h3>{t('officialLogin')}</h3>
            <p>{t('governmentRoleDescription')}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

function AppContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Splash screen visible for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageContent />} />
        
        {/* Farmer Routes */}
        <Route path="/farmer/login" element={<FarmerLogin />} />
        <Route path="/farmer/register" element={<FarmerRegister />} />
        <Route path="/farmer/dashboard/*" element={<FarmerDashboard />} />

        {/* Consumer Routes */}
        <Route path="/consumer/login" element={<ConsumerLogin />} />
        <Route path="/consumer/register" element={<ConsumerRegister />} />
        <Route path="/consumer/dashboard" element={<ConsumerDashboard />} />

        {/* Government Routes */}
        <Route path="/government/login" element={<GovernmentLogin />} />
        <Route path="/government/dashboard" element={<GovernmentDashboard />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
