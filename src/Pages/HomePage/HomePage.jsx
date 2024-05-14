import React from 'react';
import InputSearch from '../../Components/InputSearch/InputSearch';
import Filters from '../../Components/Filters/Filters';
import './HomePage.css';
import DisplayWeatherCard from '../../Components/DisplayWeatherCard/DisplayWeatherCard';

const HomePage = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="info-about-app">
          <h3 className="h3-info-about-app">
            Seeing the weather of the whole world with{' '}
            <h3 className="h3-info-about-app-dark-weather">Dark Weather!</h3>
          </h3>
        </div>
        <div className="weather-filtering">
          <InputSearch />
          <Filters />
        </div>
        <DisplayWeatherCard />
      </div>
    </div>
  );
};

export default HomePage;
