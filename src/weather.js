import React from "react";

export default function Weather() {
  return (
    <div className="weather">
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
