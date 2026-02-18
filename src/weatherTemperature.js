import React, { useState } from "react";

export default function WeatherFunction(props) {
  let [unit, setUnit] = useState("celsius");

  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function farenheit() {
    return (props.temp * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <h2 className="temperature">
        {Math.round(props.temp)}
        <span className="units">
          ºC |{" "}
          <a href="/" onClick={showFarenheit}>
            ºF
          </a>
        </span>
      </h2>
    );
  } else {
    return (
      <h2 className="temperature">
        {Math.round(farenheit())}
        <span className="units">
          ºF |{" "}
          <a href="/" onClick={showCelsius}>
            ºC
          </a>
        </span>
      </h2>
    );
  }
}
