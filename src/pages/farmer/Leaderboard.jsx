// src/pages/farmer/Leaderboard.jsx
import React, { useState, useEffect } from 'react';
import { FaTrophy, FaUserCircle } from 'react-icons/fa';
import './Leaderboard.css';

// Mock data for the leaderboard. In a real app, this would come from a server.
const mockData = [
  { rank: 4, name: 'Suresh P.', region: 'Thrissur', score: 1250 },
  { rank: 2, name: 'Anjali V.', region: 'Kollam', score: 1800 },
  { rank: 1, name: 'Ravi Kumar', region: 'Palakkad', score: 2100 },
  { rank: 5, name: 'Priya Nair', region: 'Kottayam', score: 1100 },
  { rank: 3, name: 'John Mathew', region: 'Idukki', score: 1650 },
];

const Leaderboard = () => {
  const [farmers, setFarmers] = useState([]);

  // useEffect to sort the data once when the component loads
  useEffect(() => {
    const sortedData = [...mockData].sort((a, b) => b.score - a.score);
    setFarmers(sortedData);
  }, []);

  const getRankColor = (index) => {
    if (index === 0) return 'gold';
    if (index === 1) return 'silver';
    if (index === 2) return 'bronze';
    return '';
  };

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-header">
        <FaTrophy />
        <h2>State Leaderboard</h2>
      </div>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Farmer</th>
            <th>Region</th>
            <th>Score (GC)</th>
          </tr>
        </thead>
        <tbody>
          {farmers.map((farmer, index) => (
            <tr key={farmer.rank} className={getRankColor(index)}>
              <td className="rank-cell">
                <span className={`rank-badge ${getRankColor(index)}`}>{index + 1}</span>
              </td>
              <td className="farmer-cell">
                <FaUserCircle className="farmer-icon" />
                {farmer.name}
              </td>
              <td>{farmer.region}</td>
              <td className="score-cell">{farmer.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;