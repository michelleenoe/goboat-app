"use client";
import { useState } from "react";
import ScreenOne from "@/app/components/onboarding/ScreenOne";
import ScreenTwo from "@/app/components/onboarding/ScreenTwo";
import ScreenThree from "@/app/components/onboarding/ScreenThree";

export default function Onboarding() {
  const [currentScreen, setCurrentScreen] = useState(1);

  const nextScreen = () => setCurrentScreen((prev) => Math.min(prev + 1, 3));
  const previousScreen = () => setCurrentScreen((prev) => Math.max(prev - 1, 1));

  return (
    <>
      {currentScreen === 1 && <ScreenOne onNext={nextScreen} />}
      {currentScreen === 2 && (
        <ScreenTwo onBack={previousScreen} onNext={nextScreen} />
      )}
      {currentScreen === 3 && (
        <ScreenThree onBack={previousScreen} onComplete={() => alert("Completed!")} />
      )}
    </>
  );
}
