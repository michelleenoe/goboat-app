"use client";
import React from 'react';

export default function GeoLocate({ handleGeolocateClick }) {
  return (
    <button
      onClick={handleGeolocateClick}
      className="bg-white p-3 rounded-full shadow-md"
      aria-label="Geolocate"
    >
      <img
        src="/Icons/geo-location.svg"
        alt="Geolocation icon"
        width="30"
        height="30"
      />
    </button>
  );
}
