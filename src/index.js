import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Temperature from "./Temperature";
import Location from "./Location";
import Date from "./Date";
import "bootstrap/dist/css/bootstrap.css";

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
        <footer>
          This project was coded by Diana Dancante and is{" "}
          <a
            href="https://github.com/dianasdd/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
