import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Temperature from "./Temperature";
import Location from "./Location";
import Date from "./Date";
import axios from "axios";

function App() {
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
          <Location />
          <Date />
          <Temperature />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
