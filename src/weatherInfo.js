import React from "react";
import WeatherIcon from "./weatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <WeatherIcon img={props.data.icon} />
      <h1 className="city">{props.data.city}</h1>
      <h2 className="temperature">{Math.round(props.data.temperature)}º</h2>
      <p id="icon-description">{props.data.description}</p>
      <hr id="line-2" />
      <ul className="extra-info">
        <li className="humidity">
          Humidity: <strong>{props.data.humidity}%</strong>
        </li>
        <li className="wind">
          Wind: <strong>{Math.round(props.data.wind)}km/h</strong>
        </li>
      </ul>
    </div>
  );
}
