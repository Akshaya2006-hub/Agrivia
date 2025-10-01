// src/components/SchemeCard.jsx
import React from 'react';
import { FaFileContract } from 'react-icons/fa';
import './SchemeCard.css';

const SchemeCard = ({ title, description, eligibility, source }) => {
  return (
    <div className="scheme-card">
      <div className="scheme-card-header">
        <FaFileContract className="scheme-icon" />
        <h3>{title}</h3>
      </div>
      <p className="scheme-description">{description}</p>
      <div className="scheme-eligibility">
        <strong>Eligibility:</strong> {eligibility}
      </div>
      <div className="scheme-footer">
        <span className="scheme-source">Source: {source}</span>
        <button className="apply-button">View Details</button>
      </div>
    </div>
  );
};

export default SchemeCard;