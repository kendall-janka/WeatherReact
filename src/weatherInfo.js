import React from "react";
import FormatDate from "./FormatDate";
export default function Weatherinfo(props) {
  return (
    <div className="Weatherinfo">
      <div className="card-body text-info">
        <div className="row">
          <div className="col-8">
            <h1> {props.data.city}</h1>
          </div>
          <div className="col-4">
            <div className="currenttemp">
              <h1 className="currentTemp">
                <img
                  id="currentIcon"
                  alt={props.data.current}
                  src={props.data.iconUrl}
                ></img>
                <span id="currentTemperature"> {props.data.temperature} </span>
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
                <FormatDate date={props.data.date} />
                <br></br>
                <span className="text-capitalize">{props.data.current}</span>
              </li>
              <li>
                Humidity: <span id="humidity"> {props.data.humidity}</span>%
              </li>
              <li>
                Wind Speed: <span id="windSpeed"> {props.data.windspeed} </span>{" "}
                mph
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="forecast"></div>
    </div>
  );
}
