import React from 'react';
import './DisplayWeatherCard.css';
import WeatherCard from '../WeatherCard/WeatherCard';

const DisplayWeatherCard = () => {
  return (
    <div className="display-weather-card">
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
    </div>
  );
};

export default DisplayWeatherCard;
