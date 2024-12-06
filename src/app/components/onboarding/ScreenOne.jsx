"use client";
import React from "react";
import { useLanguage } from "../../lib/context/language";
import { copy } from "../../lib/content/copy";
import NavigationButtons from "../basics/NavigationButtons";
import DefaultButton from "./DefaultButton";

export default function ScreenOne({ onNext }) {
  const { changeLanguage, language } = useLanguage();
  console.log("Language Context:", { changeLanguage, language });

  const handleLanguageSelect = (lang) => {
    changeLanguage(lang);
    onNext();
  };

  return (
    <div>
      <main className="">
        <div className="flex justify-center items-center ">
          <div className="flex-grow flex flex-col items-center justify-center rounded-3xl bg-grey1 p-8 max-w-lg w-full">
            <h1 className="sr-only">Goboat Onboarding Screen number 1</h1>
            <h2 className="text-xl font-bold mb-4">{copy[language].welcome}</h2>
            <p className="text-center mb-8">{copy[language].chooseLanguage}</p>
            <DefaultButton
              onClick={() => handleLanguageSelect("da")}
              text={copy[language].language.danish}
            />

            <DefaultButton
              onClick={() => handleLanguageSelect("en")}
              text={copy[language].language.english}
            />
          </div>
        </div>
        <div className="flex justify-end mt-8 ">
          <NavigationButtons />
        </div>
      </main>
    </div>
  );
}
