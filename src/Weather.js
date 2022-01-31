import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <div class="container">
          <div class="weather-app">
            <form id="search-form">
              <input
                type="search"
                placeholder="Search City"
                id="city-input"
                autocomplete="off"
              />
              <button type="submit" class="btn btn-primary">
                Search
              </button>
            </form>
            <br />
            <div>
              <div class="current-location" id="city">
                {weatherData.city}
              </div>
            </div>
            <div>
              <small id="date">
                <FormattedDate date={weatherData.date} />
              </small>
            </div>
            <div>
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                id="icon"
              />
              <div class="clearfix weather-temperature">
                <h1 id="temperature">{Math.round(weatherData.temperature)}</h1>
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
                {weatherData.description}
              </h2>
              <h3 id="temp-caracteristics">
                humidity: {weatherData.humidity}%
                <br />
                wind: {weatherData.wind} km/h
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "1783f8add74cc64475f17c4cdaab4907";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}
