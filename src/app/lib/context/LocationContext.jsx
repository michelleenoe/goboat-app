// CHAT GPT PROMPT: "Jeg arbejder på en React-applikation og ønsker at implementere en funktion til at håndtere brugerens valg om at aktivere eller deaktivere lokationsdeling. Funktionen skal gemme brugerens præference i localStorage, så indstillingen huskes mellem sessions."

// CHAT GPT LØSNING
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
