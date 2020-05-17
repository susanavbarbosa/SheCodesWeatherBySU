import React, { useState } from "react";
import axios from "axios";
import CompleteDate from "./CompleteDate";
import Forecast from "./Forecast";

import "./App.css";
import "./Weather.css";

export default function Weather(props) {
  let [city, setCity] = useState("");
  let [selected, setSelected] = useState(false);
  let [weather, setWeather] = useState({});

  function displayWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
    setSelected(true);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "393488bece3879e2bb4c2caa27c7b032";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        className="city-search"
        type="Search"
        placeholder="Enter City Name"
        autoFocus="on"
        onChange={updateCity}
      />
      <button type="Submit" className="search-button">
        Search
      </button>
    </form>
  );

  if (selected) {
    return (
      <div className="card">
        <h2>{form}</h2>
        <h4>
          <CompleteDate date={weather.date} />
        </h4>
        <div className="row">
          <div className="col-4">
            <div className="result">
              <img src={weather.icon} alt={weather.description} />
              <p>{Math.round(weather.temperature)}°C | F</p>
            </div>
            <p className="text-capitalize">
              <span className="cityTbc">{city}</span>
            </p>
          </div>
          <div className="col-6">
            <ul>
              <li className="text-capitalize">Sky: {weather.description}</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind}km/h</li>
              <li className="weather-advice">*wear sunscreen</li>
            </ul>
          </div>
        </div>
        <h5>Next:</h5>
        <div>
          <div>
            <Forecast />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="nextnamedays">Monday</div>
                <p className="maxdegrees" id="dailyMaxTem">
                  22ºC
                </p>
                <p className="mindegrees" id="dailyMinTem">
                  10ºC
                </p>
              </div>
              <div className="col-sm">
                <div className="nextnamedays">Monday</div>
                <p className="maxdegrees" id="dailyMaxTem">
                  22ºC
                </p>
                <p className="mindegrees" id="dailyMinTem">
                  10ºC
                </p>
              </div>
              <div className="col-sm">
                <div className="nextnamedays">Monday</div>
                <p className="maxdegrees" id="dailyMaxTem">
                  22ºC
                </p>
                <p className="mindegrees" id="dailyMinTem">
                  10ºC
                </p>
              </div>
              <div className="col-sm">
                <div className="nextnamedays">Monday</div>
                <p className="maxdegrees" id="dailyMaxTem">
                  22ºC
                </p>
                <p className="mindegrees" id="dailyMinTem">
                  10ºC
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card">
        <h2>{form}</h2>
      </div>
    );
  }
}
