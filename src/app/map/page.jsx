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
  const userMarker = useRef(null); 

  useEffect(() => {
    const fetchRoute = async () => {
      const { data, error } = await supabase
        .from("routes")
        .select("*")
        .eq("name", "1 hour"); 

      if (error) {
        console.error("Fejl ved hentning af rute:", error);
      } else if (data && data.length > 0) {
        setRoute(data[0].coordinates);
      }
    };

    fetchRoute();
  }, []);

  useEffect(() => {
    if (map.current || !route) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: route[0], 
      zoom: 13,
    });

    map.current.on("load", () => {
      
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
              <div ref={mapContainer} style={{ height: "80vh", width: "100%" }} />

    </div>
  );
}
