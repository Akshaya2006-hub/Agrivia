// src/pages/government/GovernmentDashboard.jsx
import React from 'react';
import ApplicationRow from '../../components/ApplicationRow';
import './GovernmentDashboard.css';

// Mock data for scheme applications
const mockApplications = [
  { id: 1, farmerName: 'Ravi Kumar', farmerId: 'KER-FARM-84321', schemeName: 'Kisan Credit Card (KCC) Scheme', status: 'Pending Review' },
  { id: 2, farmerName: 'Anjali V.', farmerId: 'KER-FARM-91234', schemeName: 'National Food Security Mission', status: 'Approved' },
  { id: 3, farmerName: 'Suresh P.', farmerId: 'KER-FARM-56789', schemeName: 'PM-KISAN', status: 'Pending Review' },
  { id: 4, farmerName: 'Priya Nair', farmerId: 'KER-FARM-11223', schemeName: 'Kisan Credit Card (KCC) Scheme', status: 'Rejected' },
];

const GovernmentDashboard = () => {
  return (
    <div className="gov-dashboard">
      <header className="gov-header">
        <h1>Scheme Application Portal</h1>
        <p>Review and process applications from registered farmers.</p>
      </header>

      <main className="application-list-container">
        <div className="application-list-header">
          <h4>Applicant</h4>
          <h4>Scheme Name</h4>
          <h4>Status</h4>
          <h4>Actions</h4>
        </div>
        <div className="application-list">
          {mockApplications.map(app => (
            <ApplicationRow
              key={app.id}
              farmerName={app.farmerName}
              farmerId={app.farmerId}
              schemeName={app.schemeName}
              status={app.status}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default GovernmentDashboard;