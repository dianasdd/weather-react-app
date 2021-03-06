import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="clearfix weather-temperature">
        <h1 id="temperature">{Math.round(props.celsius)}</h1>
        <span className="units">
          ºC |
          <a href="/" onClick={showFahrenheit} id="fahrenheit-link">
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="clearfix weather-temperature">
        <h1 id="temperature">{Math.round(fahrenheit)}</h1>
        <span className="units">
          <a href="/" onClick={showCelsius} id="fahrenheit-link">
            ºC
          </a>{" "}
          |ºF
        </span>
      </div>
    );
  }
}
