import React, { useState } from 'react';
import ForecastDayCard from '../../components/ForecastDayCard';
import './Weather.css';

// --- Mock Data for 5 Locations in Kerala ---
const weatherDataByLocation = {
  'Kochi': [
    { day: 'Today', date: 'Sep 30', tempHigh: 31, tempLow: 25, condition: 'Thunderstorm' },
    { day: 'Wed', date: 'Oct 1', tempHigh: 32, tempLow: 26, condition: 'Partly Cloudy' },
    { day: 'Thu', date: 'Oct 2', tempHigh: 31, tempLow: 25, condition: 'Thunderstorm' },
    { day: 'Fri', date: 'Oct 3', tempHigh: 30, tempLow: 25, condition: 'Thunderstorm' },
    { day: 'Sat', date: 'Oct 4', tempHigh: 32, tempLow: 26, condition: 'Partly Cloudy' },
    { day: 'Sun', date: 'Oct 5', tempHigh: 33, tempLow: 26, condition: 'Sunny' },
    { day: 'Mon', date: 'Oct 6', tempHigh: 31, tempLow: 25, condition: 'Partly Cloudy' },
    { day: 'Tue', date: 'Oct 7', tempHigh: 30, tempLow: 25, condition: 'Thunderstorm' },
    { day: 'Wed', date: 'Oct 8', tempHigh: 32, tempLow: 26, condition: 'Partly Cloudy' },
    { day: 'Thu', date: 'Oct 9', tempHigh: 32, tempLow: 26, condition: 'Sunny' },
  ],
  'Thiruvananthapuram': [
    { day: 'Today', date: 'Sep 30', tempHigh: 30, tempLow: 24, condition: 'Thunderstorm' },
    { day: 'Wed', date: 'Oct 1', tempHigh: 31, tempLow: 25, condition: 'Partly Cloudy' },
    { day: 'Thu', date: 'Oct 2', tempHigh: 30, tempLow: 24, condition: 'Thunderstorm' },
    { day: 'Fri', date: 'Oct 3', tempHigh: 29, tempLow: 24, condition: 'Thunderstorm' },
    { day: 'Sat', date: 'Oct 4', tempHigh: 31, tempLow: 25, condition: 'Partly Cloudy' },
    { day: 'Sun', date: 'Oct 5', tempHigh: 32, tempLow: 25, condition: 'Sunny' },
    { day: 'Mon', date: 'Oct 6', tempHigh: 30, tempLow: 24, condition: 'Partly Cloudy' },
    { day: 'Tue', date: 'Oct 7', tempHigh: 29, tempLow: 24, condition: 'Thunderstorm' },
    { day: 'Wed', date: 'Oct 8', tempHigh: 31, tempLow: 25, condition: 'Partly Cloudy' },
    { day: 'Thu', date: 'Oct 9', tempHigh: 31, tempLow: 25, condition: 'Sunny' },
  ],
  'Kozhikode': [
    { day: 'Today', date: 'Sep 30', tempHigh: 32, tempLow: 26, condition: 'Partly Cloudy' },
    { day: 'Wed', date: 'Oct 1', tempHigh: 33, tempLow: 27, condition: 'Sunny' },
    { day: 'Thu', date: 'Oct 2', tempHigh: 32, tempLow: 26, condition: 'Partly Cloudy' },
    { day: 'Fri', date: 'Oct 3', tempHigh: 31, tempLow: 26, condition: 'Thunderstorm' },
    { day: 'Sat', date: 'Oct 4', tempHigh: 33, tempLow: 27, condition: 'Partly Cloudy' },
    { day: 'Sun', date: 'Oct 5', tempHigh: 34, tempLow: 27, condition: 'Sunny' },
    { day: 'Mon', date: 'Oct 6', tempHigh: 32, tempLow: 26, condition: 'Partly Cloudy' },
    { day: 'Tue', date: 'Oct 7', tempHigh: 31, tempLow: 26, condition: 'Thunderstorm' },
    { day: 'Wed', date: 'Oct 8', tempHigh: 33, tempLow: 27, condition: 'Partly Cloudy' },
    { day: 'Thu', date: 'Oct 9', tempHigh: 33, tempLow: 27, condition: 'Sunny' },
  ],
  'Munnar': [
    { day: 'Today', date: 'Sep 30', tempHigh: 22, tempLow: 15, condition: 'Partly Cloudy' },
    { day: 'Wed', date: 'Oct 1', tempHigh: 23, tempLow: 16, condition: 'Sunny' },
    { day: 'Thu', date: 'Oct 2', tempHigh: 22, tempLow: 15, condition: 'Partly Cloudy' },
    { day: 'Fri', date: 'Oct 3', tempHigh: 21, tempLow: 15, condition: 'Thunderstorm' },
    { day: 'Sat', date: 'Oct 4', tempHigh: 23, tempLow: 16, condition: 'Partly Cloudy' },
    { day: 'Sun', date: 'Oct 5', tempHigh: 24, tempLow: 16, condition: 'Sunny' },
    { day: 'Mon', date: 'Oct 6', tempHigh: 22, tempLow: 15, condition: 'Partly Cloudy' },
    { day: 'Tue', date: 'Oct 7', tempHigh: 21, tempLow: 15, condition: 'Thunderstorm' },
    { day: 'Wed', date: 'Oct 8', tempHigh: 23, tempLow: 16, condition: 'Partly Cloudy' },
    { day: 'Thu', date: 'Oct 9', tempHigh: 23, tempLow: 16, condition: 'Sunny' },
  ],
  'Palakkad': [
    { day: 'Today', date: 'Sep 30', tempHigh: 34, tempLow: 25, condition: 'Sunny' },
    { day: 'Wed', date: 'Oct 1', tempHigh: 35, tempLow: 26, condition: 'Sunny' },
    { day: 'Thu', date: 'Oct 2', tempHigh: 34, tempLow: 25, condition: 'Partly Cloudy' },
    { day: 'Fri', date: 'Oct 3', tempHigh: 33, tempLow: 25, condition: 'Thunderstorm' },
    { day: 'Sat', date: 'Oct 4', tempHigh: 35, tempLow: 26, condition: 'Partly Cloudy' },
    { day: 'Sun', date: 'Oct 5', tempHigh: 36, tempLow: 26, condition: 'Sunny' },
    { day: 'Mon', date: 'Oct 6', tempHigh: 34, tempLow: 25, condition: 'Partly Cloudy' },
    { day: 'Tue', date: 'Oct 7', tempHigh: 33, tempLow: 25, condition: 'Thunderstorm' },
    { day: 'Wed', date: 'Oct 8', tempHigh: 35, tempLow: 26, condition: 'Partly Cloudy' },
    { day: 'Thu', date: 'Oct 9', tempHigh: 35, tempLow: 26, condition: 'Sunny' },
  ]
};

const locations = Object.keys(weatherDataByLocation);

const Weather = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const forecast = weatherDataByLocation[selectedLocation];

  return (
    <div className="weather-container">
      <div className="weather-header">
        <h2>Weather Forecast</h2>
        <select 
          className="location-selector"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          {locations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>
      <div className="forecast-scroll-container">
        {forecast.map((data, index) => (
          <ForecastDayCard
            key={index}
            day={data.day}
            date={data.date}
            tempHigh={data.tempHigh}
            tempLow={data.tempLow}
            condition={data.condition}
          />
        ))}
      </div>
    </div>
  );
};

export default Weather;