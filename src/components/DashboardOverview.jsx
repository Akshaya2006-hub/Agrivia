// src/components/DashboardOverview.jsx
import React from 'react';
import { FaAward, FaCloudversify } from 'react-icons/fa';
import './DashboardOverview.css';

const DashboardOverview = () => {
  return (
    <div className="overview-container">
      {/* Sustainability Score Card */}
      <div className="overview-card">
        <FaAward className="card-icon score" />
        <div className="card-content">
          <h4>Sustainability Score</h4>
          <p>750 GC</p>
        </div>
      </div>

      {/* Weather Card */}
      <div className="overview-card">
        <FaCloudversify className="card-icon weather" />
        <div className="card-content">
          <h4>Today's Weather (Chennai)</h4>
          <p>32°C, Partly Cloudy</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;