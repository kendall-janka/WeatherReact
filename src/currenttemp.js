import React from "react";
import "./App.css";
export default function Currenttemp() {
  return (
    <div className="currenttemp">
      <h1 className="currentTemp">
        <img
          id="currentIcon"
          alt="clear"
          src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
        ></img>
        <span id="currentTemperature"> 25 </span>
        <span id="units"> °F </span>
      </h1>
    </div>
  );
}
