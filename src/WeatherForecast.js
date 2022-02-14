import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="Forecast-day">{forecast[0].dt}</div>
            <WeatherIcon code={forecast[0].weather[0].icon} size={36} />
            <div className="Forecast-temperatures">
              <span className="Forecast-temperature-max">
                {Math.round(forecast[0].temp.max)}º
              </span>
              <span className="Forecast-temperature-min">
                {Math.round(forecast[0].temp.min)}º
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "1783f8add74cc64475f17c4cdaab4907";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt={cnt}&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
