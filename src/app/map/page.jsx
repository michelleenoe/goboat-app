"use client";
import { useState, useRef, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken = "pk.eyJ1IjoibWljaGVsbGVlbm9lIiwiYSI6ImNtNDhrMXVkdzAwaWYyanIxNmRkcG51bHIifQ.1f5E8vgLBAwQTpMKq88znw";


export default function MapPage() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [route, setRoute] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const userMarker = useRef(null); // Ref til brugerens markør

  // Hent "én times ruten" fra Supabase
  useEffect(() => {
    const fetchRoute = async () => {
      const { data, error } = await supabase
        .from("routes")
        .select("*")
        .eq("name", "1 hour"); // Filtrer på rutens navn

      if (error) {
        console.error("Fejl ved hentning af rute:", error);
      } else if (data && data.length > 0) {
        setRoute(data[0].coordinates);
      }
    };

    fetchRoute();
  }, []);

  // Initialiser Mapbox, og tilføj ruten
  useEffect(() => {
    if (map.current || !route) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: route[0], // Startpunkt for ruten
      zoom: 13,
    });

    map.current.on("load", () => {
      // Tilføj ruten til kortet
      map.current.addSource("route", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: route,
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
          "line-color": "#3b84f0",
          "line-width": 5,
        },
      });
    });
  }, [route]);

  // Følg brugerens position i realtid
  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation er ikke understøttet af denne browser.");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const userCoords = [longitude, latitude];
        setUserLocation(userCoords);


        if (map.current && userCoords) {
          if (!userMarker.current) {
            userMarker.current = new mapboxgl.Marker({ color: "red" })
              .setLngLat(userCoords)
              .addTo(map.current);
          } else {
            userMarker.current.setLngLat(userCoords);
          }
        }
      },
      (error) => {
        console.error("Fejl ved hentning af GPS-position:", error);
        alert("Kunne ikke hente GPS-position.");
      },
      {
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeout: 5000,
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <div>
      <div
        ref={mapContainer}
        className="h-[40vh] w-full sm:h-[30vh] md:h-[80vh] lg:h-[90vh]"
      />
    </div>
  );
}
