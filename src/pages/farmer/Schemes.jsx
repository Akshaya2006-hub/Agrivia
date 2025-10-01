// src/pages/farmer/Schemes.jsx
import React from 'react';
import SchemeCard from '../../components/SchemeCard';
import './Schemes.css';

// Mock data for government schemes
const mockSchemes = [
  {
    id: 1,
    title: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    description: "A government scheme with the objective of providing financial support to all landholding farmer families.",
    eligibility: "All landholding farmer families.",
    source: "NABARD"
  },
  {
    id: 2,
    title: "Kisan Credit Card (KCC) Scheme",
    description: "Provides farmers with timely access to credit for their agricultural needs including purchase of inputs and machinery.",
    eligibility: "Farmers, sharecroppers, and tenants.",
    source: "Govt. of India"
  },
  {
    id: 3,
    title: "National Food Security Mission (NFSM)",
    description: "Aims to increase the production of rice, wheat, pulses, and coarse cereals through area expansion and productivity enhancement.",
    eligibility: "Varies by crop and region.",
    source: "Dept. of Agriculture"
  },
];

const Schemes = () => {
  return (
    <div className="schemes-container">
      <div className="schemes-grid">
        {mockSchemes.map(scheme => (
          <SchemeCard
            key={scheme.id}
            title={scheme.title}
            description={scheme.description}
            eligibility={scheme.eligibility}
            source={scheme.source}
          />
        ))}
      </div>
    </div>
  );
};

export default Schemes;