import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import React, { useState } from "react";

export default function Currenttemp() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      current: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      windspeed: Math.round(response.data.wind.speed),
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
      time: "Thursday, 10:00 am",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Reactcontainer">
        <div className="App">
          <div className="Container">
            <div className="Weather">
              <div className="card border-info mb-3">
                <div className="card-header">
                  <div className="card-header">
                    <div className="Searchbar">
                      <form id="searchForm">
                        <div className="row" max-width="80%">
                          <div class="col-5 col-md-5 col-lg-4">
                            <input
                              id="inputCity"
                              type="search"
                              placeholder="Enter a City"
                              class="search-input"
                              autocomplete="off"
                              input
                            ></input>
                          </div>
                          <div className="col-5 col-md-4 col-lg-2 p-0">
                            <input
                              id="searchButton"
                              type="submit"
                              class="btn btn-outline-info w-100"
                              value="Search"
                              input
                            ></input>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="col-2 col-md-3 col-lg-6"></div>
                </div>

                <div className="card-body text-info">
                  <div className="row">
                    <div className="col-8">
                      <h1 class="City">New York</h1>
                    </div>
                    <div className="col-4">
                      <div className="currenttemp">
                        <h1 className="currentTemp">
                          <img
                            id="currentIcon"
                            alt={weatherData.current}
                            src={weatherData.iconUrl}
                          ></img>
                          <span id="currentTemperature">
                            {" "}
                            {weatherData.temperature}{" "}
                          </span>
                          <span id="units"> °F </span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="Conditions">
                      <ul>
                        <li>
                          Last updated:{" "}
                          <span id="date">{weatherData.time}</span>
                          <br></br>
                          <span className="text-capitalize">
                            {weatherData.current}
                          </span>
                        </li>
                        <li>
                          Humidity:{" "}
                          <span id="humidity"> {weatherData.humidity}</span>%
                        </li>
                        <li>
                          Wind Speed:{" "}
                          <span id="windSpeed"> {weatherData.windspeed} </span>{" "}
                          mph
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div id="forecast"></div>
              </div>
            </div>
          </div>
          <footer>
            <center>
              Open Source Code by Kendall Janka available on &nbsp;
              <a href="https://github.com/kendall-janka/WeatherReact">GitHub</a>
            </center>
          </footer>
        </div>
      </div>
    );
  } else {
    const apiKey = "4900o839bet5aaf3e9a5c07fb3d6686a";
    let city = "New York";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }
}
