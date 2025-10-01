import React from 'react';
import './DisasterManagement.css';
import { FaPhoneAlt } from 'react-icons/fa';

const DisasterManagement = () => {
  const handleEmergencyCall = () => {
    if(confirm("Are you sure you want to call the emergency helpline?")) {
      window.location.href = 'tel:1077'; // Example disaster helpline number
    }
  };

  return (
    <div className="disaster-container">
      <h2>Disaster Management</h2>
      <div className="emergency-call-card">
        <h3>Emergency Helpline</h3>
        <p>For immediate assistance during a natural disaster, press the button below to connect to the State Emergency Operations Centre.</p>
        <button onClick={handleEmergencyCall}><FaPhoneAlt /> Call Now</button>
      </div>
      <div className="alerts-section">
        <h3>Active Alerts</h3>
        <div className="alert-card critical">
          <strong>Red Alert:</strong> Heavy rainfall expected in Idukki and Kottayam districts for the next 48 hours.
        </div>
      </div>
    </div>
  );
};
export default DisasterManagement;
