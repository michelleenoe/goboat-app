"use client";
import { useEffect } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const MapContainer = ({ mapRef, mapContainer, onMapLoad = () => {} }) => {
  useEffect(() => {
    if (mapRef.current) return;

    mapRef.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/michelleenoe/cm4johago00bb01sfckyohede",
      center: [12.576565, 55.668711],
      zoom: 16.51,
    });

    const geolocateControl = new mapboxgl.GeolocateControl({
      positionOptions: { enableHighAccuracy: true },
      trackUserLocation: true,
      showUserHeading: true,
    });

    mapRef.current.addControl(geolocateControl, "top-left");
    onMapLoad(mapRef.current);
  }, [mapRef, mapContainer, onMapLoad]);

  return (
    <div
      ref={mapContainer}
      className="absolute top-0 left-0"
      style={{ height: "76vh", width: "100%" }}
    />
  );
};

export default MapContainer;
