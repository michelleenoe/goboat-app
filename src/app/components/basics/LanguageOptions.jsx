import React, { useState } from "react";
import { RadioButton } from "./RadioButton";

export function LanguageOptions() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  return (
    <>
      {/* Language Options */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-typoPrimary mb-2 block ">Language</span>
        <div className="flex space-x-4">
          <RadioButton
            name="language"
            value="English"
            label="English"
            checked={selectedLanguage === "English"}
            onChange={() => setSelectedLanguage("English")}
          />
          <RadioButton
            name="language"
            value="Dansk"
            label="Dansk"
            checked={selectedLanguage === "Dansk"}
            onChange={() => setSelectedLanguage("Dansk")}
          />
        </div>
      </div>
    </>
  );
}
