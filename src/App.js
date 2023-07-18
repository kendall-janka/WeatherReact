import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import React, { useState } from "react";

import Weatherinfo from "./WeatherInfo.js";
import WeatherForecast from "./WeatherForecast";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultcity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      current: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      windspeed: Math.round(response.data.wind.speed),
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      coordinates: response.data.coordinates,
    });
  }
  function search() {
    const apiKey = "4900o839bet5aaf3e9a5c07fb3d6686a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
    //alert(city);
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
                      <form id="searchForm" onSubmit={handleSubmit}>
                        <div className="row" max-width="80%">
                          <div class="col-5 col-md-5 col-lg-4">
                            <input
                              className="inputCity"
                              type="search"
                              placeholder="Enter a City"
                              class="search-input"
                              autocomplete="off"
                              input
                              onChange={handleCityChange}
                            ></input>
                          </div>
                          <div className="col-5 col-md-4 col-lg-2 p-0">
                            <input
                              id="searchButton"
                              className="searchButton"
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
                <Weatherinfo data={weatherData} />
                <WeatherForecast coordinates={weatherData.coordinates} />
              </div>

              <footer>
                <center>
                  Open Source Code by Kendall Janka available on &nbsp;
                  <a
                    href="https://github.com/kendall-janka/WeatherReact"
                    className="link"
                  >
                    GitHub
                  </a>
                </center>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
