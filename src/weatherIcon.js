import React from "react";

export default function WeatherIcon(props) {
  const imageMapping = {
    "01d": "https://i.ibb.co/xKzG7FKd/sunny-icon.png",
    "01n": "https://i.ibb.co/sdCj56dW/clear-night-icon.png",
    "02d": "https://i.ibb.co/yBFzQgXD/sunny-cloud-icon.png",
    "02n": "https://i.ibb.co/p6ygXMrL/cloudy-night-icon.png",
    "03d": "https://i.ibb.co/kVM5Wkwq/cloudy-icon.png",
    "03n": "https://i.ibb.co/kVM5Wkwq/cloudy-icon.png",
    "04d": "https://i.ibb.co/YBgK3gSp/cloudy-cloud-icon.png",
    "04n": "https://i.ibb.co/YBgK3gSp/cloudy-cloud-icon.png",
    "09d": "https://i.ibb.co/0y9WRTNF/rain-icon.png",
    "09n": "https://i.ibb.co/0y9WRTNF/rain-icon.png",
    "10d": "https://i.ibb.co/ZzbCgsmj/rainy-day-icon.png",
    "10n": "https://i.ibb.co/GQ3nWqSz/rainy-night-icon.png",
    "11d": "https://i.ibb.co/kpdq61W/thunderstorm-day-icon.png",
    "11n": "https://i.ibb.co/S7V0pBXg/thunderstorm-night-icon.png",
    "13d": "https://i.ibb.co/FkzKbnRm/snowflake-icon.png",
    "13n": "https://i.ibb.co/FkzKbnRm/snowflake-icon.png",
    "50d": "https://i.ibb.co/8gKqgzMH/mist-icon.png",
    "50n": "https://i.ibb.co/8gKqgzMH/mist-icon.png",
  };
  return (
    <img className="weather-icon" src={imageMapping[props.img]} border="0" />
  );
}
