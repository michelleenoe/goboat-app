"use client";

import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import { supabase } from "../../lib/supabaseClient";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function AdminMap() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [draw, setDraw] = useState(null);
    const [drawnRoute, setDrawnRoute] = useState(null);
  
    useEffect(() => {
      if (map.current) return;

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [12.5683, 55.6761], 
        zoom: 13,
      });
  

      const drawControl = new MapboxDraw({
        displayControlsDefault: false, 
        controls: {
          line_string: true, 
          trash: true, 
        },
      });
  
      map.current.addControl(drawControl);
      setDraw(drawControl);
  
   
      map.current.on("draw.create", (e) => {
        const route = e.features[0].geometry.coordinates; 
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
  
      const { data, error } = await supabase.from("routes").insert([
        { name: routeName, coordinates: drawnRoute },
      ]);
  
      if (error) {
        console.error("Fejl ved gemning af rute:", error);
        alert("Kunne ikke gemme ruten.");
      } else {
        alert(`Ruten "${routeName}" er blevet gemt!`);
        setDrawnRoute(null); 
        draw.deleteAll(); 
      }
    };
  
    return (
      <div>
        <div ref={mapContainer} style={{ height: "90vh", width: "85%" }} />
        <button
          onClick={saveRoute}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Gem Rute
        </button>
      </div>
    );
  }