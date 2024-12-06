"use client";
import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { supabase } from "../../lib/supabaseClient";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function MapContainer({ selectedRouteId, isSatellite, geolocateControlRef }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (!map.current) {
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
      });
    }
  }, [isSatellite]);
    useEffect(() => {
    if (map.current) {
      map.current.setStyle(
        isSatellite
          ? "mapbox://styles/mapbox/satellite-streets-v11"
          : "mapbox://styles/mapbox/streets-v11"
      );
    }
  }, [isSatellite]);

  useEffect(() => {
    if (map.current && selectedRouteId) {
      const fetchRoute = async () => {
        const { data: routeData } = await supabase
          .from("routes")
          .select("*")
          .eq("id", selectedRouteId)
          .single();

        if (routeData) {
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
            paint: { "line-color": "#3b84f0", "line-width": 5 },
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
      };

      fetchRoute();
    }
  }, [selectedRouteId]);

  return <div ref={mapContainer} style={{ height: "80vh", width: "100%" }} />;
}
