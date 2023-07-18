import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="forecast">
        <div className="row"></div>
        <div className="col">
          <div className="forecastDay"> {forecast[0].dt} </div>
          <div className="forecastIcon"></div>
          <img
            className="currentIcon"
            alt="sunny"
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            width="40"
            height="40"
          ></img>{" "}
        </div>
        <div className="forecastTemps">
          <span className="min-temp">
            {Math.round(forecast[0].temperature.minimum)}°
          </span>
          |
          <span className="max-temp">
            {Math.round(forecast[0].temperature.maximum)}°
          </span>
        </div>
      </div>
    );
  } else {
    let apiKey = "4900o839bet5aaf3e9a5c07fb3d6686a";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
