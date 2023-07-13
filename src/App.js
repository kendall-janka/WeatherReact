import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import React, { useState } from "react";

export default function Currenttemp() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData({
      temperature: Math.round(response.data.temperature.current),
    });

    setReady(true);
  }
  if (ready) {
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
                            alt="clear"
                            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
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
                          Last updated: <span id="date">12:20 pm</span>
                          <br></br>
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
