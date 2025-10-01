import React from 'react';
import './Streaks.css';
import { FaCheckCircle } from 'react-icons/fa';

const Streaks = () => {
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const activeDays = [2, 3, 4, 8, 9, 10, 11, 15, 16, 22, 23, 24, 28, 29, 30]; // Mock active days

  return (
    <div className="streaks-container">
      <h2>October Streaks</h2>
      <div className="streaks-summary">
        <div><h3>Current Streak</h3><p>3 Days</p></div>
        <div><h3>Total Points</h3><p>1250 GC</p></div>
      </div>
      <div className="calendar-grid">
        {daysInMonth.map(day => (
          <div key={day} className={`calendar-day ${activeDays.includes(day) ? 'active' : ''}`}>
            {day}
            {activeDays.includes(day) && <FaCheckCircle className="check-icon" />}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Streaks;
