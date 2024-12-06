"use client";
import React from "react";
import { useLanguage } from "../../lib/context/language";
import { copy } from "../../lib/content/copy";
import DefaultButton from "./DefaultButton";
import Image from "next/image";

export default function ScreenOne({ onNext }) {
  const { changeLanguage, language } = useLanguage();

  const handleLanguageSelect = (lang) => {
    changeLanguage(lang);
    onNext(); // Naviger til næste skærm efter valg af sprog
  };

  return (
    <div>
      <main className="">
        <div className="flex justify-center items-center ">
          <div className="flex-grow flex flex-col items-center justify-center rounded-3xl bg-grey1 p-8 max-w-lg h-[350px]">
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
        <div className="flex justify-end mt-8">
          <div className="flex justify-end gap-2">
            <button
              className="flex items-center justify-center w-11 h-11 bg-gray-300 text-darkBlue rounded-full opacity-40 cursor-not-allowed transition"
              disabled
            >
              <Image
                src="/Icons/chevron-left.svg"
                alt="Previous"
                width={30}
                height={30}
              />
            </button>
            <button
              onClick={onNext}
              className="flex items-center justify-center w-11 h-11 bg-goboatYellow text-darkBlue rounded-full transition"
            >
              <Image
                src="/Icons/chevron-right.svg"
                alt="Next"
                width={30}
                height={30}
              />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
