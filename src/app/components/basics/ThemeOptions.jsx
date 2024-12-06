import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { RadioButton } from "./RadioButton";

export function ThemeOptions() {
  const { theme, setTheme } = useTheme(); // Brug global ThemeContext

  // Funktion til at opdatere tema
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme); // Opdater tema globalt
  };

  return (
    <>
      {/* Theme Options */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-typoPrimary dark:text-dark.typoPrimary mb-2 block">
          Theme
        </span>
        <div className="flex space-x-4">
          {/* Color Theme */}
          <RadioButton
            name="theme"
            value="light"
            label="Light"
            checked={theme === "light"}
            onChange={() => handleThemeChange("light")}
          />
          {/* Dark Theme */}
          <RadioButton
            name="theme"
            value="dark"
            label="Dark"
            checked={theme === "dark"}
            onChange={() => handleThemeChange("dark")}
          />
        </div>
      </div>
    </>
  );
}
