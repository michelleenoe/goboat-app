"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import mapboxgl from "mapbox-gl";
import { supabase } from "../../lib/supabaseClient";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function MapContainer({ selectedRouteId, isSatellite, geolocateControlRef }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const mapboxglRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [routeCache, setRouteCache] = useState({});

  useEffect(() => {
    async function loadMap() {
      if (!mapContainer.current || !(mapContainer.current)) {
        console.error("Map container is invalid or not attached to the DOM.");
        return;
      }

      if (!map.current) {
        try {
          const { default: mapboxgl } = await import("mapbox-gl");
          mapboxglRef.current = mapboxgl;

          mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

          if (!mapboxgl.supported()) {
            alert("Your browser does not support Mapbox GL.");
            return;
          }

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

            const geolocateControl = new mapboxgl.GeolocateControl({
              positionOptions: { enableHighAccuracy: true },
              trackUserLocation: true,
              showUserHeading: true,
            });

            map.current.addControl(geolocateControl, "bottom-right");
            geolocateControlRef.current = geolocateControl;

            geolocateControl.on("geolocate", () => {
              const markerElement = document.querySelector(".mapboxgl-user-location");
              if (markerElement) {
                markerElement.style.backgroundColor = "var(--tw-color-gb-yellow)";
                markerElement.style.borderColor = "var(--tw-color-gb-yellow)";
              }
            });
          });

          map.current.on("error", (error) => {
            console.error("Mapbox error:", error);
          });
        } catch (error) {
          console.error("Error loading Mapbox:", error);
        }
      }
    }

    if (mapContainer.current) {
      loadMap();
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [isSatellite]);

  useEffect(() => {
    if (map.current && selectedRouteId) {
      let isSubscribed = true;

      const fetchRoute = async () => {
        setLoading(true);

        if (routeCache[selectedRouteId]) {
          console.log("Using cached route data.");
          updateMap(routeCache[selectedRouteId]);
          setLoading(false);
          return;
        }

        const { data: routeData, error } = await supabase
          .from("routes")
          .select("*")
          .eq("id", selectedRouteId)
          .single();

        if (error) {
          console.error("Error fetching route:", error);
        } else if (routeData && isSubscribed && routeData.coordinates?.length > 0) {
          setRouteCache((prev) => ({ ...prev, [selectedRouteId]: routeData })); 
          updateMap(routeData);
        } else {
          console.warn("No valid coordinates for the selected route.");
        }

        setLoading(false);
      };

      const updateMap = (routeData) => {
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
              coordinates: routeData.coordinates,
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

        const bounds = routeData.coordinates.reduce(
          (bounds, coord) => bounds.extend(coord),
          new mapboxgl.LngLatBounds(
            routeData.coordinates[0],
            routeData.coordinates[0]
          )
        );
        map.current.fitBounds(bounds, { padding: 50 });
      };

      fetchRoute();

      return () => {
        isSubscribed = false;
      };
    }
  }, [selectedRouteId, routeCache]);

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
