"use client";
import { useRef, useState, useEffect } from "react";
import MapContainer from "@/app/components/map/MapContainer";
import { RouteFilter } from "@/app/components/map/RouteFilter";
import { RouteIcon } from "@/app/components/map/RouteIcons";
import { useLanguage } from "@/app/lib/context/LanguageContext";
import LoadingPage from "../components/loading/LoadingPage";
import "@/styles/mapstyles.css";
import { translations, routes } from "@/app/lib/content/mapData";

const MapPage = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { language } = useLanguage();

  useEffect(() => {
    const initializeMap = async () => {
      setTimeout(() => {
        setIsLoading(false);
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

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <section className="relative  -mx-4 ">
      <h1 className="sr-only">Map Page</h1>
      <MapContainer mapRef={map} mapContainer={mapContainer} />

      <div className="absolute top-2 right-4 z-10 flex flex-col items-center space-y-2">
        <button
          onClick={() => setIsFilterOpen((prev) => !prev)}
          className="bg-grey2 hover:bg-lightBlue p-3 rounded-full shadow-md flex items-center space-x-2 text-typoPrimary"
          aria-expanded={isFilterOpen}
          aria-label="Toggle route filter"
        >
          <RouteIcon width={24} height={24} />

          {selectedRoute && (
            <span className="text-typoPrimary">
              {translations[language][selectedRoute]}
            </span>
          )}
        </button>
      </div>
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
    </section>
  );
};

export default MapPage;
