"use client";
import { useRouter } from "next/navigation";
import React from "react";
import DefaultButton from "./DefaultButton";
import { useLanguage } from "../../lib/context/language";
import { copy } from "../../lib/content/copy";
import NavigationButtons from "../basics/NavigationButtons";

export default function ScreenTwo({ onBack, onNext, onDurationSelect }) {
  const { language } = useLanguage();

  return (
    <>
      <h1 className="sr-only">Goboat Onboarding Screen number 2</h1>
      <div className="flex justify-center items-center">
        <div className="flex-grow flex flex-col items-center justify-center rounded-3xl bg-grey1 p-8 max-w-lg h-[350px]">
          <h2 className="text-xl font-bold mb-6">
            {copy[language].timer.title}
          </h2>
          <div className="flex flex-col">
            <DefaultButton text={copy[language].timer.oneHour} />
            <DefaultButton text={copy[language].timer.twoHours} />
            <DefaultButton text={copy[language].timer.threeHours} />
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <NavigationButtons handlePrev={onBack} handleNext={onNext} />
      </div>
    </>
  );
}
