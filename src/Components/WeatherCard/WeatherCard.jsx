import React from 'react';
import './WeatherCard.css';
import card_cloudy from '../../images/Card/pcloudy.png';

const WeatherCard = () => {
  return (
    <div className="weather-card">
      <div className="img-weather-card">
        <img src={card_cloudy} alt="" />
      </div>
      <div className="info-about-city">
        Tehran <div className="temperature">35°C</div>
      </div>
      <div className="info-about-wind">
        wind speed: <div className="distance">11 km</div>
      </div>
      <div className="info-about-time">
        Tuesday : <div className="time">19:52</div>
      </div>
      <div className="weather-like">Cloudy</div>
    </div>
  );
};

export default WeatherCard;
