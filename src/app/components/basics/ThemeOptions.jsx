import React from "react";
import { useTheme } from "@/app/lib/context/ThemeContext";
import { useLanguage } from "@/app/lib/context/language";
import { RadioButton } from "./RadioButton";
import { settingsData } from "../../lib/content/settingsData";

export function ThemeOptions() {
  const { theme, setTheme } = useTheme(); // Brug global ThemeContext
  const { language } = useLanguage(); // Hent det aktuelle sprog fra konteksten

  // Funktion til at opdatere tema
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme); // Opdater tema globalt
  };

  // Hent oversatte tekster baseret på det aktuelle sprog
  const localizedText = settingsData[language];

  return (
    <>
      {/* Theme Options */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-typoPrimary dark:text-dark.typoPrimary mb-2 block">
          {localizedText.theme} {/* Brug oversat tekst til "Theme" */}
        </span>
        <div className="flex space-x-4">
          {/* Light Theme */}
          <RadioButton
            name="theme"
            value="light"
            label={localizedText.light}
            checked={theme === "light"}
            onChange={() => handleThemeChange("light")}
          />
          {/* Dark Theme */}
          <RadioButton
            name="theme"
            value="dark"
            label={localizedText.dark}
            checked={theme === "dark"}
            onChange={() => handleThemeChange("dark")}
          />
        </div>
      </div>
    </>
  );
}
