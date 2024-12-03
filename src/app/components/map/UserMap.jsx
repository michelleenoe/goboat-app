"use client";

import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { supabase } from "../lib/supabaseClient";

mapboxgl.accessToken = "DIN_MAPBOX_API_NØGLE";

export default function UserMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [routes, setRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState(null);

  useEffect(() => {
    const fetchRoutes = async () => {
      const { data, error } = await supabase.from("routes").select("*");
      if (error) {
        console.error("Fejl ved hentning af ruter:", error);
      } else {
        setRoutes(data);
      }
    };

    fetchRoutes();
  }, []);

  useEffect(() => {
    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [12.5683, 55.6761], // København
        zoom: 13,
      });
    }

    if (selectedRoute) {
      map.current.on("load", () => {
        map.current.addSource("route", {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: selectedRoute.coordinates,
            },
          },
        });

        map.current.addLayer({
          id: "route",
          type: "line",
          source: "route",
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#3b82f6",
            "line-width": 5,
          },
        });
      });
    }
  }, [selectedRoute]);

  return (
    <div>
      <header className="p-4 bg-gray-800 text-white">
        <h1 className="text-2xl">Vælg en rute</h1>
        <select
          onChange={(e) =>
            setSelectedRoute(routes.find((r) => r.id === e.target.value))
          }
          className="mt-2 p-2 rounded bg-white text-black"
        >
          <option value="">Vælg en rute</option>
          {routes.map((route) => (
            <option key={route.id} value={route.id}>
              {route.name}
            </option>
          ))}
        </select>
      </header>

      <div ref={mapContainer} style={{ height: "80vh", width: "100%" }} />
    </div>
  );
}
