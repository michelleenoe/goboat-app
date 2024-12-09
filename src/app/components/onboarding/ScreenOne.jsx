"use client";
import React from "react";
import { useLanguage } from "../../lib/context/language";
import { copy } from "../../lib/content/copy";
import DefaultButton from "./DefaultButton";
import OnboardingButtons from "./OnboardingButtons";

export default function ScreenOne({ onNext }) {
  const { changeLanguage, language } = useLanguage();

  const handleLanguageSelect = (lang) => {
    changeLanguage(lang);
    onNext(); // Naviger til næste skærm efter valg af sprog
  };

  return (
    <>
      <h1 className="sr-only">Goboat Onboarding Screen number 1</h1>
      <div className="flex justify-center items-center">
        <div className="flex-grow flex flex-col items-center justify-center rounded-3xl bg-grey1 p-8 max-w-lg h-[350px]">
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
      <OnboardingButtons onNext={onNext} disableBack />
    </>
  );
}
