import React from "react";
import Weather from "./Weather";
import "./styles.css";

export default function App() {
  return (
    <div className="weather">
      <div class="container">
        <Weather />
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
