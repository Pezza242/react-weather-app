import React from "react";

export default function Footer() {
  return (
    <footer className="Footer">
      This project was coded by{" "}
      <a href="https://github.com/Pezza242" target="_blank" rel="noreferrer">
        Peri Williams Yearwood
      </a>
      , is{" "}
      <a
        href="https://github.com/Pezza242/react-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        open sourced on Github
      </a>
      , and is{" "}
      <a
        href="https://pezza242-react-weather-app.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        hosted on Netlify
      </a>
    </footer>
  );
}
