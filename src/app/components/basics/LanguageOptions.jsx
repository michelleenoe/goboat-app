import { RadioButton } from "./RadioButton";
import { useLanguage } from "../../lib/context/language";
import { copy } from "../../lib/content/copy";

export function LanguageOptions() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex justify-between items-center mb-6">
      <span className="text-typoPrimary mb-2 block">
        {copy[language].chooseLanguage}
      </span>
      <div className="flex space-x-4">
        <RadioButton
          name="language"
          value="en"
          label={copy[language].language.english}
          checked={language === "en"}
          onChange={() => changeLanguage("en")}
        />
        <RadioButton
          name="language"
          value="da"
          label={copy[language].language.danish}
          checked={language === "da"}
          onChange={() => changeLanguage("da")}
        />
      </div>
    </div>
  );
}
