import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function HourlyForecast(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}h00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}ºC`;
  }

  return (
    <div className="col">
      <div className="Hourly">{hours()}</div>
      <WeatherIcon code={props.data.weather[0].icon} />
      {temperature()}
    </div>
  );
}
