import React, { useState } from "react";
import "./TemperatureConversion.css";

export default function TemperatureConversion(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "fahrenheit") {
    return (
      <span>
        <span className="currentTemperature">{props.fahrenheit}</span>
        <span className="units">
          &nbsp;°F&nbsp;|&nbsp;
          <a href="/" className="link" onClick={showCelsius}>
            °C
          </a>
          &nbsp;
        </span>
      </span>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <span>
        <span className="currentTemperature">{Math.round(celsius)}</span>
        <span className="units">
          &nbsp;
          <a href="/" className="link" onClick={showFahrenheit}>
            °F
          </a>
          &nbsp;|&nbsp;°C
        </span>
      </span>
    );
  }
}
