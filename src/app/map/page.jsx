"use client";
import "./styles.css";
import React, { useState, useCallback, useEffect, useRef } from "react";
import MapContainer from "../components/map/MapContainer";
import IconButton from "../components/map/IconButton";
import RouteSelection from "../components/map/routes/RouteSelection";
import {
  RouteIcon,
  GeolocateIcon,
  ToggleMapIcon,
} from "../components/map/svgs/SvgIcons";
import { supabase } from "../lib/supabaseClient";

export default function MapPage() {
  const [showSatellite, setShowSatellite] = useState(false);
  const [showRouteSelect, setShowRouteSelect] = useState(false);
  const [availableRoutes, setAvailableRoutes] = useState([]);
  const [selectedRouteId, setSelectedRouteId] = useState(null);
  const [geolocationActive, setGeolocationActive] = useState(false);
  const geolocateControlRef = useRef(null);

  const toggleMapStyle = useCallback(() => {
    setShowSatellite((prev) => !prev);
  }, []);

  const toggleRouteSelect = useCallback(() => {
    setShowRouteSelect((prev) => !prev);
  }, []);

  useEffect(() => {
    const fetchAvailableRoutes = async () => {
      const { data, error } = await supabase
        .from("routes")
        .select("id, name, coordinates");

      if (error) {
        console.error("Error fetching routes:", error);
      } else {
        setAvailableRoutes(data || []);
      }
    };
    fetchAvailableRoutes();
  }, []);

  const handleGeolocateClick = useCallback(() => {
    if (geolocateControlRef.current) {
      geolocateControlRef.current.trigger();
      setGeolocationActive(true);
    } else {
      console.error("Geolocate control not set.");
    }
  }, []);

  const getSelectedRouteName = () => {
    const selectedRoute = availableRoutes.find(
      (route) => route.id === selectedRouteId
    );
    return selectedRoute ? selectedRoute.name : null;
  };

  const handleRouteSelect = useCallback((routeId) => {
    setSelectedRouteId(routeId);
    setShowRouteSelect(false);
  }, []);

  return (
    <div className="relative  -mx-4">
      <MapContainer
        selectedRouteId={selectedRouteId}
        isSatellite={showSatellite}
        geolocateControlRef={geolocateControlRef}
      />

      <div className="absolute top-2 right-4 z-30 flex flex-col items-center space-y-2">
        <IconButton
          onClick={toggleRouteSelect}
          icon={<RouteIcon />}
          label="Toggle Route Selection"
        >
          {getSelectedRouteName()}
        </IconButton>

        <IconButton
          onClick={handleGeolocateClick}
          icon={
            <GeolocateIcon
              className={
                geolocationActive ? "text-warningRed" : "text-gray-400"
              }
            />
          }
          label="Geolocate"
        />

        <IconButton
          onClick={toggleMapStyle}
          icon={<ToggleMapIcon />}
          label="Toggle Map Style"
        />

        {showRouteSelect && (
          <RouteSelection
            availableRoutes={availableRoutes}
            selectedRouteId={selectedRouteId}
            handleRouteSelect={handleRouteSelect}
            getRouteName={(routeId) =>
              availableRoutes.find((route) => route.id === routeId)?.name || ""
            }
          />
        )}
      </div>
    </div>
  );
}
