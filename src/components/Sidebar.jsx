import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaTractor, FaComments, FaChartBar, FaCloudSun, FaGift, FaStethoscope, FaHistory, FaShoppingCart, FaUpload, FaBullhorn, FaExclamationTriangle } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header"><h3>Agrivia Menu</h3></div>
        <ul className="sidebar-menu">
          <li><Link to="/farmer/dashboard/quests" onClick={onClose}><FaLeaf /> Daily Quests</Link></li>
          <li><Link to="/farmer/dashboard/streaks" onClick={onClose}><FaHistory /> My Streaks</Link></li>
          <li><Link to="/farmer/dashboard/disease-detection" onClick={onClose}><FaStethoscope /> Disease Detection</Link></li>
          <li><Link to="/farmer/dashboard/imports" onClick={onClose}><FaShoppingCart /> Imports (Buy)</Link></li>
          <li><Link to="/farmer/dashboard/exports" onClick={onClose}><FaUpload /> Exports (Sell)</Link></li>
          <li><Link to="/farmer/dashboard/community" onClick={onClose}><FaComments /> Community Forums</Link></li>
          <li><Link to="/farmer/dashboard/schemes" onClick={onClose}><FaTractor /> Schemes</Link></li>
          <li><Link to="/farmer/dashboard/leaderboard" onClick={onClose}><FaChartBar /> Leaderboard</Link></li>
          <li><Link to="/farmer/dashboard/awareness" onClick={onClose}><FaBullhorn /> Awareness</Link></li>
          <li><Link to="/farmer/dashboard/disaster-management" onClick={onClose}><FaExclamationTriangle /> Disaster Management</Link></li>
          <li><Link to="/farmer/dashboard/vouchers" onClick={onClose}><FaGift /> Vouchers</Link></li>
          <li><Link to="/farmer/dashboard/weather" onClick={onClose}><FaCloudSun /> Weather</Link></li>
        </ul>
      </div>
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
    </>
  );
};

export default Sidebar;
