import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div class="current-location" id="city">
        {props.data.city}
      </div>
      <div>
        <small id="date">
          <FormattedDate date={props.data.date} />
        </small>
      </div>
      <div>
        <div className="float-left" id="icon">
          <WeatherIcon code={props.data.icon} />
        </div>
        <div class="clearfix weather-temperature">
          <h1 id="temperature">{Math.round(props.data.temperature)}</h1>
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
        <h2 className="text-capitalize" id="temp-description">
          {props.data.description}
        </h2>
        <h3 id="temp-caracteristics">
          humidity: {props.data.humidity}%
          <br />
          wind: {props.data.wind} km/h
        </h3>
      </div>
    </div>
  );
}
