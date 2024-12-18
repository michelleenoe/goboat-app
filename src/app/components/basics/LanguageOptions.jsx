import { RadioButton } from "./RadioButton";
import { useLanguage } from "../../lib/context/LanguageContext";
import { settingsData } from "../../lib/content/settingsData";

export function LanguageOptions() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex justify-between items-center mb-6 ">
      <span className="text-typoPrimary mb-2 block">
        {settingsData[language].language}
      </span>
      <div className="flex space-x-4">
        <RadioButton
          name="language"
          value="en"
          label="English"
          checked={language === "en"}
          onChange={() => changeLanguage("en")}
        />
        <RadioButton
          name="language"
          value="da"
          label="Dansk"
          checked={language === "da"}
          onChange={() => changeLanguage("da")}
        />
      </div>
    </div>
  );
}
