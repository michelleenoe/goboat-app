import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";

export default function MapWithDraw({ onSaveRoute }) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [drawnRoute, setDrawnRoute] = useState(null);
  
    useEffect(() => {
      if (map.current) return;
  
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [12.5683, 55.6761],
        zoom: 13,
      });
  
      const draw = new MapboxDraw({
        displayControlsDefault: false,
        controls: {
          line_string: true,
          trash: true,
        },
      });
  
      map.current.addControl(draw);
  
      map.current.on("draw.create", (e) => {
        const route = e.features[0].geometry.coordinates;
        setDrawnRoute(route);
      });
    }, []);
  
    const handleSave = () => {
      if (drawnRoute) {
        onSaveRoute(drawnRoute);
      } else {
        alert("Tegn en rute først.");
      }
    };
  
    return (
      <div>
        <div ref={mapContainer} style={{ height: "80vh", width: "100%" }} />
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Gem Rute
        </button>
      </div>
    );
  }
  
  