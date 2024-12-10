"use client";
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { supabase } from "../../lib/supabaseClient";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function MapContainer({ selectedRouteId, isSatellite, geolocateControlRef }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const mapboxglRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [routeData, setRouteData] = useState(null);

  useEffect(() => {
    async function loadMap() {
      if (!map.current) {
        const { default: mapboxgl } = await import("mapbox-gl");
        mapboxglRef.current = mapboxgl;

        mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: isSatellite
            ? "mapbox://styles/mapbox/satellite-streets-v11"
            : "mapbox://styles/mapbox/streets-v11",
          center: [12.57856, 55.66952],
          zoom: 13,
        });

        map.current.on("load", () => {
          console.log("Map loaded successfully");

          geolocateControlRef.current = new mapboxgl.GeolocateControl({
            positionOptions: { enableHighAccuracy: true },
            trackUserLocation: true,
            showUserHeading: true,
          });
          geolocateControlRef.current.on("geolocate", () => {
            const markerElement = document.querySelector(".mapboxgl-user-location");
            if (markerElement) {
              markerElement.style.backgroundColor = "var(--tw-color-gb-yellow)";
              markerElement.style.borderColor = "var(--tw-color-gb-yellow)";
            }
          });
          if (routeData) {
            addRouteToMap(routeData);
          }
        });
      }
    }

    loadMap();

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  useEffect(() => {
    async function updateMapStyle() {
      if (map.current) {
        const style = isSatellite
          ? "mapbox://styles/mapbox/satellite-streets-v11"
          : "mapbox://styles/mapbox/streets-v11";

        try {
          map.current.setStyle(style);

          map.current.once("styledata", () => {
            console.log("Map style updated to:", style);
            
            if (geolocateControlRef.current) {
              map.current.addControl(geolocateControlRef.current, "bottom-right");
            }

            if (routeData) {
              addRouteToMap(routeData);
            }
          });
        } catch (error) {
          console.error("Failed to update map style:", error);
        }
      }
    }

    updateMapStyle();
  }, [isSatellite]);

  useEffect(() => {
    if (map.current && selectedRouteId) {
      let isSubscribed = true;

      const fetchRoute = async () => {
        setLoading(true);

        const { data: fetchedRoute, error } = await supabase
          .from("routes")
          .select("*")
          .eq("id", selectedRouteId)
          .single();

        if (error) {
          console.error("Error fetching route:", error);
        } else if (fetchedRoute && isSubscribed) {
          setRouteData(fetchedRoute);
          addRouteToMap(fetchedRoute);
        }

        setLoading(false);
      };

      fetchRoute();

      return () => {
        isSubscribed = false;
      };
    }
  }, [selectedRouteId]);

  const addRouteToMap = (route) => {
    if (map.current) {
      const mapboxgl = mapboxglRef.current;

      if (map.current.getSource("route")) {
        map.current.removeLayer("route");
        map.current.removeSource("route");
      }

      map.current.addSource("route", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: route.coordinates,
          },
        },
      });

      map.current.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: { "line-join": "round", "line-cap": "round" },
        paint: { "line-color": "#A1121B", "line-width": 5 },
      });

      const bounds = route.coordinates.reduce(
        (bounds, coord) => bounds.extend(coord),
        new mapboxgl.LngLatBounds(
          route.coordinates[0],
          route.coordinates[0]
        )
      );
      map.current.fitBounds(bounds, { padding: 50 });
    }
  };

  return (
    <div className="relative" style={{ height: "80vh", width: "100%" }}>
      <div ref={mapContainer} style={{ height: "100%", width: "100%" }} />
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-gray-200 flex items-center justify-center">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-darkBlue border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
          </div>
        </div>
      )}
    </div>
  );
}
