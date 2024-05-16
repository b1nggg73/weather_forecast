import React from 'react';
import './WeatherCard.css';
import card_cloudy from '../../images/Card/pcloudy.png';
import card_clear from '../../images/Card/pclear.png';
import card_rain from '../../images/Card/prain.png';

const WeatherCard = ({ name_city, temperature_city, wind_speed_city, weather_city }) => {
  return (
    <div className="weather-card">
      <div className="img-weather-card">
        {weather_city === 'Clouds' ? <img src={card_cloudy} alt="" /> : ''}
        {weather_city === 'Clear' ? <img src={card_clear} alt="" /> : ''}
        {weather_city === 'Rain' ? <img src={card_rain} alt="" /> : ''}
      </div>
      <div className="info-about-city">
        {name_city} <div className="temperature">{temperature_city}°С</div>
      </div>
      <div className="info-about-wind">
        wind speed: <div className="distance">{wind_speed_city} km</div>
      </div>
      <div className="weather-like">{weather_city}</div>
    </div>
  );
};

export default WeatherCard;
