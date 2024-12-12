"use client";
import React, { useRef, useState, useEffect } from "react";
import MapContainer from "@/app/components/map/MapContainer";
import RouteFilter from "@/app/components/map/RouteFilter";
import { RouteIcon } from "@/app/components/map/RouteIcons";
import { useLanguage } from "@/app/lib/context/language";
import LoadingPage from "../LoadingPage";
import "./styles.css";

const MapPage = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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
    const initializeMap = async () => {
      // Simuler en loading-forsinkelse
      setTimeout(() => {
        setIsLoading(false); // Kort er nu indlæst
      }, 2000);
    };

    initializeMap();
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

  return (
    <div className="relative w-full h-screen">
      {/* Kort-container skal altid være til stede */}
      <MapContainer mapRef={map} mapContainer={mapContainer} />

      {/* Loading-overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-20">
          <LoadingPage />
        </div>
      )}

      {/* Rutevalg-knap */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-4">
        <button
          onClick={() => setIsFilterOpen((prev) => !prev)}
          className="p-3 rounded-full bg-white shadow-lg flex items-center justify-center"
        >
          <RouteIcon width={24} height={24} />
        </button>
      </div>

      {/* Rutevælgeren */}
      {isFilterOpen && (
        <RouteFilter
          routes={routes}
          selectedRoute={selectedRoute}
          translations={translations}
          language={language}
          onSelect={(routeId) => {
            setSelectedRoute(routeId);
            setIsFilterOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default MapPage;
