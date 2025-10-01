import React from 'react';
import { Link } from 'react-router-dom';
import '../Auth.css';
import FileUpload from '../../components/FileUpload';
import { useLanguage } from '../../context/LanguageContext';

const FarmerRegister = () => {
  const { t } = useLanguage();

  return (
    // Use the new single-column gradient container
    <div className="auth-container-gradient">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Farmer Registration</h2>
          <p>Create your Agrivia account</p>
        </div>
        <form className="auth-form">
          <div className="input-group"><input type="text" placeholder="Full Name" required /></div>
          <div className="input-group"><input type="text" placeholder="Farmer ID" required /></div>
          <div className="input-group"><input type="tel" placeholder="Phone Number" required /></div>
          <FileUpload label="Upload Your Photo" />
          <FileUpload label="Upload Aadhaar Card" />
          <FileUpload label="Upload Land Photo (with Geolocation)" />
          <div className="input-group"><input type="password" placeholder="Create Password" required /></div>
          <Link to="/farmer/dashboard" className="auth-button">Register & Generate QR</Link>
        </form>
        <p className="auth-switch-link">
          Already have an account? <Link to="/farmer/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default FarmerRegister;
