"use client";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { RouteIcon } from "@/app/components/map/RouteIcons";
import { useLanguage } from "@/app/lib/context/language";
import "./styles.css"

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const MapPage = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { language } = useLanguage();

  const translations = {
    en: {
      "1_time": "1 hour",
      "2_time": "2 hours",
      "3_time": "3 hours",
    },
    da: {
      "1_time": "1 time",
      "2_time": "2 timer",
      "3_time": "3 timer",
    },
  };

  const routes = [
    {
      id: "1_time",
      startCoordinates: [12.577701567422764, 55.66846192119138],
    },
    {
      id: "2_time",
      startCoordinates: [12.57735593045976, 55.66879600859693],
    },
    {
      id: "3_time",
      startCoordinates: [12.577612604939503, 55.66866683925221],
    },
  ];

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/michelleenoe/cm4johago00bb01sfckyohede",
      center: [12.576565, 55.668711],
      zoom: 16.51,
    });

    const geolocateControl = new mapboxgl.GeolocateControl({
      positionOptions: { enableHighAccuracy: true },
      trackUserLocation: true,
      showUserHeading: true,
    });

    map.current.addControl(geolocateControl, "top-right");
  }, []);

  useEffect(() => {
    if (!map.current || !selectedRoute) return;

    map.current.setFilter("routes-gb", ["==", "route", selectedRoute]);

    const route = routes.find((r) => r.id === selectedRoute);
    if (route && route.startCoordinates) {
      map.current.flyTo({
        center: route.startCoordinates,
        zoom: 14,
        essential: true,
      });
    }
  }, [selectedRoute]);

  const handleRouteSelect = (routeId) => {
    setSelectedRoute(routeId);
    setIsFilterOpen(false);
  };

  return (
    <div className="relative" style={{ height: "80vh", width: "100%" }}>
      <div ref={mapContainer} style={{ height: "100%", width: "100%" }} />

      <div className="absolute top-4 left-4 z-10 flex flex-col gap-4">
        <button
          onClick={() => setIsFilterOpen((prev) => !prev)}
          className="p-3 rounded-full bg-white shadow-lg flex items-center justify-center"
        >
          <RouteIcon width={24} height={24} />
        </button>
      </div>

      {isFilterOpen && (
        <div className="absolute top-3 left-4 bg-white rounded-lg shadow-lg p-4 z-20 w-64 space-y-4">
          {routes.map((route) => (
            <div
              key={route.id}
              role="button"
              tabIndex={0}
              onClick={() => handleRouteSelect(route.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleRouteSelect(route.id);
                }
              }}
              className={`p-2 rounded-lg flex justify-between items-center ${
                selectedRoute === route.id ? "bg-grey2 font-bold" : ""
              }`}
            >
              <span>{translations[language][route.id]}</span>
              <span
                className={`rounded-full w-6 h-6 flex items-center justify-center ${
                  selectedRoute === route.id
                    ? "bg-goboatYellow"
                    : "bg-grey1"
                }`}
              >
                {selectedRoute === route.id && (
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MapPage;
