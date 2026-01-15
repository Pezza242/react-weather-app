import React, { useState } from "react";
import "./weather.css";
import axios from "axios";
import moment from "moment";
import Clock from "./clock";
import SearchForm from "./searchForm";
import WeatherInfo from "./weatherInfo";
import Loader from "./loader";

export default function Weather() {
  const [weatherInfo, setWeatherInfo] = useState({ loading: false });
  const [city, setCity] = useState("London");
  let date = moment().format("dddd Do MMMM YYYY");

  function handleResponse(response) {
    let d = response.data;
    setWeatherInfo({
      loading: true,
      city: d.name,
      temperature: d.main.temp,
      humidity: d.main.humidity,
      wind: d.wind.speed,
      description: d.weather[0].description,
    });
  }
  function searchCity() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=50fa4024e3b1d5eac2f51ab18a47e997&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }
  if (!weatherInfo.loading) {
    searchCity();
    return <Loader />;
  }
  return (
    <div className="weather">
      <header className="weather-header">
        <p className="date">{date}</p>
      </header>
      <SearchForm onSubmit={handleSubmit} onChange={updateCity} />
      <hr id="line-1" />
      <Clock />
      <WeatherInfo data={weatherInfo} />
    </div>
  );
}
