"use client";

import Image from "next/image";

const Weather = ({ city, weather, data }) => {
  if (!data) {
    return <div>{weather.noData}</div>;
  }

  const { main, weather: weatherDetails, wind } = data;

  if (!main || !weatherDetails) {
    return <div>{weather.incompleteData}</div>;
  }

  return (
    <div className="px-4 mx-auto">
      <div className="flex items-center justify-center text-typoPrimary">
        <div className="w-[366px] p-4 border bg-grey1 rounded-3xl shadow-md">
          <p className="text-md text-center font-semibold mb-4">
            {weather.weatherIn} {city}
          </p>
          <div className="flex justify-center items-center gap-10">
            <div className="w-20 h-20 relative bg-lightBlue rounded-full flex items-center justify-center">
              <Image
                src={`https://openweathermap.org/img/wn/${weatherDetails[0].icon}@2x.png`}
                alt={weatherDetails[0].description}
                fill
                style={{ objectFit: "contain", padding: "4px" }}
              />
            </div>
            <div>
              <p className="text-md">
                <strong>{main.temp}°C</strong> ({weatherDetails[0].description})
              </p>
              <p className="text-sm">
                {weather.humidity}: {main.humidity}%
              </p>
              <p className="text-sm">
                {weather.wind}: {wind.speed} m/s
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
