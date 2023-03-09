import React from "react";
import "./App.css";
import { useState } from "react";
import Axios from "axios";

const App = () => {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState(null);

  const fetchWeather = () => {
    Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3b34987f217bdcee7ecf8aab2815ad78`
    ).then((res) => {
      setWeather({
        Weather: res.data.weather[0].main,
        temperature: res.data.main.temp,
        humidity: res.data.main.humidity,
        wind: res.data.wind.speed,
      });
    });

  };
  return (
    <div className="container">
      <h1 className="topic">Weather</h1>
      <input
        className="css-input"
        placeholder="Search..."
        onChange={(event) => {
          setCity(event.target.value);
        }}
      />

      <button className="btn" onClick={fetchWeather}>
        search
      </button>

      <div className="weat">
        <h2 className="">Weather : {weather.Weather}</h2>
      </div>

      <div className="wind">
        <h2 className="">Wind Speed : {weather.wind} </h2>
      </div>

      <div className="temp">
        <h2 className="">Temperature(K) : {weather.temperature} </h2>
      </div>
      <div className="humid">
      <h2 className="">Humidity : {weather.humidity}</h2>

      </div>
    </div>
  );
};

export default App;
