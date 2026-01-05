import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="weather">
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
      <img
        className="weather-icon"
        src="https://i.ibb.co/qY9z3CRM/sun.png"
        alt="sun"
        border="0"
      />
      <h1 className="city">London</h1>
      <h2 className="temperature">0º</h2>
    </div>
  );
}
