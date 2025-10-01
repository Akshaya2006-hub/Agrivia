import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// --- Import All Components & Pages ---
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import FloatingAssistant from '../../components/FloatingAssistant';
import DashboardHome from "./DashboardHome";
import ProfilePage from "./Profile";
import LeaderboardPage from "./Leaderboard";
import SchemesPage from "./Schemes";
import VouchersPage from "./Vouchers";
import CommunityPage from "./Community";
import DiseaseDetectionPage from "./DiseaseDetection";
import WeatherPage from "./Weather";
import StreaksPage from "./Streaks";
import ImportsPage from "./Imports";
import ExportsPage from "./Exports";
import AwarenessPage from "./Awareness";
import DisasterManagementPage from "./DisasterManagement";
import SchemeCalculatorPage from "./SchemeCalculator";
import CartPage from "./Cart";

// --- Import Layout CSS ---
import './FarmerDashboard.css';

const FarmerDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="farmer-dashboard-layout">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="main-wrapper">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="content-area">
          <Routes>
            {/* Default and main dashboard route */}
            <Route index element={<DashboardHome />} />
            <Route path="quests" element={<DashboardHome />} />
            
            {/* All other feature routes */}
            <Route path="profile" element={<ProfilePage />} />
            <Route path="streaks" element={<StreaksPage />} />
            <Route path="disease-detection" element={<DiseaseDetectionPage />} />
            <Route path="imports" element={<ImportsPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="exports" element={<ExportsPage />} />
            <Route path="community" element={<CommunityPage />} />
            <Route path="schemes" element={<SchemesPage />} />
            <Route path="scheme-calculator" element={<SchemeCalculatorPage />} />
            <Route path="leaderboard" element={<LeaderboardPage />} />
            <Route path="awareness" element={<AwarenessPage />} />
            <Route path="disaster-management" element={<DisasterManagementPage />} />
            <Route path="vouchers" element={<VouchersPage />} />
            <Route path="weather" element={<WeatherPage />} />
          </Routes>
        </main>
      </div>
      <FloatingAssistant />
    </div>
  );
};

export default FarmerDashboard;

