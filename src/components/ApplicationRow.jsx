// src/components/ApplicationRow.jsx
import React from 'react';
import './ApplicationRow.css';

const ApplicationRow = ({ farmerName, farmerId, schemeName, status }) => {
  const getStatusClass = (status) => {
    if (status === 'Approved') return 'status-approved';
    if (status === 'Rejected') return 'status-rejected';
    return 'status-pending';
  };

  return (
    <div className="application-row">
      <div className="applicant-info">
        <h4>{farmerName}</h4>
        <span>ID: {farmerId}</span>
      </div>
      <div className="scheme-info">
        <p>{schemeName}</p>
      </div>
      <div className="status-info">
        <span className={`status-badge ${getStatusClass(status)}`}>{status}</span>
      </div>
      <div className="action-buttons">
        <button className="btn-view">View Details</button>
        {status === 'Pending Review' && (
          <>
            <button className="btn-approve">Approve</button>
            <button className="btn-reject">Reject</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ApplicationRow;