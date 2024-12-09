"use client";
import { createContext, useContext, useState, useEffect } from "react";

const LocationContext = createContext();

export function LocationProvider({ children }) {
  const [locationEnabled, setLocationEnabled] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("locationEnabled")) || false;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("locationEnabled", JSON.stringify(locationEnabled));
  }, [locationEnabled]);

  return (
    <LocationContext.Provider value={{ locationEnabled, setLocationEnabled }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  return useContext(LocationContext);
}
