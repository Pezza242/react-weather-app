import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <img
        className="weather-icon"
        src="https://i.ibb.co/qY9z3CRM/sun.png"
        alt={props.data.description}
        border="0"
      />
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
