// CHAT GPT PROMPT: "Jeg arbejder på en React-applikation, hvor jeg vil implementere sprog. Jeg ønsker at kunne skifte mellem dansk og engelsk og gemme brugerens præference i localStorage, så den huskes ved genindlæsning."

// CHAT GPT LØSNING
"use client";
import { createContext, useState, useContext, useEffect } from "react";
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
