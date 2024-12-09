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

  useEffect(() => {
    let mapboxInstance;
  
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
  
          map.current.addControl(geolocateControlRef.current, "bottom-right");
  
          // Ændring af farven på GPS-lokationsmarkøren
          geolocateControlRef.current.on("geolocate", () => {
            const markerElement = document.querySelector(".mapboxgl-user-location");
            if (markerElement) {
              markerElement.style.backgroundColor = "var(--tw-color-gb-yellow)"; // Tailwind color
              markerElement.style.borderColor = "var(--tw-color-gb-yellow)"; // Tailwind color
            }
          });
        });
      }
    }
  
    loadMap();
  
    return () => {
      if (mapboxInstance) {
        mapboxInstance.remove();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSatellite]);

  useEffect(() => {
    if (map.current && selectedRouteId) {
      let isSubscribed = true;

      const fetchRoute = async () => {
        setLoading(true);
        const { data: routeData, error } = await supabase
          .from("routes")
          .select("*")
          .eq("id", selectedRouteId)
          .single();

        if (error) {
          console.error("Error fetching route:", error);
        } else if (routeData && isSubscribed) {
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
        }

        setLoading(false);
      };

      fetchRoute();

      return () => {
        isSubscribed = false;
      };
    }
  }, [selectedRouteId]);

  return (
    <div className="relative" style={{ height: "80vh", width: "100%" }}>
      <div ref={mapContainer} style={{ height: "100%", width: "100%" }} />
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-gray-200 flex items-center justify-center">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-darkBlue border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
