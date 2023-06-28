import React from "react";
import "./App.css";
export default function Conditions() {
  return (
    <div className="Conditions">
      <ul>
        <li>
          Last updated: <span id="date"></span>,
          <span id="currentConditions">Partly Cloudy</span>
        </li>
        <li>
          Humidity: <span id="humidity"> 55</span>%
        </li>
        <li>
          Wind Speed: <span id="windSpeed"> 5 </span> mph
        </li>
      </ul>
    </div>
  );
}
