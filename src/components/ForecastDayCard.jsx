// src/components/ForecastDayCard.jsx
import React from 'react';
import { FaSun, FaCloudSun, FaCloudShowersHeavy } from 'react-icons/fa';
import './ForecastDayCard.css';

const getWeatherIcon = (condition) => {
  if (condition.includes('Sun')) return <FaSun className="icon-sunny" />;
  if (condition.includes('Cloudy')) return <FaCloudSun className="icon-cloudy" />;
  if (condition.includes('Thunderstorm')) return <FaCloudShowersHeavy className="icon-storm" />;
  return <FaCloudSun className="icon-cloudy" />;
};

const ForecastDayCard = ({ day, date, tempHigh, tempLow, condition }) => {
  return (
    <div className="forecast-card">
      <h4>{day}</h4>
      <p className="forecast-date">{date}</p>
      <div className="forecast-icon">
        {getWeatherIcon(condition)}
      </div>
      <p className="temp-high">{tempHigh}°</p>
      <p className="temp-low">{tempLow}°</p>
      <p className="condition">{condition}</p>
    </div>
  );
};

export default ForecastDayCard;