// NY VERSION

// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import weatherData from "@/content/weatherData";

// const Weather = ({ city = "Copenhagen", apiKey, lang = "en" }) => {
//   const [weatherDataState, setWeatherDataState] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const t = weatherData[lang] || weatherData.en;

//   useEffect(() => {
//     const fetchWeather = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(
//           `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch weather data");
//         }
//         const data = await response.json();
//         setWeatherDataState(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchWeather();
//   }, [city, apiKey]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-20">
//         <span>{t.loading}</span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div>
//         {t.error}: {error}
//       </div>
//     );
//   }

//   if (!weatherDataState) {
//     return <div>{t.noData}</div>;
//   }

//   const { main, weather, wind } = weatherDataState;

//   if (!weather || !main) {
//     return <div>{t.incompleteData}</div>;
//   }

//   return (
//     <div className="px-4 py-8 max-w-4xl mx-auto">
//       <div className="px-4 py-8 rounded-xl shadow-md bg-grey1">
//         <h2 className="text-md font-semibold mb-4">
//           {t.weatherIn} {city}
//         </h2>
//         <div className="flex items-center gap-4">
//           <div className="w-12 h-12 relative">
//             <Image
//               src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
//               alt={weather[0].description}
//               layout="fill"
//               objectFit="contain"
//             />
//           </div>
//           <div>
//             <p className="text-md">
//               <strong>{main.temp}°C</strong> ({weather[0].description})
//             </p>
//             <p className="text-sm">
//               {t.humidity}: {main.humidity}%
//             </p>
//             <p className="text-sm">
//               {t.wind}: {wind.speed} m/s
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Weather;

//GAMMEL VERSION

// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// const Weather = ({ city = "Copenhagen" }) => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

//   useEffect(() => {
//     const fetchWeather = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(
//           `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch weather data");
//         }
//         const data = await response.json();
//         setWeatherData(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchWeather();
//   }, [city, apiKey]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-20">
//         <span>Loading weather...</span>
//       </div>
//     );
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!weatherData) {
//     return <div>No weather data available</div>;
//   }

//   const { main, weather, wind } = weatherData;

//   if (!weather || !main) {
//     return <div>Weather data is incomplete</div>;
//   }

//   return (
//     <div className="px-4 py-8 max-w-4xl mx-auto ">
//       <div className="px-4 py-8 rounded-xl shadow-md bg-grey1 ">
//         <h2 className="text-md font-semibold mb-4">Weather in {city}</h2>
//         <div className="flex items-center gap-4">
//           <div className="w-12 h-12 relative">
//             <Image
//               src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
//               alt={weather[0].description}
//               layout="fill"
//               objectFit="contain"
//             />
//           </div>
//           <div>
//             <p className="text-md">
//               <strong>{main.temp}°C</strong> ({weather[0].description})
//             </p>
//             <p className="text-sm">Humidity: {main.humidity}%</p>
//             <p className="text-sm">Wind: {wind.speed} m/s</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Weather;

//FALLBACK VERSION

"use client";

import React, { useState } from "react";
import Image from "next/image";
import weatherData from "@/content/weatherData";

const Weather = ({ city = "Copenhagen", lang = "en" }) => {
  const fallbackWeatherData = {
    main: { temp: 10, humidity: 80 },
    weather: [{ description: "clear sky", icon: "01d" }],
    wind: { speed: 5 },
  };

  const [weatherDataState] = useState(fallbackWeatherData);

  const t = weatherData[lang] || weatherData.en;

  const { main, weather, wind } = weatherDataState;

  return (
    <div className="px-4 max-w-4xl mx-auto">
      <div className="px-4 py-8 rounded-xl shadow-md bg-grey1">
        <h2 className="text-md font-semibold mb-4">
          {t.weatherIn} {city}
        </h2>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 relative">
            <Image
              src="/illustrations/nr2.svg"
              alt={weather[0].description}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div>
            <p className="text-md">
              <strong>{main.temp}°C</strong> ({weather[0].description})
            </p>
            <p className="text-sm">
              {t.humidity}: {main.humidity}%
            </p>
            <p className="text-sm">
              {t.wind}: {wind.speed} m/s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
