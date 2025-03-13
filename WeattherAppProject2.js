
// React code:
import React, { useState } from "react";
import "./App.css"

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;
    try {
      // Get latitude and longitude from Open-Meteo's geocoding API By giving search city name
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
      );
      const geoData = await geoResponse.json();
      if (!geoData.results || geoData.results.length === 0) {
        setWeather(null);
        return;
      }
      
/*
{
  "results": [
    {
      "name": "Hyderabad",
      "latitude": 17.385,
      "longitude": 78.4867,
      "country": "India"
    }
  ]
}
*/
      const { latitude, longitude } = geoData.results[0];
      // Fetch weather data using latitude and longitude
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherResponse.json();
      setWeather(weatherData.current_weather);
    } 
    catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
/*
  {
  "latitude": 17.385,
  "longitude": 78.4867,
  "generationtime_ms": 0.135,
  "utc_offset_seconds": 19800,
  "timezone": "Asia/Kolkata",
  "timezone_abbreviation": "IST",
  "elevation": 505.0,
  "current_weather": {
    "temperature": 32.5,
    "windspeed": 15.2,
    "winddirection": 120,
    "weathercode": 1,
    "is_day": 1,
    "time": "2025-03-02T12:00"
  }
}
*/

  return (
    <div className="container">
      <h1 className="title">Weather App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="input-field"
        />
        <button onClick={fetchWeather} className="button">
          Get Weather
        </button>
      </div>
      {weather && (
        <div className="weather-card">
          <h2 className="city-name">{city}</h2>
          <p className="temperature">Temperature: {weather.temperature}°C</p>
          <p className="wind-speed">Wind Speed: {weather.windspeed} km/h</p>
        </div>
      )}
    </div>
  );
}

/*
CSS Properties::

.container{
  width:500px;
  height:300px;

  margin-left:500px;
  margin-top:200px;
  padding-left:50px;
  padding-top:10px;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  

  border:solid 5px aqua;
  background-color: lightblue;

}

.title{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-left: 120px;
}

.input-field{
  height: 30px;
  width: 200px;
  margin-left: 100px;
  outline: none;
  border-radius: none;
  gap: 10px;
  align-self: center;
  background-color:goldenrod;
  color: blue;
}

.button{
  height: 30px;
  margin-left: 5px;
  background-color: rgb(154, 33, 51);
}

.weather-card{
  height: 200px;
  width: 250px;
  border: solid 1px black;
  margin-top: 10px;
  margin-left: 100px;
  text-align: center;
  color: rgb(21, 122, 223);
}

.city-name{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.temperature{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.wind-speed{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
  */
