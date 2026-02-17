import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <h1 className="city">{props.data.city}</h1>
      <h2 className="temperature">{Math.round(props.data.temperature)}º</h2>
      <p id="icon-description">{props.data.description}</p>
      <hr id="line-2" />
      <ul className="extra-info">
        <li className="humidity">
          Humidity:{" "}
          <strong style={{ color: props.theme.colour }}>
            {props.data.humidity}%
          </strong>
        </li>
        <li className="wind">
          Wind:{" "}
          <strong style={{ color: props.theme.colour }}>
            {Math.round(props.data.wind)}km/h
          </strong>
        </li>
      </ul>
    </div>
  );
}
