import React, { useEffect, useState } from 'react';
import './DisplayWeatherCard.css';
import WeatherCard from '../WeatherCard/WeatherCard';

const DisplayWeatherCard = ({ nameCity }) => {
  let [data, setData] = useState();

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=d2406b98954503f13df526d164a3cb71&units=metric`,
    )
      .then((data) => data.json())
      .then((data) => setData(data));
  }, [nameCity]);

  console.log(data);

  return (
    <div className="display-weather-card">
      {data == undefined || data.cod == 404 || data.cod == 400 ? (
        <h3 className="not-found-city">ТАКОГО ГОРОДА НЕТУ</h3>
      ) : (
        <WeatherCard
          name_city={data.name}
          wind_speed_city={data.wind.speed}
          temperature_city={data.main.temp}
          weather_city={data.weather[0].main}
        />
      )}
    </div>
  );
};

export default DisplayWeatherCard;
