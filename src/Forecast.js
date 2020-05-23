import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import HourlyForecast from "./HourlyForecast";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
    console.log(response.data);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <HourlyForecast data={forecast.list[0]} />
        <HourlyForecast data={forecast.list[1]} />
        <HourlyForecast data={forecast.list[2]} />
        <HourlyForecast data={forecast.list[3]} />
        <HourlyForecast data={forecast.list[4]} />
      </div>
    );
  } else {
    let apiKey = "393488bece3879e2bb4c2caa27c7b032";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleForecastResponse);

    return null;
  }
}
