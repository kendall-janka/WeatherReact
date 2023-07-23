import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[day];
}

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col">
                  <div>
                    <div className="forecastDay">
                      {" "}
                      {formatDay(forecast[index].time)}{" "}
                    </div>
                    <div className="forecastIcon"></div>
                    <img
                      className="currentIcon"
                      alt="sunny"
                      src={forecast[index].condition.icon_url}
                      width="40"
                      height="40"
                    ></img>{" "}
                  </div>
                  <div className="forecastTemps">
                    <span className="min-temp">
                      {Math.round(forecast[index].temperature.minimum)}°
                    </span>
                    |
                    <span className="max-temp">
                      {Math.round(forecast[index].temperature.maximum)}°
                    </span>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
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
