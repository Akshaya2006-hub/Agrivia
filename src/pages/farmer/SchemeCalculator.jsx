import React from 'react';
import SchemeCard from '../../components/SchemeCard'; // Reusing the card
import './SchemeCalculator.css';

const SchemeCalculator = () => {
  // In a real app, this would be a filtered list
  const recommendedSchemes = [
    { id: 1, title: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)", description: "Financial support for small landholding farmer families.", eligibility: "Landholding farmer families.", source: "NABARD" },
    { id: 2, title: "Kisan Credit Card (KCC) Scheme", description: "Provides farmers with timely access to credit.", eligibility: "Farmers, sharecroppers, and tenants.", source: "Govt. of India" }
  ];

  return (
    <div className="calculator-container">
      <h2>Scheme Eligibility Calculator</h2>
      <div className="calculator-form">
        <div className="input-group">
          <label>Total Land (in acres)</label>
          <input type="number" placeholder="e.g., 5" />
        </div>
        <div className="input-group">
          <label>Annual Income (₹)</label>
          <input type="number" placeholder="e.g., 80000" />
        </div>
        <button className="calculate-btn">Find Schemes</button>
      </div>
      <div className="results-container">
        <h3>Recommended Schemes For You</h3>
        <div className="schemes-grid">
          {recommendedSchemes.map(s => <SchemeCard key={s.id} {...s} />)}
        </div>
      </div>
    </div>
  );
};
export default SchemeCalculator;
