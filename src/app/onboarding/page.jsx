"use client";
import { useState } from "react";
import ScreenOne from "@/app/components/onboarding/ScreenOne";
import ScreenTwo from "@/app/components/onboarding/ScreenTwo";
import ScreenThree from "@/app/components/onboarding/ScreenThree";

export default function Onboarding() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const nextScreen = () => setCurrentScreen((prev) => Math.min(prev + 1, 3));
  const previousScreen = () => setCurrentScreen((prev) => Math.max(prev - 1, 1));

  return (
    <>
      {currentScreen === 1 && (
        <ScreenOne onNext={nextScreen} setSelectedLanguage={setSelectedLanguage} />
      )}
      {currentScreen === 2 && (
        <ScreenTwo
          onBack={previousScreen}
          onNext={nextScreen}
          language={selectedLanguage}
        />
      )}
      {currentScreen === 3 && (
        <ScreenThree
          onBack={previousScreen}
          onComplete={() => alert("Completed!")}
          language={selectedLanguage}
        />
      )}
    </>
  );
}
