import React from "react";
import FormatDate from "./FormatDate";
import TemperatureConversion from "./TemperatureConversion";

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
                  className="currentIcon"
                  alt={props.data.current}
                  src={props.data.iconUrl}
                ></img>
                <TemperatureConversion fahrenheit={props.data.temperature} />
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
                Humidity:{" "}
                <span className="humidity"> {props.data.humidity}</span>%
              </li>
              <li>
                Wind Speed:{" "}
                <span className="windSpeed"> {props.data.windspeed} </span> mph
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="forecast"></div>
    </div>
  );
}
