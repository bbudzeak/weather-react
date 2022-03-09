import React from "react";
import "./Daily.css";

export default function Daily() {
  let weatherData = {
    city: "New York",
    date: "Monday 10:00",
    description: "Cloudy",
    temperature: 20,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    humidity: 50,
    wind: 5,
  };

  return (
    <div>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: {weatherData.date} </li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-start"
            />
            <div className="float-start">
              <strong>{weatherData.temperature}</strong>
              <span className="units">°F</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
