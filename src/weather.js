import React, { useState } from "react";
import "./weather.css";
import axios from "axios";
import moment from "moment";

export default function Weather() {
  const [weatherInfo, setWeatherInfo] = useState({ loading: false });
  let date = moment().format("dddd Do MMMM YYYY");
  let time = moment().format("LT");

  function handleResponse(response) {
    let d = response.data;
    setWeatherInfo({
      loading: true,
      date: new Date(d.dt * 1000),
      city: "London",
      temperature: d.main.temp,
      humidity: d.main.humidity,
      wind: d.wind.speed,
      description: d.weather[0].description,
    });
  }
  if (weatherInfo.loading) {
    return (
      <div className="weather">
        <header className="weather-header">
          <p className="date">{date}</p>
        </header>
        <form id="search-form">
          <input
            className="search-bar"
            type="search"
            placeholder="Enter a city..."
            required
          />
          <input className="submit" type="submit" value="Search" />
        </form>
        <hr id="line-1" />
        <p className="time">{time}</p>
        <img
          className="weather-icon"
          src="https://i.ibb.co/qY9z3CRM/sun.png"
          alt={weatherInfo.description}
          border="0"
        />
        <h1 className="city">{weatherInfo.city}</h1>
        <h2 className="temperature">{Math.round(weatherInfo.temperature)}º</h2>
        <p id="icon-description">{weatherInfo.description}</p>
        <hr id="line-2" />
        <ul className="weather-info">
          <li className="humidity">
            Humidity: <strong>{weatherInfo.humidity}%</strong>
          </li>
          <li className="wind">
            Wind: <strong>{Math.round(weatherInfo.wind)}km/h</strong>
          </li>
        </ul>
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=50fa4024e3b1d5eac2f51ab18a47e997&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading.....";
  }
}
