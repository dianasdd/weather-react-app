import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="current-location" id="city">
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
        <WeatherTemperature celsius={props.data.temperature} />
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
