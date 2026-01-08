import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <header className="weather-header">
        <p className="date">Thursday 1st January 2026</p>
      </header>
      <form className="search-form">
        <input
          className="search-bar"
          type="search"
          placeholder="Enter a city..."
          required
        />
        <input className="submit" type="submit" />
      </form>
      <hr />
      <p className="time">12:00PM</p>
      <img
        className="weather-icon"
        src="https://i.ibb.co/qY9z3CRM/sun.png"
        alt="sun"
        border="0"
      />
      <h1 className="city">London</h1>
      <h2 className="temperature">0º</h2>
      <p className="icon-description">Sunny</p>
    </div>
  );
}
