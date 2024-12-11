"use client";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import Image from "next/image";
import { RouteIcon } from "@/app/components/RouteIcons";
import { useLanguage } from "@/app/lib/context/language";
import "./styles.css";

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
    <div style={{ position: "relative", width: "100%", height: "90vh" }}>
      <div ref={mapContainer} style={{ width: "100%", height: "90%" }}></div>
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          zIndex: 10,
        }}
      >
        <button
          onClick={() => setIsFilterOpen((prev) => !prev)}
          style={{
            padding: "10px",
            borderRadius: "50%",
            backgroundColor: "white",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            cursor: "pointer",
          }}
        >
          <RouteIcon width={24} height={24} />
        </button>
      </div>
      {isFilterOpen && (
        <div
          className="absolute right-0 mt-0.5 w-64 bg-grey2 rounded-3xl shadow-md p-4 z-40 text-typoPrimary"
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "10px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            position: "absolute",
            top: "10px",
            left: "10px",
            zIndex: 20,
          }}
        >
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
              className={`p-2 cursor-pointer rounded-lg flex justify-between items-center hover:bg-grey1 focus:outline-none focus-visible:ring-2 focus-visible:ring-focusOrange ${
                selectedRoute === route.id ? "bg-grey1 font-regular" : ""
              }`}
              style={{
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor:
                  selectedRoute === route.id ? "#f0f0f0" : "transparent",
                cursor: "pointer",
              }}
            >
              <span>{translations[language][route.id]}</span> 
              <span
                style={{
                  border: "2px solid #ccc",
                  borderRadius: "50%",
                  width: "24px",
                  height: "24px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    selectedRoute === route.id ? "#ffc107" : "#e0e0e0",
                }}
              >
                {selectedRoute === route.id && (
                  <Image
                    src="/Icons/check.svg"
                    alt="Check icon"
                    width={16}
                    height={16}
                  />
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
