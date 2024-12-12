"use client";
import React, { useRef, useState, useEffect } from "react";
import MapContainer from "@/app/components/map/MapContainer";
import RouteFilter from "@/app/components/map/RouteFilter";
import { RouteIcon } from "@/app/components/map/RouteIcons";
import { useLanguage } from "@/app/lib/context/language";
import LoadingPage from "../LoadingPage";
import "./styles.css";
import { translations, routes } from "@/app/lib/content/mapData";

const MapPage = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { language } = useLanguage();

  useEffect(() => {
    // Simuler kortinitialisering
    const initializeMap = async () => {
      setTimeout(() => {
        setIsLoading(false); // Skjul LoadingPage, når kortet er indlæst
      }, 2000); // Simulerer en loading-periode
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

  if (isLoading) {
    return <LoadingPage />; // Vis LoadingPage, mens kortet indlæses
  }

  return (
    <div className="relative w-full h-screen">
      {/* Kort-container skal altid være til stede */}
      <MapContainer mapRef={map} mapContainer={mapContainer} />

      <div className="absolute top-2 right-3 z-10 flex flex-col gap-4">
        <button
          onClick={() => setIsFilterOpen((prev) => !prev)}
          className="p-3 rounded-full bg-white shadow-lg flex items-center gap-2"
        >
          <RouteIcon width={24} height={24} />

          {selectedRoute && (
            <span className="text-typoPrimary">
              {translations[language][selectedRoute]}
            </span>
          )}
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
