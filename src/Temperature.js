import React from "react";
import "./styles.css";

export default function Temperature() {
  return (
    <div>
      <img
        src="http://openweathermap.org/img/wn/01d@2x.png"
        alt="Clear"
        id="icon"
      />
      <div class="clearfix weather-temperature">
        <h1 id="temperature">12</h1>
        <span class="units">
          <a
            href="https://pt.wikipedia.org/wiki/Grau_Celsius"
            id="celsius-link"
          >
            ºC |
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Fahrenheit"
            id="fahrenheit-link"
          >
            ºF
          </a>
        </span>
      </div>
      <h2 id="temp-description">Overcast Clouds</h2>
      <h3 id="temp-caracteristics">
        humidity: 80%
        <br />
        wind: 10km/h
      </h3>
    </div>
  );
}
