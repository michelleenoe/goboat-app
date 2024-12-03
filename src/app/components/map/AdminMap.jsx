"use client";

import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import { supabase } from "../../lib/supabaseClient";

mapboxgl.accessToken = "pk.eyJ1IjoibWljaGVsbGVlbm9lIiwiYSI6ImNtNDhrMXVkdzAwaWYyanIxNmRkcG51bHIifQ.1f5E8vgLBAwQTpMKq88znw";

export default function AdminMap() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [draw, setDraw] = useState(null);
    const [drawnRoute, setDrawnRoute] = useState(null);
  
    useEffect(() => {
      if (map.current) return;
  
      // Initialiser Mapbox
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [12.5683, 55.6761], 
        zoom: 13,
      });
  
      // Tilføj Mapbox Draw
      const drawControl = new MapboxDraw({
        displayControlsDefault: false, 
        controls: {
          line_string: true, 
          trash: true, 
        },
      });
  
      map.current.addControl(drawControl);
      setDraw(drawControl);
  
      // Håndter oprettelse af nye ruter
      map.current.on("draw.create", (e) => {
        const route = e.features[0].geometry.coordinates; // Hent rute-koordinater
        setDrawnRoute(route);
      });
    }, []);
  
    const saveRoute = async () => {
      if (!drawnRoute) {
        alert("Du skal tegne en rute først!");
        return;
      }
  
      const routeName = prompt("Navngiv din rute:");
      if (!routeName) {
        alert("Rutenavnet kan ikke være tomt!");
        return;
      }
  
      // Gem ruten i Supabase
      const { data, error } = await supabase.from("routes").insert([
        { name: routeName, coordinates: drawnRoute },
      ]);
  
      if (error) {
        console.error("Fejl ved gemning af rute:", error);
        alert("Kunne ikke gemme ruten.");
      } else {
        alert(`Ruten "${routeName}" er blevet gemt!`);
        setDrawnRoute(null); // Nulstil tegningen
        draw.deleteAll(); // Fjern tegningen fra kortet
      }
    };
  
    return (
      <div>
        <div ref={mapContainer} style={{ height: "30vh", width: "50%" }} />
        <button
          onClick={saveRoute}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Gem Rute
        </button>
      </div>
    );
  }