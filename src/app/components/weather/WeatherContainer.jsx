"use client";

import { useEffect, useState } from "react";
import Weather from "./Weather";

const WeatherContainer = ({ city = "Copenhagen", apiKey, weather }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        if (!response.ok) {
          throw new Error();
        }
        const weatherData = await response.json();
        setData(weatherData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, apiKey]);

  if (loading) {
    return <div>{weather.loading}</div>;
  }

  return <Weather city={city} weather={weather} data={data} />;
};

export default WeatherContainer;
