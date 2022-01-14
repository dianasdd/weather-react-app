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
          <a href="#" id="celsius-link">
            ºC |
          </a>
          <a href="#" id="fahrenheit-link">
            ºF
          </a>
        </span>
      </div>
      <h2 id="temp-description">Overcast Clouds</h2>
      <h3>
        humidity: 80%
        <br />
        wind: 10km/h
      </h3>
    </div>
  );
}